'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { researchDomains } from './data';
import { IconRenderer } from './iconMap';

export default function ResearchDomains() {
  const [activeDomain, setActiveDomain] = useState(researchDomains[0].label);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Domains"
        title="Research Domains"
        subtitle="Future-ready clusters that define BPIT’s innovation charter."
      />
      <div className="flex flex-wrap gap-4">
        {researchDomains.map((domain) => {
          const isActive = activeDomain === domain.label;
          return (
            <motion.button
              key={domain.label}
              className={`relative flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition ${
                isActive ? 'border-white/90 bg-white/10 text-white' : 'border-white/20 text-gray-200'
              }`}
              onClick={() => setActiveDomain(domain.label)}
              whileHover={{ y: -3 }}
            >
              <IconRenderer name={domain.icon} className="h-5 w-5" />
              {domain.label}
              {isActive && (
                <motion.span
                  layoutId="domain-active"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#303094]/30 via-purple-600/20 to-[#e71329]/30 blur-xl"
                />
              )}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDomain}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-6 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg text-white">{activeDomain}</p>
          <p className="mt-3 text-sm text-gray-300">
            BPIT researchers are advancing breakthroughs in {activeDomain}, collaborating with top labs and innovation
            clusters to build deep-tech prototypes with measurable societal impact.
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}


