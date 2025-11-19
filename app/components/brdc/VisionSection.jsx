'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function VisionSection() {
  return (
    <section id="vision" className="space-y-8">
      <SectionHeading
        eyebrow="Vision"
        title="Building India’s Most Trusted Undergraduate R&D Launchpad"
        subtitle="A bold, inspiring north star that keeps every initiative aligned to impact."
        alignment="center"
      />
      <motion.div
        className="group relative mx-auto max-w-5xl rounded-[32px] border border-white/15 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-[1px]"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#0f172a]/80 via-[#120922]/80 to-[#16061b]/80 p-10">
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
          <motion.p
            className="relative z-10 text-2xl md:text-3xl font-light text-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            “To transform BPIT into a national hub where fearless ideas, breakthrough research, and entrepreneurial grit
            converge to engineer solutions for Bharat and the world.”
          </motion.p>
          <motion.div
            className="relative z-10 mt-8 flex items-center gap-3 text-sm text-sky-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base font-semibold">
              BRDC
            </span>
            Leadership Council · 2025+
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


