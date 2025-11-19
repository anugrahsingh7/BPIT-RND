'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-10 text-white shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_55%)]" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4rem] text-white/80">Get Started</p>
          <h3 className="text-3xl font-semibold">Ready to Start Your Research Journey?</h3>
          <p className="text-white/90">
            Submit your breakthrough idea or connect with the BRDC leadership team for strategic guidance today.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/rd-structure"
            className="rounded-full bg-white px-6 py-3 text-base font-semibold text-purple-700 shadow-lg shadow-white/40 transition hover:-translate-y-0.5"
          >
            Submit Idea
          </Link>
          <Link
            href="/notifications"
            className="rounded-full border border-white/70 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 hover:-translate-y-0.5"
          >
            Contact R&amp;D Cell
          </Link>
        </div>
      </div>
    </motion.section>
  );
}


