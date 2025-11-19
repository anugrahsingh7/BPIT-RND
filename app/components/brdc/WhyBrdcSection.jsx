'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { whyBrdcHighlights } from './data';
import { IconRenderer } from './iconMap';

export default function WhyBrdcSection() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Value Proposition"
        title="Why BRDC?"
        subtitle="Integrated enablement that makes R&D journeys effortless."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {whyBrdcHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6 shadow-lg backdrop-blur-2xl transition duration-300 hover:border-white/40 hover:shadow-[0_10px_50px_rgba(67,56,202,0.35)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-white">
              <IconRenderer name={item.icon} className="h-6 w-6 text-sky-200" />
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


