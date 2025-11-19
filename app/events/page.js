"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

const events = [
  {
    title: "Quantum Systems Hackweek",
    date: "January 18, 2024",
    type: "Hackathon",
    description:
      "42-hour build sprint focusing on superconducting qubit control loops, co-hosted with IISc Bengaluru.",
    impact: "6 deployable control stacks, 18 research notes",
    tags: ["Quantum", "Control", "Systems"],
  },
  {
    title: "Bio-inspired Robotics Demo Day",
    date: "March 05, 2024",
    type: "Demo Day",
    description:
      "Showcase of soft-robotics actuators and adaptive gait controllers built inside the BPIT Robotics Garage.",
    impact: "3 industry MoUs, 11 patent disclosures",
    tags: ["Robotics", "Bio-Mimicry", "AI"],
  },
  {
    title: "Applied AI Policy Forum",
    date: "April 23, 2024",
    type: "Forum",
    description:
      "Think-tank style forum aligning applied research with responsible AI deployment in civic systems.",
    impact: "Whitepaper for Delhi Govt, 2 pilot programs",
    tags: ["Policy", "AI Ethics", "CivicTech"],
  },
  {
    title: "Space Systems Studio Sprint",
    date: "June 12, 2024",
    type: "Studio Sprint",
    description:
      "Week-long collaboration with ISRO mentors on swarming nanosat payload testing and telemetry compression.",
    impact: "Telemetry stack v3, nanosat deployment sim",
    tags: ["Aerospace", "Swarms", "Telemetry"],
  },
];

const stats = [
  { label: "Prototypes built", value: "42", delta: "+12 vs 2023" },
  { label: "Research partners", value: "27", delta: "Global + Local" },
  { label: "Student fellows", value: "118", delta: "Active cohorts" },
  { label: "Industry hours", value: "3.4k", delta: "Mentored time" },
];

const highlights = [
  {
    title: "DeepTech Exchange",
    subtitle: "Immersive R&D residency",
    description:
      "A curated micro-residency where VC-backed founders work alongside faculty labs to validate dual-use R&D ideas.",
    meta: "Cohort 05 · 14 founders · 16 labs",
  },
  {
    title: "Zero-Carbon Lab Crawl",
    subtitle: "Campus-wide demo trail",
    description:
      "Live demos of carbon-negative concrete, microbial fuel cells, and autonomous power management for cold storage chains.",
    meta: "400+ visitors · 9 prototypes",
  },
  {
    title: "Cyber-Physical Sandpit",
    subtitle: "Scenario war-gaming",
    description:
      "Multi-day simulation lab connecting digital twins with on-ground IoT stacks for emergency response training.",
    meta: "NDRF · ISRO RESPOND · BPIT RnD",
  },
];

const timeline = [
  {
    time: "08:00",
    title: "Immersive keynotes",
    detail: "Founders + faculty pair up to introduce the challenge arcs.",
  },
  {
    time: "11:30",
    title: "Breakout studios",
    detail: "Hands-on experimentation with lab mentors and visiting scientists.",
  },
  {
    time: "15:00",
    title: "Gallery walks",
    detail: "Live prototypes, tactile demos, critique circles with jury.",
  },
  {
    time: "19:30",
    title: "Nightcode",
    detail: "Open lab access + shadow mentoring with alumni venture partners.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    alt: "Autonomous drone swarms",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Bio-inspired actuator rig",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "AI policy roundtable",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    alt: "Nightcode debug session",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Space systems telemetry deck",
  },
  {
    src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Quantum control stack demo",
  },
  {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    alt: "Soft robotics gait testing",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    alt: "XR memory palace experiment",
  },
  {
    src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80",
    alt: "Hydroponics lab showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    alt: "Civic AI pilot review",
  },
  {
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    alt: "Mixed reality sandbox",
  },
];

const focusAreas = [
  "Quantum & neuromorphic systems",
  "Climate tech & regenerative infra",
  "Sensing, autonomy & robotics",
  "Responsible AI & civic intelligence",
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#01020B] text-white pt-16">
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-b from-[#030718] via-[#050A1F] to-[#01020B]"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <HeroSection />
          <GallerySection />
          <StatsRibbon />
          <section className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <EventStack />
            <FocusCard />
          </section>
          <section className="grid gap-8 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.title} highlight={highlight} index={index} />
            ))}
          </section>
          <TimelineCard />
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(4,8,30,0.45)]">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold mb-4"
            >
              Ready to showcase your lab?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white/70 mb-6 max-w-3xl"
            >
              Partner with BPIT R&D to host residencies, policy sandpits, demo days,
              and field trials. We stitch together labs, civic partners, and venture
              catalysts so your research hits the real world faster.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#303094] to-[#e71329] font-semibold shadow-lg shadow-[#e71329]/30">
                Propose an R&D Event
              </button>
              <button className="px-6 py-3 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition">
                Download Playbook
              </button>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}

