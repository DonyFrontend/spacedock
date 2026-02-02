import { useEffect, useState } from "react";
import { moonFacts, moonMissions, moonTimeline } from "@/shared/data/moonData";
import { fallbackMoonNews } from "@/shared/data/newsFallback";
import { fetchNews } from "@/shared/api/nasa";
import type { NewsItem } from "@/shared/types/nasa";
import { NewsSection } from "@/shared/ui/news";

const LunaryDiscovery = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setNewsLoading(true);
    fetchNews("moon", fallbackMoonNews)
      .then((items) => {
        if (active) {
          setNews(items);
        }
      })
      .catch(() => {
        if (active) {
          setNewsError("News feed unavailable");
          setNews(fallbackMoonNews);
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
    <main className="text-white px-4 pb-16">
      <div className="max-w-6xl mx-auto pt-16 flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">
            Lunary Discovery And Expolation
          </h1>
          <p className="text-white/70">
            The Moon is a record keeper of the early solar system and a proving
            ground for future deep-space exploration. NASA studies lunar
            geology, resources, and radiation environments to understand how
            planets evolve and to prepare for sustained human presence.
          </p>
          <p className="text-white/70">
            Modern lunar exploration blends robotic scouts with the Artemis
            program to establish new infrastructure, validate technologies, and
            enable science on the surface and in lunar orbit.
          </p>
        </header>

        <section aria-labelledby="moon-facts" className="flex flex-col gap-6">
          <h2 id="moon-facts" className="text-2xl font-semibold">
            Moon facts
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {moonFacts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex justify-between gap-4"
              >
                <span className="text-sm text-white/60">{fact.label}</span>
                <span className="text-sm font-semibold">{fact.value}</span>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="exploration-timeline"
          className="flex flex-col gap-6"
        >
          <h2 id="exploration-timeline" className="text-2xl font-semibold">
            Exploration timeline
          </h2>
          <ol className="relative border-l border-white/10 pl-6 space-y-6">
            {moonTimeline.map((event) => (
              <li key={event.title} className="relative">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-main shadow-main"></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="text-xs text-white/60">{event.year}</span>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-white/70">{event.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="current-missions"
          className="flex flex-col gap-6"
        >
          <h2 id="current-missions" className="text-2xl font-semibold">
            Current missions / Instruments
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {moonMissions.map((mission) => (
              <article
                key={mission.name}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
              >
                <h3 className="text-lg font-semibold">{mission.name}</h3>
                <p className="text-sm text-white/70">{mission.focus}</p>
                <a
                  href={mission.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-main underline-offset-2 hover:underline"
                >
                  Mission page →
                </a>
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

export default LunaryDiscovery;
