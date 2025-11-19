'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, alignment = 'left' }) {
  return (
    <motion.div
      className={`space-y-3 ${alignment === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && <p className="text-sm tracking-[0.3em] uppercase text-sky-300/80">{eyebrow}</p>}
      <div className="inline-flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        <span className="h-1.5 w-24 bg-gradient-to-r from-[#303094] via-purple-500 to-[#e71329] rounded-full mx-auto md:mx-0 shadow-[0_0_20px_rgba(78,70,255,0.6)]" />
      </div>
      {subtitle && <p className="text-base md:text-lg text-gray-300/90">{subtitle}</p>}
    </motion.div>
  );
}


