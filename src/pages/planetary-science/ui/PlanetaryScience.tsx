import { useEffect, useState } from "react";
import { planetFacts, planetaryMissions } from "@/shared/data/planetaryData";
import { fetchNasaImages, fetchNews } from "@/shared/api/nasa";
import { fallbackPlanetaryNews } from "@/shared/data/newsFallback";
import type { NasaImageItem, NewsItem } from "@/shared/types/nasa";
import { NewsSection } from "@/shared/ui/news";
import { LazyImage } from "@/shared/ui/lazy-image";
import { formatDate } from "@/shared/utils/date";
import { ReactParticles } from "@/widgets/particles";
import { LoadingScreen } from "@/shared/ui/loading-screen";

const PlanetaryScience = () => {
  const [media, setMedia] = useState<NasaImageItem[]>([]);
  const [mediaLoading, setMediaLoading] = useState<boolean>(true);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    // setMediaLoading(true);
    fetchNasaImages("planetary science solar system", 12)
      .then((items) => {
        if (active) {
          setMedia(items);
        }
      })
      .catch(() => {
        if (active) {
          setMediaError("NASA media could not be loaded");
        }
      })
      .finally(() => {
        if (active) {
          setMediaLoading(false);
        }
      });

    // setNewsLoading(true);
    fetchNews("planetary", fallbackPlanetaryNews)
      .then((items) => {
        if (active) {
          setNews(items);
        }
      })
      .catch(() => {
        if (active) {
          setNewsError("News feed unavailable");
          setNews(fallbackPlanetaryNews);
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
          <h1 className="text-4xl font-semibold">Planetary Science at NASA</h1>
          <p className="text-white/70">
            Planetary Science at NASA explores the origins, evolution, and
            dynamics of worlds across our solar system. From rocky inner planets
            to icy giants, NASA missions collect imagery, chemistry, and
            geophysical data that help scientists understand how planets form
            and change.
          </p>
          <p className="text-white/70">
            This research connects planetary processes with Earth’s own history,
            helping us compare climates, atmospheres, and surfaces across
            diverse environments. It also guides future exploration strategies
            by identifying the most compelling targets for robotic and human
            missions.
          </p>
        </header>

        <section aria-labelledby="planets-data" className="flex flex-col gap-6">
          <h2 id="planets-data" className="text-2xl font-semibold">
            Planets data
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {planetFacts.map((planet) => (
              <article
                key={planet.name}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2"
              >
                <h3 className="text-xl font-semibold">{planet.name}</h3>
                <dl className="text-sm text-white/70 space-y-1">
                  <div className="flex justify-between gap-2">
                    <dt>Radius</dt>
                    <dd>{planet.radiusKm}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Mass</dt>
                    <dd>{planet.mass}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Orbit period</dt>
                    <dd>{planet.orbitalPeriod}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Mean temp</dt>
                    <dd>{planet.meanTemp}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Moons</dt>
                    <dd>{planet.moons}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="missions-discoveries"
          className="flex flex-col gap-6"
        >
          <h2 id="missions-discoveries" className="text-2xl font-semibold">
            Missions / Discoveries
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {planetaryMissions.map((mission) => (
              <article
                key={mission.name}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{mission.timeframe}</span>
                </div>
                <h3 className="text-lg font-semibold">{mission.name}</h3>
                <p className="text-sm text-white/70">{mission.description}</p>
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

        <section aria-labelledby="media" className="flex flex-col gap-6">
          <h2 id="media" className="text-2xl font-semibold">
            Media
          </h2>
          {mediaLoading && (
            <LoadingScreen variant="section" message="Loading NASA imagery..." />
          )}
          {mediaError && !mediaLoading && (
            <p className="text-red-200">{mediaError}</p>
          )}
          {!mediaLoading && media.length === 0 && (
            <p className="text-white/80">No imagery available right now.</p>
          )}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {media.map((item) => (
              <article
                key={item.id}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
              >
                <LazyImage
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs text-white/60">
                    {formatDate(item.dateCreated)}
                  </p>
                  {item.description && (
                    <p className="text-sm text-white/70">{item.description}</p>
                  )}
                </div>
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

export default PlanetaryScience;
