import { fetchWithCache } from "./cache";
import { truncate, stripHtml } from "@/shared/utils/text";
import type { DonkiEvent, DonkiEventType, NewsItem, NasaImageItem } from "@/shared/types/nasa";

const NASA_API_BASE = import.meta.env.VITE_BASE_API || "https://api.nasa.gov";
const NASA_API_KEY = import.meta.env.VITE_API_KEY || "DEMO_KEY";
const RSS_PROXY =
  import.meta.env.VITE_RSS_PROXY || "https://api.allorigins.win/raw?url=";

const NEWS_CACHE_TTL = 1000 * 60 * 20;
const DATA_CACHE_TTL = 1000 * 60 * 30;

const buildNasaUrl = (path: string, params?: Record<string, string>) => {
  const url = new URL(path, NASA_API_BASE);
  url.searchParams.set("api_key", NASA_API_KEY);
  Object.entries(params || {}).forEach(([key, value]) =>
    url.searchParams.set(key, value),
  );
  return url.toString();
};

const fetchRssText = async (url: string) => {
  const proxied = `${RSS_PROXY}${encodeURIComponent(url)}`;
  const response = await fetch(proxied);
  if (!response.ok) {
    throw new Error("Failed to load RSS feed");
  }
  return response.text();
};

const parseRssItems = (xmlText: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const items = Array.from(doc.querySelectorAll("item"));
  const entries = Array.from(doc.querySelectorAll("entry"));
  const source =
    doc.querySelector("channel > title")?.textContent ||
    doc.querySelector("feed > title")?.textContent ||
    "NASA";

  const normalized = items.map((item) => ({
    title: item.querySelector("title")?.textContent || "Untitled",
    link: item.querySelector("link")?.textContent || "",
    description:
      item.querySelector("description")?.textContent ||
      item.querySelector("content")?.textContent ||
      "",
    pubDate:
      item.querySelector("pubDate")?.textContent ||
      item.querySelector("dc\\:date")?.textContent ||
      "",
    source,
  }));

  const normalizedEntries = entries.map((entry) => ({
    title: entry.querySelector("title")?.textContent || "Untitled",
    link:
      entry.querySelector("link")?.getAttribute("href") ||
      entry.querySelector("link")?.textContent ||
      "",
    description:
      entry.querySelector("summary")?.textContent ||
      entry.querySelector("content")?.textContent ||
      "",
    pubDate:
      entry.querySelector("updated")?.textContent ||
      entry.querySelector("published")?.textContent ||
      "",
    source,
  }));

  return [...normalized, ...normalizedEntries];
};

const normalizeNewsItems = (items: ReturnType<typeof parseRssItems>) => {
  return items
    .map((item) => {
      const summary = truncate(stripHtml(item.description || ""), 220);
      const date = item.pubDate || new Date().toISOString();
      return {
        id: `${item.title}-${item.link}`.replace(/\s+/g, "-"),
        title: item.title,
        summary: summary || "NASA update.",
        source: item.source || "NASA",
        url: item.link,
        date,
      } satisfies NewsItem;
    })
    .filter((item) => Boolean(item.url));
};

const filterByKeywords = (items: NewsItem[], keywords: string[]) => {
  if (keywords.length === 0) {
    return items;
  }
  const matcher = new RegExp(keywords.join("|"), "i");
  return items.filter(
    (item) => matcher.test(item.title) || matcher.test(item.summary),
  );
};

export const fetchNews = async (
  topic: keyof typeof NEWS_TOPICS,
  fallback: NewsItem[],
) => {
  const config = NEWS_TOPICS[topic];
  const cacheKey = `news:${topic}`;
  try {
    const items = await fetchWithCache(cacheKey, async () => {
      const allItems: NewsItem[] = [];
      for (const url of config.urls) {
        const xml = await fetchRssText(url);
        const parsed = normalizeNewsItems(parseRssItems(xml));
        allItems.push(...parsed);
      }
      const filtered = filterByKeywords(allItems, config.keywords);
      const sorted = filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
      return sorted.slice(0, 10);
    }, NEWS_CACHE_TTL);

    if (items.length >= 5) {
      return items;
    }
    return [...items, ...fallback].slice(0, 10);
  } catch {
    return fallback.slice(0, 10);
  }
};

