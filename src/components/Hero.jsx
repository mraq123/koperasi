export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          {/* Left: thesis */}
          <div>
            {/* <p className="font-mono text-xs uppercase tracking-[0.2em] text-koperasi mb-6">
              Buku Anggota Digital — Edisi Juni 2026
            </p> */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink font-medium tracking-tight">
             Membangun Ekonomi Kerakyatan Melalui Koperasi Indonesia
            </h1>
            <p className="mt-6 text-lg text-charcoal/75 max-w-xl font-body leading-relaxed">
            Koperasi merupakan badan usaha yang berlandaskan asas kekeluargaan dan gotong royong. Sebagai salah satu pilar perekonomian nasional, koperasi hadir untuk meningkatkan kesejahteraan anggota sekaligus mendorong pertumbuhan ekonomi masyarakat secara berkelanjutan. Website ini menyediakan berbagai informasi, edukasi, dan artikel mengenai perkembangan koperasi di Indonesia.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <a
                href="#artikel"
                className="bg-koperasi text-paper font-body font-medium text-sm px-6 py-3.5 rounded-sm hover:bg-ink transition-colors"
              >
                Mulai membaca
              </a>
              {/* <a
                href="#tentang"
                className="font-body text-sm text-ink/80 dotted-leader pb-1 hover:text-koperasi transition-colors"
              >
                Kenapa kami menulis ini
              </a> */}
            </div>
          </div>

          {/* Right: passbook card */}
       {/* Right */}
<div className="relative">
  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

    {/* Header */}
    <div className="bg-green-700 text-white px-6 py-4">
      <p className="text-xs uppercase tracking-widest opacity-80">
        Tugas Mata Kuliah
      </p>
      <h3 className="text-2xl font-bold">
        Koperasi & UKM
      </h3>
    </div>

    {/* Body */}
    <div className="p-6">

      <div className="flex gap-6">

        {/* Biodata */}
        <div className="flex-1 space-y-4">

          <div>
            <p className="text-gray-500 text-sm">Nama</p>
            <h4 className="font-semibold text-lg">
              Hana Syaidah
            </h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">NIK</p>
            <h4 className="font-semibold">
              241010500301
            </h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Kelas</p>
            <h4 className="font-semibold">
              004 SMJK 002
            </h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Mata Kuliah
            </p>
            <h4 className="font-semibold">
              Koperasi & UKM
            </h4>
          </div>

        </div>

        {/* Foto */}
        <div className="w-40">

          <img
            src="/public/hanacantik.jpeg"
            alt="Koperasi Indonesia"
            className="rounded-xl object-cover h-52 w-full shadow-md"
          />

        </div>

      </div>

      

      {/* Footer */}
      <div className="mt-6 border-t pt-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          Website ini dibuat sebagai media edukasi mengenai
          perkembangan koperasi di Indonesia serta memenuhi tugas
          mata kuliah <span className="font-semibold">Koperasi & UKM</span>.
        </p>
      </div>

    </div>

  </div>
</div>
        </div>

        
      </div>

    <section
  id="edukasi"
  className="relative overflow-hidden py-24 bg-gradient-to-b from-green-50 via-white to-emerald-50"
>
  {/* Background Decoration */}
  <div className="absolute -top-24 -left-20 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">

      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
        🌿 Edukasi Koperasi
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
        Materi Dasar
        <span className="text-green-700">
          {" "}Koperasi Indonesia
        </span>
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
        Kenali konsep dasar koperasi sebagai pilar ekonomi kerakyatan.
        Mulai dari pengertian, tujuan, prinsip, jenis, hingga manfaat
        koperasi dalam meningkatkan kesejahteraan masyarakat Indonesia.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card */}
      {[
        // {
        //   icon: "🏛️",
        //   title: "Pengertian Koperasi",
        //   desc: "Koperasi adalah badan usaha yang dimiliki dan dikelola bersama oleh para anggotanya berdasarkan asas kekeluargaan untuk meningkatkan kesejahteraan bersama."
        // },
        {
          icon: "🎯",
          title: "Tujuan Koperasi",
          desc: "Meningkatkan kesejahteraan anggota, memperkuat ekonomi rakyat, menciptakan pemerataan pendapatan, serta mendorong pertumbuhan usaha bersama."
        },
        {
          icon: "🤝",
          title: "Prinsip Koperasi",
          desc: "Keanggotaan sukarela, pengelolaan demokratis, partisipasi ekonomi anggota, kemandirian, pendidikan koperasi, kerja sama, dan kepedulian sosial."
        },
        {
          icon: "🏦",
          title: "Jenis Koperasi",
          desc: "Meliputi koperasi konsumen, produsen, simpan pinjam, pemasaran, serta koperasi jasa sesuai kebutuhan dan kegiatan anggotanya."
        },
        {
          icon: "💰",
          title: "Sisa Hasil Usaha (SHU)",
          desc: "SHU merupakan keuntungan koperasi yang dibagikan kepada anggota secara adil berdasarkan besarnya partisipasi dalam kegiatan koperasi."
        },
        {
          icon: "🌱",
          title: "Manfaat Koperasi",
          desc: "Membantu memperoleh modal usaha, meningkatkan kesejahteraan anggota, memperkuat UMKM, serta mendukung pembangunan ekonomi masyarakat."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl bg-white border border-green-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* Top Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="mt-6 text-xl font-bold text-gray-900">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-7">
            {item.desc}
          </p>

          {/* Footer */}
          {/* <div className="mt-6 flex items-center text-green-700 font-medium text-sm">
            Pelajari lebih lanjut
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div> */}
        </div>
      ))}

    </div>

    {/* Bottom Quote */}
    <div className="mt-20 max-w-4xl mx-auto rounded-3xl bg-green-700 text-white p-10 shadow-xl">

      <p className="text-2xl font-semibold leading-relaxed text-center">
        "Koperasi bukan hanya sebuah badan usaha, tetapi juga wujud
        semangat gotong royong, demokrasi ekonomi, dan kebersamaan
        dalam membangun kesejahteraan masyarakat."
      </p>

      <div className="mt-6 text-center text-green-100">
        — Pilar Ekonomi Kerakyatan Indonesia
      </div>

    </div>

  </div>
    </section>
    </section>



  );
}
