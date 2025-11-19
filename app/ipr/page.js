export default function IPRPage() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  ];

  const impactMetrics = [
    { title: "Patents Filed", value: "32", trend: "+6 this year" },
    { title: "Copyrights Registered", value: "58", trend: "+11 this year" },
    { title: "Tech Transfers", value: "14", trend: "8 in incubation" },
    { title: "Student Innovators", value: "220+", trend: "26 active teams" },
  ];

  const initiatives = [
    {
      title: "IPR Clinics",
      description:
        "Weekly one-on-one legal advisory sessions for faculty, students, and start-up founders.",
      icon: "🩺",
    },
    {
      title: "Patent Sprint",
      description:
        "Fast-track drafting pods that condense ideation, documentation, and filing into 72 hours.",
      icon: "⚡",
    },
    {
      title: "Innovation Sandbox",
      description:
        "Hands-on learning lab with rapid prototyping, mentorship, and funding access.",
      icon: "🧪",
    },
  ];

  const services = [
    "Prior-art search & patentability analysis",
    "Drafting & filing (Patent, Copyright, Design, Trademark)",
    "IP valuation and commercialization strategy",
    "Technology transfer MoUs with industry",
    "Founder-friendly licensing frameworks",
    "Global IP awareness masterclasses",
  ];

  const milestones = [
    {
      year: "2021",
      highlight: "IPR Cell 2.0 launched with digital repository and mentorship desk.",
    },
    {
      year: "2022",
      highlight: "First international patent filing and three tech-transfer partnerships.",
    },
    {
      year: "2023",
      highlight: "Incubated 10 student-led IP startups; hosted national IP summit.",
    },
    {
      year: "2024",
      highlight: "AI-enabled IP dashboard + record number of collaborative filings.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Immersive Gallery */}
        <section className="pt-20">
          <div className="relative bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f24] via-transparent to-[#180a0f]/70 pointer-events-none" />
            <div className="flex flex-col lg:flex-row min-h-[85vh]">
              <div className="w-full lg:w-5/12 relative z-10 p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm uppercase tracking-[0.2em]">
                    IPR & Technology Transfer
                  </span>
                  <h1 className="mt-6 text-5xl lg:text-6xl font-semibold leading-tight">
                    Innovation safeguarded.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4dd0ff] via-[#e71329] to-[#ffec99]">
                      Impact amplified.
                    </span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-200">
                    We translate breakthrough research into defensible IP assets, real-world solutions,
                    and new revenue possibilities—while empowering innovators at every step.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
                    <p className="text-sm uppercase tracking-widest text-gray-300">Total IP Assets</p>
                    <p className="text-4xl font-bold mt-2">118</p>
                    <p className="text-sm text-emerald-300 mt-1">+27 this year</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#e71329]/20 border border-[#e71329]/40">
                    <p className="text-sm uppercase tracking-widest text-gray-100">Commercial Links</p>
                    <p className="text-4xl font-bold mt-2">19</p>
                    <p className="text-sm text-orange-200 mt-1">Across 7 sectors</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-7/12 relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 lg:p-8 h-full">
                  {galleryImages.map((image, index) => (
                    <div
                      key={image}
                      className={`relative rounded-3xl overflow-hidden h-52 md:h-72 lg:h-full border border-white/10 ${
                        index % 2 === 0 ? "md:col-span-1" : "md:col-span-2"
                      }`}
                      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/80">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {impactMetrics.map(({ title, value, trend }) => (
              <div
                key={title}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:-translate-y-1 transition"
              >
                <p className="text-sm uppercase tracking-widest text-gray-400">{title}</p>
                <p className="text-5xl font-semibold mt-4">{value}</p>
                <p className="text-sm text-emerald-300 mt-3">{trend}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative */}
        <section className="mt-20 bg-gradient-to-br from-[#151d3b] to-[#240b36] border border-white/10 rounded-[28px] p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-semibold">Why our IPR Cell matters</h2>
              <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                The cell integrates legal intelligence with research mentorship—ensuring every invention
                is protected, strategically positioned, and future-ready. From proof-of-concept to
                market-ready licensing, we pair innovators with legal, technical, and entrepreneurial
                expertise to create defensible IP portfolios.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Ideation", "Drafting", "Filing", "Commercialization", "Mentorship"].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full border border-white/20 text-sm tracking-wide bg-white/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {initiatives.map(({ title, description, icon }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-20">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gray-400">360° Support</p>
                <h2 className="text-4xl font-semibold mt-3">What we deliver</h2>
              </div>
              <button className="px-6 py-3 rounded-full border border-white/20 bg-gradient-to-r from-[#303094] to-[#e71329] font-semibold">
                Book a Strategy Session
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-black/30"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#e71329]/30 border border-[#e71329]/40 flex items-center justify-center text-xl">
                    ✦
                  </div>
                  <p className="text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-20">
          <h2 className="text-4xl font-semibold mb-10">Momentum Map</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 border-l border-dashed border-white/30" />
            <div className="space-y-10">
              {milestones.map(({ year, highlight }, index) => (
                <div key={year} className="relative pl-16">
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full border-4 border-[#e71329] bg-[#030712]" />
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <p className="text-sm uppercase tracking-widest text-gray-400">{year}</p>
                    <p className="text-2xl font-semibold mt-2">{highlight}</p>
                    {index === milestones.length - 1 && (
                      <p className="mt-3 text-sm text-emerald-300">Next: IP accelerator for climate tech</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

