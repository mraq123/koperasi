import { useState } from "react";
import { articles, categories } from "../data/articles";
import ArticleEntry from "./ArticleEntry";

export default function ArticleList() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua" ? articles : articles.filter((a) => a.category === active);

  return (
    <section id="artikel" className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-koperasi mb-3">
            Halaman Pembukuan
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-medium tracking-tight">
            Daftar artikel
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs uppercase tracking-wide px-3.5 py-2 rounded-sm border transition-colors ${
                active === cat
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/25 text-charcoal/70 hover:border-koperasi hover:text-koperasi"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filtered.length > 0 ? (
          filtered.map((article) => <ArticleEntry key={article.no} article={article} />)
        ) : (
          <p className="py-12 text-center text-charcoal/60 font-body">
            Belum ada artikel di kategori ini. Coba kategori lain.
          </p>
        )}
      </div>
    </section>
  );
}
