'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { statsCards } from './data';
import { IconRenderer } from './iconMap';

export default function StatsSection() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Impact"
        title="BRDC by the Numbers"
        subtitle="Live counters that reflect our fast-growing innovation pipeline."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {statsCards.map((card, index) => (
          <StatCard key={card.label} card={card} delay={index * 0.05} />
        ))}
      </div>
    </section>
  );
}

const StatCard = ({ card, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ count: card.value, transition: { duration: 2, ease: 'easeOut' } });
    }
  }, [inView, controls, card.value]);

  return (
    <motion.div
      ref={ref}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#16162c] via-[#141029] to-[#100b1f] p-6 text-white shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      <IconRenderer name={card.icon} className="h-8 w-8 text-sky-200" />
      <AnimatedNumber controls={controls} suffix={card.suffix} />
      <p className="text-sm text-gray-300">{card.label}</p>
    </motion.div>
  );
};

const AnimatedNumber = ({ controls, suffix }) => {
  return (
    <motion.span
      className="my-4 block text-4xl font-semibold"
      animate={controls}
      initial={{ count: 0 }}
    >
      {({ count }) => `${Math.round(count)}${suffix || ''}`}
    </motion.span>
  );
};