const HeroSection = () => (
  <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#303094]/20 via-transparent to-[#e71329]/20 pointer-events-none" />
      <div className="relative space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-[0.2em] uppercase">
          R&D Pulse
        </div>
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
          Events that turn lab breakthroughs into field-ready impact.
        </h1>
        <p className="text-lg text-white/70 max-w-2xl">
          Experience immersive demo floors, hackweeks, and policy sandpits that
          blend students, faculty, industry, and civic partners—all choreographed
          by BPIT Research & Innovation.
        </p>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl space-y-4"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-white/60">
        Live pipeline
      </p>
      <p className="text-3xl font-semibold">RnD events, sprints, and demo circuits.</p>
      <p className="text-white/70 text-sm">
        We obsess over tactile experiences—touchable prototypes, midnight lab crawls,
        lightning critiques, and curated policy salons.
      </p>
      <div className="grid grid-cols-2 gap-3 text-left">
        {focusAreas.map((focus) => (
          <div
            key={focus}
            className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4 text-sm leading-snug"
          >
            {focus}
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const GallerySection = () => (
  <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-white/50">RnD Visuals</p>
      <h2 className="text-3xl font-semibold">Gallery: tactile labs & live experiments</h2>
      <p className="text-white/70 text-sm max-w-2xl">
        A constantly evolving feed of BPIT R&D circuits—night-long debug sessions, immersive policy
        salons, swarming nanosats, and tactile climate tech demos captured by the media studio.
      </p>
      <div className="flex flex-wrap gap-3 text-xs">
        <span className="px-4 py-2 rounded-full border border-white/15 bg-white/5">Auto-scroll loop</span>
        <span className="px-4 py-2 rounded-full border border-white/15 bg-white/5">Touch & drag</span>
        <span className="px-4 py-2 rounded-full border border-white/15 bg-white/5">Live curated</span>
      </div>
    </motion.div>
    <SpotlightGallery images={galleryImages} />
  </section>
);

const StatsRibbon = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="grid gap-4 md:grid-cols-4 rounded-3xl border border-white/10 bg-black/30 p-6"
  >
    {stats.map((stat) => (
      <div key={stat.label} className="space-y-1">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
        <p className="text-3xl font-semibold">{stat.value}</p>
        <p className="text-xs text-white/60">{stat.delta}</p>
      </div>
    ))}
  </motion.div>
);

const EventStack = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-2xl p-6 space-y-4"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">Event stack</p>
        <h2 className="text-2xl font-semibold">What&apos;s shipping out of the labs</h2>
      </div>
      <button className="text-sm px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition">
        Download dossier
      </button>
    </div>
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.title} event={event} />
      ))}
    </div>
  </motion.div>
);

const EventCard = ({ event }) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 hover:border-white/30 transition">
    <div className="flex flex-wrap items-center gap-3 text-sm text-white/60 mb-3">
      <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.25em]">
        {event.type}
      </span>
      <span>{event.date}</span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
    <p className="text-white/70 text-sm mb-3">{event.description}</p>
    <div className="flex flex-wrap gap-2 text-xs text-white/60">
      {event.tags.map((tag) => (
        <span key={tag} className="px-3 py-1 rounded-full border border-white/10">
          {tag}
        </span>
      ))}
    </div>
    <p className="text-xs text-white/60 mt-3">{event.impact}</p>
  </div>
);

const FocusCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#151530] via-[#090917] to-[#04040A] p-6 backdrop-blur-2xl space-y-6"
  >
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">Signature format</p>
      <h2 className="text-2xl font-semibold">Immersive gallery circuits</h2>
    </div>
    <p className="text-white/70 text-sm">
      Week-long circuits combine systems design reviews, tactile galleries, field
      pilots, and policy salons so research translates faster.
    </p>
    <ul className="space-y-3 text-sm text-white/70">
      <li>⚡ 48h sprint launch with alumni venture partners</li>
      <li>🧪 Open lab crawls + tactile demos for civic allies</li>
      <li>🛰️ Field trials + telemetry review in XR command room</li>
      <li>📜 Wrap-up with policy brief + venture-ready dossier</li>
    </ul>
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/60">
      Next gallery circuit: <span className="text-white">Hyperlocal Climate Stack · July 2024</span>
    </div>
  </motion.div>
);

const HighlightCard = ({ highlight, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl space-y-4"
  >
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
      {highlight.subtitle}
    </div>
    <h3 className="text-2xl font-semibold">{highlight.title}</h3>
    <p className="text-white/70 text-sm">{highlight.description}</p>
    <p className="text-xs text-white/50">{highlight.meta}</p>
  </motion.div>
);

const TimelineCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl space-y-6"
  >
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">A day inside</p>
      <h2 className="text-2xl font-semibold">RnD event timeline</h2>
    </div>
    <div className="space-y-4">
      {timeline.map((slot) => (
        <div key={slot.time} className="flex gap-4">
          <div className="text-sm font-semibold w-16 text-white/60">{slot.time}</div>
          <div className="flex-1">
            <p className="font-semibold">{slot.title}</p>
            <p className="text-xs text-white/60">{slot.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const SpotlightGallery = ({ images }) => {
  const duplicatedRows = [images.slice(0, 6), images.slice(6)].map((row) => [
    ...row,
    ...row,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[40px] border border-white/15 bg-white/5 backdrop-blur-3xl p-6 space-y-6 shadow-[0_40px_120px_rgba(3,7,25,0.35)]"
    >
      {duplicatedRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/5"
        >
          <motion.div
            className="flex gap-6 py-6"
            animate={{
              x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 38,
              ease: "linear",
            }}
          >
            {row.map((image, index) => (
              <div
                key={`${rowIndex}-${index}`}
                className="relative shrink-0 w-[360px] h-[360px]"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 hover:opacity-100 transition">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white text-sm font-semibold tracking-wide uppercase">
                        {image.alt}
                      </p>
                      <div className="mt-2 flex items-center text-white/70 text-xs gap-3">
                        <span className="flex items-center gap-1">
                          <ChevronRightIcon className="w-3 h-3" />
                          View story
                        </span>
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        <span>Immersive labs</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

