'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { heroAnimationData, heroFloatingIcons } from './data';
import { IconRenderer } from './iconMap';

export default function HeroSection() {
  const heroRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
      );
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 },
      );
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.8 },
        );
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#080814] via-[#0b1224] to-[#120616] px-6 py-20 shadow-2xl"
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(76,110,245,0.25),_transparent_55%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)] opacity-40" />
      </div>

      <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.6rem] text-sky-300/80">BRDC CELL</p>
            <h1 className="hero-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              BPIT R&amp;D &amp; BRDC Cell
            </h1>
            <p className="hero-subtitle mt-6 text-lg md:text-xl text-gray-300/90">
              Driving Innovation, Research, Technology &amp; Growth with a future-forward ecosystem, high-impact
              mentorship, and deep-tech acceleration.
            </p>
          </div>
          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <Link
              href="/academic-research"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#303094] via-purple-600 to-[#e71329] px-6 py-3 text-base font-medium text-white shadow-lg shadow-[#303094]/40 transition hover:translate-y-0.5"
            >
              Explore Research
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </Link>
            <Link
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10"
            >
              Our Vision
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: 'Innovation Pods', value: '08' },
              { label: 'Industry Alliances', value: '20+' },
              { label: 'Research Fellows', value: '150+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <Lottie animationData={heroAnimationData} loop autoplay className="h-[360px] w-full" />
          </motion.div>
          {heroFloatingIcons.map((icon, idx) => (
            <motion.div
              key={icon}
              className="absolute rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl"
              style={{
                top: `${20 + idx * 12}%`,
                right: idx % 2 === 0 ? '-40px' : 'auto',
                left: idx % 2 !== 0 ? '-40px' : 'auto',
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 + idx, ease: 'easeInOut' }}
            >
              <IconRenderer name={icon} className="h-6 w-6 text-sky-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


