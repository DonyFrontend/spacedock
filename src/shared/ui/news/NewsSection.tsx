import type { NewsItem } from "@/shared/types/nasa";
import { formatDate } from "@/shared/utils/date";

type NewsSectionProps = {
  title: string;
  items: NewsItem[];
  loading?: boolean;
  error?: string | null;
};

const NewsSection = ({ title, items, loading, error }: NewsSectionProps) => {
  return (
    <section aria-labelledby="latest-news" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 id="latest-news" className="text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-sm text-white/70">
          Freshest NASA updates, sorted by newest first.
        </p>
      </div>
      {loading && <p className="text-white/80">Loading latest news...</p>}
      {error && !loading && (
        <p className="text-red-200">
          {error}. Showing fallback stories instead.
        </p>
      )}
      {!loading && items.length === 0 && (
        <p className="text-white/80">
          No news available right now. Please check back later.
        </p>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>{formatDate(item.date)}</span>
              <span>{item.source}</span>
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-white/70">{item.summary}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-main underline-offset-2 hover:underline"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
