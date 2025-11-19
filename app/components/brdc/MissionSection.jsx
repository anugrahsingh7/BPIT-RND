'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { missionPoints } from './data';
import { IconRenderer } from './iconMap';

export default function MissionSection() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Mission"
        title="Mission Pillars"
        subtitle="Four bold levers powering futuristic research experiences."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {missionPoints.map((mission, index) => (
          <motion.div
            key={mission.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_35px_120px_rgba(2,6,23,0.45)] backdrop-blur-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ rotateX: 6, rotateY: -6, y: -6 }}
          >
            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-gradient-to-br from-[#303094]/50 to-[#e71329]/40 p-3">
              <IconRenderer name={mission.icon} className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{mission.title}</h3>
            <p className="mt-3 text-sm text-gray-300">{mission.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


