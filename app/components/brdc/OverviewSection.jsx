'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { overviewText } from './data';

export default function OverviewSection() {
  return (
    <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-2">
      <div className="space-y-6">
        <SectionHeading eyebrow="About" title="Overview" subtitle="Research that feels futuristic and grounded." />
        <p className="text-lg leading-relaxed text-gray-200">{overviewText}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Centers of Excellence', value: '05' },
            { label: 'Live Projects', value: '32' },
            { label: 'Mentor Pool', value: '45+' },
            { label: 'Industry MoUs', value: '18' },
          ].map((metric) => (
            <motion.div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="text-sm text-gray-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1f3a] via-[#231832] to-[#1a0f21] p-6"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.3),transparent)]" />
        <Image
          src="/globe.svg"
          alt="BRDC Innovation Illustration"
          width={400}
          height={400}
          className="relative z-10 mx-auto h-72 w-72 object-contain"
        />
        <div className="relative z-10 mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200">
          “We build immersive research journeys with clarity, resources, and momentum. Every BRDC fellow is guided to
          think bold, prototype fast, and impact lives.”
        </div>
      </motion.div>
    </section>
  );
}


