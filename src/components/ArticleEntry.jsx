export default function ArticleEntry({ article }) {
  const {
    no,
    title,
    category,
    excerpt,
    date,
    readTime,
    author,
    source,
    reference,
  } = article;

  return (
    <article className="group grid sm:grid-cols-[64px_1fr_auto] gap-4 sm:gap-6 py-7 border-b border-ink/15 hover:bg-ink/[0.03] transition-colors -mx-4 px-4 rounded-sm">

      {/* NO */}
      <div className="font-mono text-sm text-ochre tabular-nums">
        {no}
      </div>

      {/* CONTENT */}
      <div>

        {/* CATEGORY */}
        <p className="font-mono text-[11px] uppercase tracking-wide text-koperasi mb-2">
          {category}
        </p>

        {/* TITLE */}
        <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug group-hover:text-koperasi transition-colors">
          <a href="#">{title}</a>
        </h3>

        {/* EXCERPT */}
        <p className="mt-2 text-charcoal/70 text-sm sm:text-base leading-relaxed max-w-2xl">
          {excerpt}
        </p>

        {/* META */}
        <div className="mt-3 flex items-center gap-3 font-mono text-xs text-charcoal/50">
          <span>{author}</span>
          <span aria-hidden="true">·</span>
          <span>{readTime} baca</span>
        </div>

        {/* SOURCE UI */}
        {source && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">

            <span className="px-2 py-1 rounded-sm bg-green-100 text-green-700 font-mono">
              Sumber
            </span>

            <span className="text-charcoal/70">
              {source}
            </span>
          </div>
        )}

        {/* REFERENCE UI */}
        {reference && (
          <div className="mt-2 text-xs">
            <a
              href={reference}
              target="_blank"
              className="text-koperasi hover:underline font-mono"
            >
              Lihat Referensi →
            </a>
          </div>
        )}

      </div>

      {/* DATE */}
      <div className="font-mono text-xs text-charcoal/50 sm:text-right whitespace-nowrap">
        {date}
      </div>

    </article>
  );
}