export const fetchNasaImages = async (
  query: string,
  limit = 12,
): Promise<NasaImageItem[]> => {
  const searchUrl = new URL("https://images-api.nasa.gov/search");
  searchUrl.searchParams.set("q", query);
  searchUrl.searchParams.set("media_type", "image");
  searchUrl.searchParams.set("page", "1");

  return fetchWithCache(
    `images:${query}`,
    async () => {
      const response = await fetch(searchUrl.toString());
      if (!response.ok) {
        throw new Error("Failed to fetch NASA media");
      }
      const data = (await response.json()) as {
        collection?: { items?: Array<Record<string, unknown>> };
      };
      const items = data.collection?.items ?? [];
      return items
        .map((item) => {
          const dataItem = (item as { data?: Array<Record<string, string>> })
            .data?.[0];
          const linkItem = (item as { links?: Array<{ href?: string }> })
            .links?.[0];
          if (!dataItem || !linkItem?.href) {
            return null;
          }
          return {
            id: dataItem.nasa_id || dataItem.title || linkItem.href,
            title: dataItem.title || "NASA image",
            description: dataItem.description,
            imageUrl: linkItem.href,
            dateCreated: dataItem.date_created,
          } satisfies NasaImageItem;
        })
        .filter(Boolean)
        .slice(0, limit) as NasaImageItem[];
    },
    DATA_CACHE_TTL,
  );
};

const parseDonkiEvents = (
  type: Exclude<DonkiEventType, "ALL">,
  payload: Array<Record<string, unknown>>,
): DonkiEvent[] => {
  return payload.map((item) => {
    const baseId =
      (item.activityID as string) ||
      (item.flrID as string) ||
      (item.gstID as string) ||
      (item.sepID as string) ||
      (item.ipsID as string) ||
      (item.mpcID as string) ||
      `${type}-${item.eventTime || item.startTime || item.beginTime}`;

    const startTime =
      (item.startTime as string) ||
      (item.beginTime as string) ||
      (item.peakTime as string) ||
      (item.eventTime as string) ||
      new Date().toISOString();

    const cmeAnalyses = item.cmeAnalyses as Array<{
      speed?: number;
      type?: string;
      link?: string;
    }> | null;

    return {
      id: baseId,
      type,
      startTime,
      summary: (item.note as string) || (item.description as string) || "",
      speed: cmeAnalyses?.[0]?.speed,
      classification:
        (item.classType as string) ||
        (item.gstLevel as string) ||
        cmeAnalyses?.[0]?.type,
      sourceLink: (item.link as string) || cmeAnalyses?.[0]?.link,
    };
  });
};

export const fetchDonkiEvents = async ({
  type,
  startDate,
  endDate,
}: {
  type: DonkiEventType;
  startDate: string;
  endDate: string;
}): Promise<DonkiEvent[]> => {
  const types = type === "ALL" ? DONKI_TYPES : [type];
  const cacheKey = `donki:${type}:${startDate}:${endDate}`;

  return fetchWithCache(
    cacheKey,
    async () => {
      const responses = await Promise.all(
        types.map(async (eventType) => {
          const url = buildNasaUrl(`/DONKI/${eventType}`, {
            startDate,
            endDate,
          });
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch DONKI data");
          }
          const data = (await response.json()) as Array<Record<string, unknown>>;
          return parseDonkiEvents(eventType, data);
        }),
      );
      return responses
        .flat()
        .sort(
          (a, b) =>
            new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
        )
        .slice(0, 50);
    },
    DATA_CACHE_TTL,
  );
};

export const DONKI_TYPES: Exclude<DonkiEventType, "ALL">[] = [
  "CME",
  "FLR",
  "GST",
  "SEP",
  "IPS",
  "MPC",
];

export const NEWS_TOPICS = {
  planetary: {
    urls: [
      "https://www.nasa.gov/rss/dyn/solar_system.rss",
      "https://www.nasa.gov/rss/dyn/breaking_news.rss",
    ],
    keywords: ["planet", "mars", "jupiter", "saturn", "venus", "mercury"],
  },
  moon: {
    urls: [
      "https://www.nasa.gov/rss/dyn/moon.rss",
      "https://www.nasa.gov/rss/dyn/breaking_news.rss",
    ],
    keywords: ["moon", "lunar", "artemis"],
  },
  heliophysics: {
    urls: [
      "https://www.nasa.gov/rss/dyn/heliophysics.rss",
      "https://www.nasa.gov/rss/dyn/breaking_news.rss",
    ],
    keywords: ["sun", "solar", "heliophysics", "space weather"],
  },
  bps: {
    urls: [
      "https://www.nasa.gov/rss/dyn/space_station.rss",
      "https://www.nasa.gov/rss/dyn/breaking_news.rss",
    ],
    keywords: ["station", "iss", "biology", "microgravity", "materials"],
  },
};
