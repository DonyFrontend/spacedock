import { useEffect, useMemo, useState } from "react";
import { heliophysicsConcepts } from "@/shared/data/heliophysicsData";
import { fallbackHeliophysicsNews } from "@/shared/data/newsFallback";
import { DONKI_TYPES, fetchDonkiEvents, fetchNews } from "@/shared/api/nasa";
import type { DonkiEvent, DonkiEventType, NewsItem } from "@/shared/types/nasa";
import { formatDateTime, formatISODateInput } from "@/shared/utils/date";
import { NewsSection } from "@/shared/ui/news";
import { ReactParticles } from "@/widgets/particles";
import { LoadingScreen } from "@/shared/ui/loading-screen";

const DEFAULT_RANGE_DAYS = 30;

const Heliophysics = () => {
  const today = useMemo(() => new Date(), []);
  const defaultStart = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - DEFAULT_RANGE_DAYS);
    return date;
  }, []);

  const defaultStartValue = formatISODateInput(defaultStart);
  const defaultEndValue = formatISODateInput(today);
  const [filters, setFilters] = useState({
    type: "ALL" as DonkiEventType,
    startDate: defaultStartValue,
    endDate: defaultEndValue,
  });
  const [draftFilters, setDraftFilters] = useState(filters);
  const [events, setEvents] = useState<DonkiEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    setEventsLoading(true);
    setEventsError(null);
    fetchDonkiEvents({
      type: filters.type,
      startDate: filters.startDate,
      endDate: filters.endDate,
    })
      .then((items) => {
        if (active) {
          setEvents(items);
        }
      })
      .catch(() => {
        if (active) {
          setEventsError("Unable to load space weather data");
          setEvents([]);
        }
      })
      .finally(() => {
        if (active) {
          setEventsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [filters]);

  useEffect(() => {
    let active = true;
    setNewsLoading(true);
    fetchNews("heliophysics", fallbackHeliophysicsNews)
      .then((items) => {
        if (active) {
          setNews(items);
        }
      })
      .catch(() => {
        if (active) {
          setNewsError("News feed unavailable");
          setNews(fallbackHeliophysicsNews);
        }
      })
      .finally(() => {
        if (active) {
          setNewsLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="text-white px-4 pb-16 relative">
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <ReactParticles />
      </div>
      <div className="max-w-6xl mx-auto pt-16 flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">NASA Heliophysics</h1>
          <p className="text-white/70">
            Heliophysics studies the Sun, solar wind, and their interactions
            with planets, including Earth’s magnetosphere. It helps NASA
            understand space weather, which can affect satellites, astronauts,
            power grids, and communications.
          </p>
          <p className="text-white/70">
            By monitoring solar activity and tracking events such as flares and
            coronal mass ejections, NASA provides data that keeps missions and
            infrastructure safer.
          </p>
        </header>

        <section aria-labelledby="core-concepts" className="flex flex-col gap-6">
          <h2 id="core-concepts" className="text-2xl font-semibold">
            Core concepts
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {heliophysicsConcepts.map((concept) => (
              <article
                key={concept.term}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2"
              >
                <h3 className="text-lg font-semibold">{concept.term}</h3>
                <p className="text-sm text-white/70">{concept.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="live-data"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h2 id="live-data" className="text-2xl font-semibold">
              Live / recent data (NASA DONKI)
            </h2>
            <p className="text-sm text-white/70">
              Showing notifications from the Space Weather Database Of
              Notifications, Knowledge, Information (DONKI).
            </p>
          </div>

          <form
            className="grid gap-4 md:grid-cols-4 rounded-xl border border-white/10 bg-white/5 p-4"
            onSubmit={(event) => {
              event.preventDefault();
              setFilters(draftFilters);
            }}
          >
            <label className="flex flex-col gap-2 text-sm">
              Event type
              <select
                value={draftFilters.type}
                onChange={(event) =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    type: event.target.value as DonkiEventType,
                  }))
                }
                className="rounded-lg bg-black/60 border border-white/10 px-3 py-2"
              >
                <option value="ALL">All types</option>
                {DONKI_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Start date
              <input
                type="date"
                value={draftFilters.startDate}
                onChange={(event) =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    startDate: event.target.value,
                  }))
                }
                className="rounded-lg bg-black/60 border border-white/10 px-3 py-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              End date
              <input
                type="date"
                value={draftFilters.endDate}
                onChange={(event) =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    endDate: event.target.value,
                  }))
                }
                className="rounded-lg bg-black/60 border border-white/10 px-3 py-2"
              />
            </label>
            <div className="flex items-end gap-3">
              <button
                type="submit"
                className="rounded-lg bg-main px-4 py-2 text-sm font-semibold text-white shadow-main"
              >
                Apply filters
              </button>
              <button
                type="button"
                onClick={() => {
                  const resetFilters = {
                    type: "ALL" as DonkiEventType,
                    startDate: defaultStartValue,
                    endDate: defaultEndValue,
                  };
                  setDraftFilters(resetFilters);
                  setFilters(resetFilters);
                }}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm"
              >
                Reset
              </button>
            </div>
          </form>

          {eventsLoading && (
            <LoadingScreen
              variant="section"
              message="Loading space weather events..."
            />
          )}
          {eventsError && !eventsLoading && (
            <p className="text-red-200">{eventsError}</p>
          )}
          {!eventsLoading && events.length === 0 && (
            <p className="text-white/80">
              No events for this range. Try expanding the date window.
            </p>
          )}

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{event.type}</span>
                  <span>{formatDateTime(event.startTime)}</span>
                </div>
                <h3 className="text-lg font-semibold">
                  {event.classification || "Space weather event"}
                </h3>
                {event.speed && (
                  <p className="text-sm text-white/70">
                    Speed: {event.speed} km/s
                  </p>
                )}
                {event.summary && (
                  <p className="text-sm text-white/70">{event.summary}</p>
                )}
                {event.sourceLink && (
                  <a
                    href={event.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-main underline-offset-2 hover:underline"
                  >
                    View source →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <NewsSection
          title="Latest news"
          items={news}
          loading={newsLoading}
          error={newsError}
        />
      </div>
    </main>
  );
};

export default Heliophysics;
