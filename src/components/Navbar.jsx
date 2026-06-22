export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/15">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src="/logokoperasi.png" alt="logo" className="w-8 h-8" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
           Koperasi
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-charcoal/80">
          <a href="#artikel" className="hover:text-koperasi transition-colors">
            Artikel
          </a>
          <a href="#top" className="hover:text-koperasi transition-colors">
            Tentang
          </a>
          <a href="#edukasi" className="hover:text-koperasi transition-colors">
            Edukasi
          </a>
        </nav>

        <a
          href="#artikel"
          className="font-mono text-xs uppercase tracking-wide bg-ink text-paper px-4 py-2 rounded-sm hover:bg-koperasi transition-colors"
        >
          Baca Terbaru
        </a>
      </div>
    </header>
  );
}
