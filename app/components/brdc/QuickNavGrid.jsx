'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { quickLinks, quickNavigationDescription } from './data';
import { IconRenderer } from './iconMap';

export default function QuickNavGrid() {
  return (
    <section className="space-y-8">
      <SectionHeading eyebrow="Navigate" title="Quick Navigation" subtitle={quickNavigationDescription} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quickLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
          >
            <Link
              href={link.href}
              className={`group flex h-full flex-col rounded-3xl border border-white/15 bg-gradient-to-br ${link.accent} p-6 text-white shadow-xl backdrop-blur-xl transition hover:scale-[1.01]`}
            >
              <div className="mb-4 inline-flex rounded-2xl border border-white/20 bg-white/20 p-3">
                <IconRenderer name={link.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">{link.title}</h3>
              <p className="mt-2 text-sm text-white/80">Visit {link.title} workspace</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm text-white/90">
                Open
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


