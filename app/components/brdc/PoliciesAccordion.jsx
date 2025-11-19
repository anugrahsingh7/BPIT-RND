'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { policyItems } from './data';

export default function PoliciesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Policies"
        title="Governance & Support Frameworks"
        subtitle="Transparent, responsive, and design-led policy stack for every researcher."
      />
      <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
        {policyItems.map((policy, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={policy.title}>
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-lg font-medium text-white">{policy.title}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="overflow-hidden px-6 pb-6 text-gray-300"
                  >
                    {policy.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}


