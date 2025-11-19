'use client';

import { useEffect, useRef } from "react";

const certificateGallery = [
  {
    title: "AI Research Excellence",
    issuer: "Ministry of Electronics & IT",
    date: "2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Best Industry Collaboration",
    issuer: "CII Innovation Forum",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Global Patents Showcase",
    issuer: "WIPO Innovation Challenge",
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sustainable Tech Impact",
    issuer: "UN SDG Accelerator",
    date: "2025",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
];

const focusAreas = [
  {
    title: "AI for Social Good",
    description:
      "Ethical AI, responsible automation, and inclusive technologies that address real-world challenges.",
    tags: ["Human-Centered", "Explainable AI", "Policy"],
  },
  {
    title: "Smart & Sustainable Systems",
    description:
      "Efficient energy systems, smart mobility, and resilient infrastructure for future cities.",
    tags: ["IoT", "Green Tech", "Urban Tech"],
  },
  {
    title: "Advanced Communications",
    description:
      "Next-gen wireless, 6G-ready architectures, and ultra-reliable communication for industry 4.0.",
    tags: ["NB-IoT", "6G", "Photonics"],
  },
];

const highlights = [
  { label: "Annual Publications", value: "180+" },
  { label: "Active Grants", value: "32" },
  { label: "Global Collaborations", value: "26" },
  { label: "Doctoral Scholars", value: "95" },
];

const signatureInitiatives = [
  {
    name: "Interdisciplinary Research Pods",
    detail:
      "Fluid teams of faculty, doctoral, and undergraduate researchers solving grand challenges over 12-week sprints.",
  },
  {
    name: "Prototyping Studio",
    detail:
      "Rapid hardware-software experimentation lab with additive manufacturing, RF chambers, and immersive analytics walls.",
  },
  {
    name: "Impact Translation Desk",
    detail:
      "Dedicated support for patents, tech-transfer, and policy briefs ensuring scholarship informs practice.",
  },
];

const featuredPublications = [
  {
    title: "Reduced PAPR MPC-based FBMC/OQAM Signal for NB-IoT",
    authors: "Pavika Sharma · Achyut Shankar · Xiaochun Cheng",
    outlet: "International Journal of Machine Learning & Cybernetics, 2024",
    impact: "Top 5% cited wireless comm. paper",
  },
  {
    title: "Neuromorphic Sensing for Autonomous Navigation",
    authors: "Karan Bhatia · Trisha Malik · Luca Romano",
    outlet: "IEEE Transactions on Robotics, 2025",
    impact: "Featured on IEEE Spectrum",
  },
];

const timeline = [
  {
    phase: "Discover",
    items: ["Intelligence briefs", "Problem framing retreats", "Opportunity scans"],
  },
  {
    phase: "Design",
    items: ["Co-creation workshops", "Experimental design clinics", "Ethics validation"],
  },
  {
    phase: "Deploy",
    items: ["Pilot sandboxes", "Policy playbooks", "Community showcase"],
  },
];

export default function AcademicResearchPage() {
  const certificateRef = useRef(null);

  useEffect(() => {
    const container = certificateRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const slideWidth = container.clientWidth;
      const maxIndex = certificateGallery.length;
      const currentIndex = Math.round(container.scrollLeft / slideWidth);
      const nextIndex = currentIndex + 1 >= maxIndex ? 0 : currentIndex + 1;

      container.scrollTo({
        left: nextIndex * slideWidth,
        behavior: "smooth",
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060f] via-[#0c0f1e] to-[#05060f] text-white pt-20 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 space-y-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-blue-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c2de0,transparent_60%)] opacity-40" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="space-y-5 lg:w-3/5">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-widest text-blue-100">
                Research & Innovation
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white lg:text-5xl">
                Translating bold ideas into measurable societal impact.
              </h1>
              <p className="text-lg text-blue-100">
                BPIT scholars collaborate across disciplines to advance foundational science,
                engineer resilient systems, and co-create solutions with communities and industry.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                <span className="rounded-full border border-white/30 px-4 py-2">
                  12+ Centers of Excellence
                </span>
                <span className="rounded-full border border-white/30 px-4 py-2">
                  65 Sponsored Projects
                </span>
                <span className="rounded-full border border-white/30 px-4 py-2">
                  40 Patent Families
                </span>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-4 rounded-2xl bg-black/30 p-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/0 p-4"
                >
                  <p className="text-3xl font-semibold text-white">{highlight.value}</p>
                  <p className="text-sm text-blue-200">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Recognition</p>
            <h2 className="text-3xl font-semibold">Certificate Gallery</h2>
            <p className="text-blue-100">
              Celebrating major certifications, awards, and recognitions earned by our research
              ecosystem.
            </p>
          </div>
          <div className="relative">
            <div
              ref={certificateRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto py-4"
            >
              {certificateGallery.map((certificate) => (
                <div
                  key={certificate.title}
                  className="min-w-full snap-center rounded-3xl border border-white/10 bg-black/30 p-6 shadow-2xl shadow-blue-900/40"
                >
                  <div
                    className="h-[420px] w-full rounded-2xl bg-cover bg-center md:h-[520px]"
                    style={{ backgroundImage: `url(${certificate.image})` }}
                  />
                  <div className="mt-4 space-y-1">
                    <p className="text-sm text-blue-300">{certificate.issuer}</p>
                    <h3 className="text-xl font-semibold">{certificate.title}</h3>
                    <p className="text-sm text-blue-200">{certificate.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c0f1e] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0c0f1e] to-transparent" />
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Focus Arenas</h2>
              <p className="text-blue-200">
                Signature thrust areas where our labs, centers, and industry partners converge.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-blue-100 transition hover:border-white hover:text-white">
              View Research Directory
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/40"
              >
                <h3 className="text-2xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-blue-100 flex-1">{area.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-blue-200">
                  {area.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Spotlight</p>
            <h2 className="mt-3 text-3xl font-semibold">Flagship Publications</h2>
            <div className="mt-8 space-y-6">
              {featuredPublications.map((pub) => (
                <div key={pub.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-blue-300">{pub.outlet}</p>
                  <h3 className="mt-2 text-xl font-semibold">{pub.title}</h3>
                  <p className="text-sm text-blue-100">{pub.authors}</p>
                  <p className="mt-3 inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-100">
                    {pub.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-blue-900/40 to-blue-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Signature Moves</p>
            <h2 className="mt-3 text-3xl font-semibold">Research Experience</h2>
            <ul className="mt-6 space-y-5">
              {signatureInitiatives.map((initiative) => (
                <li key={initiative.name} className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-blue-300">{initiative.name}</p>
                  <p className="text-blue-100">{initiative.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Methodology</p>
              <h2 className="text-3xl font-semibold text-white">From discovery to deployment</h2>
            </div>
            <p className="max-w-xl text-blue-100">
              Each program follows our adaptive research lifecycle, blending rigor with agility to
              keep scholarship responsive to fast-evolving contexts.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {timeline.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300">{phase.phase}</p>
                <ul className="mt-4 space-y-2 text-blue-100">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

