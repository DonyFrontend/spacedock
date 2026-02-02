import { useEffect, useState } from "react";
import {
  biologicalSciences,
  physicalSciences,
  researchHighlights,
} from "@/shared/data/bpsData";
import { fetchNews } from "@/shared/api/nasa";
import { fallbackBpsNews } from "@/shared/data/newsFallback";
import type { NewsItem } from "@/shared/types/nasa";
import { NewsSection } from "@/shared/ui/news";
import { ReactParticles } from "@/widgets/particles";

const BiologicalPhysical = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setNewsLoading(true);
    fetchNews("bps", fallbackBpsNews)
      .then((items) => {
        if (active) {
          setNews(items);
        }
      })
      .catch(() => {
        if (active) {
          setNewsError("News feed unavailable");
          setNews(fallbackBpsNews);
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
          <h1 className="text-4xl font-semibold">
            NASA Biological & Physical Sciences
          </h1>
          <p className="text-white/70">
            NASA’s Biological & Physical Sciences (BPS) program investigates
            how living systems and physical processes behave in microgravity.
            These studies support astronaut health, improve life on Earth, and
            enable advanced technologies for future exploration.
          </p>
          <p className="text-white/70">
            Experiments aboard the International Space Station provide a
            long-duration laboratory for biology, materials, combustion, and
            fundamental physics research that cannot be performed on the
            ground.
          </p>
        </header>

        <section
          aria-labelledby="biological-sciences"
          className="flex flex-col gap-6"
        >
          <h2 id="biological-sciences" className="text-2xl font-semibold">
            Biological sciences
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {biologicalSciences.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="physical-sciences"
          className="flex flex-col gap-6"
        >
          <h2 id="physical-sciences" className="text-2xl font-semibold">
            Physical sciences
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {physicalSciences.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="research-highlights"
          className="flex flex-col gap-6"
        >
          <h2 id="research-highlights" className="text-2xl font-semibold">
            Research highlights / experiments
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {researchHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-main underline-offset-2 hover:underline"
                >
                  Learn more →
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

export default BiologicalPhysical;
