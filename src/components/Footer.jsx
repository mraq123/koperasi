export default function Footer() {
  return (
   <footer id="tentang" className="bg-green-900 text-white mt-16">
  <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">

    {/* BRAND */}
    <div>
      <p className="font-display text-2xl mb-3">
        Koperasi Indonesia
      </p>

      <p className="text-white/70 text-sm leading-relaxed max-w-sm">
        Platform edukasi tentang koperasi di Indonesia yang membahas
        pengertian, prinsip, jenis, serta peran koperasi dalam
        meningkatkan kesejahteraan masyarakat melalui ekonomi
        kerakyatan dan gotong royong.
      </p>
    </div>

    {/* NAVIGASI */}
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-green-300 mb-4">
        Navigasi
      </p>

      <ul className="space-y-2.5 text-sm text-white/70">
        <li>
          <a href="#top" className="hover:text-white transition">
            Beranda
          </a>
        </li>
        <li>
          <a href="#artikel" className="hover:text-white transition">
            Artikel Edukasi
          </a>
        </li>
        <li>
          <a href="#edukasi" className="hover:text-white transition">
            Materi Koperasi
          </a>
        </li>
        {/* <li>
          <a href="#tentang" className="hover:text-white transition">
            Tentang Website
          </a>
        </li> */}
      </ul>
    </div>

    {/* INFORMASI */}
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-green-300 mb-4">
        Informasi
      </p>

      <ul className="space-y-2.5 text-sm text-white/70">
        <li>📚 Edukasi Koperasi Indonesia</li>
        <li>🏛️ Materi sesuai UU No. 25 Tahun 1992</li>
        <li>🤝 Berbasis ekonomi kerakyatan</li>
        <li>🌱 Fokus pada UMKM & masyarakat</li>
      </ul>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-white/10 py-6">
    <p className="text-center font-mono text-xs text-white/50">
      © 2026 Koperasi Indonesia — Dibuat sebagai media pembelajaran dan edukasi ekonomi kerakyatan
    </p>
  </div>
</footer>
  );
}
