'use client';

import Link from 'next/link';
import { IconRenderer } from './iconMap';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'briefcase' },
  { label: 'X / Twitter', href: 'https://twitter.com', icon: 'sparkles' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'radio' },
];

const usefulLinks = [
  { label: 'Academic Research', href: '/academic-research' },
  { label: 'Sponsored Research', href: '/sponsored-research' },
  { label: 'IPR Cell', href: '/ipr' },
  { label: 'Events', href: '/events' },
];

export default function BrdcFooter() {
  return (
    <footer className="rounded-3xl border border-white/10 bg-white/5 p-10 text-gray-300">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h4 className="text-xl font-semibold text-white">BPIT R&amp;D &amp; BRDC Cell</h4>
          <p className="mt-3 text-sm">
            Bhartiya Vidyapeeth’s College of Engineering, PSP Area, Sector-17, Rohini, Delhi-110085
          </p>
          <p className="mt-2 text-sm">Email: rndcell@bpitindia.edu.in · Phone: +91-11-2757-xxxx</p>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-[0.3rem] text-white/70">Useful Links</h5>
          <ul className="mt-4 space-y-2 text-sm">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-[0.3rem] text-white/70">Connect</h5>
          <div className="mt-4 flex gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:-translate-y-1 hover:text-white"
              >
                <IconRenderer name={social.icon} className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-xs text-gray-400">
        © {new Date().getFullYear()} BPIT R&amp;D Cell · Designed for next-gen innovators.
      </div>
    </footer>
  );
}


