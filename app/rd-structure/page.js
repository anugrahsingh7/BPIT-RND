'use client';

import { useState } from 'react';
import {
  Atom,
  BadgeCheck,
  FileText,
  Lightbulb,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';

const leadershipLayers = [
  {
    title: 'Director, BRDC',
    description:
      'Provides vision, drives institutional priorities, and monitors overall impact of research programs.',
    count: '1 Leader',
    accent: 'from-[#f472b6] to-[#ec4899]',
    icon: BadgeCheck,
  },
  {
    title: 'Cell Conveners',
    description:
      'Anchor the five primary cells, supervise task forces, and orchestrate cross-campus collaboration.',
    count: '5 Conveners',
    accent: 'from-[#a78bfa] to-[#6366f1]',
    icon: Atom,
  },
  {
    title: 'Faculty Researchers',
    description:
      'Mentor projects, guide proposals, and lead thematic clusters spanning emerging research domains.',
    count: '30+ Faculty',
    accent: 'from-[#34d399] to-[#10b981]',
    icon: Lightbulb,
  },
  {
    title: 'Scholars & Innovators',
    description:
      'PhD, PG, and undergraduate innovators translating ideas into prototypes, publications, and IP.',
    count: '60+ Scholars',
    accent: 'from-[#facc15] to-[#f97316]',
    icon: FileText,
  },
];

const primaryCells = [
  {
    title: 'Internal Research Program Development Cell',
    description:
      'To promote, co-ordinate and monitor research activities within the institute by facilitating research awareness programs.',
    icon: Lightbulb,
    gradient: 'from-[#ff6f61] to-[#f43f5e]',
  },
  {
    title: 'Collaborative Networks Cell',
    description:
      'To establish and strengthen partnerships between academia, industry and research institutions through knowledge sharing, resource pooling and interdisciplinary collaboration.',
    icon: Network,
    gradient: 'from-[#fbbf24] to-[#f97316]',
  },
  {
    title: 'Research Grants & Funding Cell',
    description:
      'To assist students and faculty in identifying, securing, and managing funding opportunities by facilitating grant applications, proposal writing guidance and compliance with funding agencies.',
    icon: FileText,
    gradient: 'from-[#34d399] to-[#059669]',
  },
  {
    title: 'Industry-Driven Research Cell',
    description:
      'To foster collaboration between academia and industry by initiating focussed research projects, promoting technology transfer, and supporting market-ready innovations.',
    icon: ShieldCheck,
    gradient: 'from-[#38bdf8] to-[#2563eb]',
  },
  {
    title: 'BPIT IPR Cell',
    description:
      'To promote innovation, protect intellectual property and create awareness about IPR by facilitating patent filing, technology transfer and commercialization within IP laws.',
    icon: Users,
    gradient: 'from-[#c084fc] to-[#7c3aed]',
  },
];

const membersData = [
  {
    title: 'Executive Council',
    members: [
      {
        name: 'Dr. Avantika Rao',
        role: 'Director, BRDC',
        photo:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Prof. Kunal Baweja',
        role: 'Chief Strategy Officer',
        photo:
          'https://images.unsplash.com/photo-1546456073-92b9f0a8d1d6?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Ms. Reva Bedi',
        role: 'Manager, Partnerships',
        photo:
          'https://images.unsplash.com/photo-1544723795-432537f5a281?auto=format&fit=facearea&w=220&h=220&q=80',
      },
    ],
  },
  {
    title: 'Cell Conveners',
    members: [
      {
        name: 'Dr. Piyush Bhatt',
        role: 'IRP Development Cell',
        photo:
          'https://images.unsplash.com/photo-1546456073-92b9f0a8d1d7?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Dr. Aditi Sagar',
        role: 'Collaborative Networks Cell',
        photo:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Dr. Manish Arora',
        role: 'Grants & Funding Cell',
        photo:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Dr. Neha Chopra',
        role: 'Industry-Driven Cell',
        photo:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Dr. Rohan Nair',
        role: 'BPIT IPR Cell',
        photo:
          'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=facearea&w=220&h=220&q=80',
      },
    ],
  },
  {
    title: 'Faculty Coordinators',
    members: [
      {
        name: 'Prof. Ishani Dutta',
        role: 'Mechanical & Smart Manufacturing',
        photo:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Prof. Samrat Tewari',
        role: 'AI, ML & Data Sciences',
        photo:
          'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Prof. Vanshita Malhotra',
        role: 'Electronics & 5G Labs',
        photo:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e2?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Prof. Hitesh Sharma',
        role: 'Sustainable Engineering',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=220&h=220&q=80',
      },
    ],
  },
  {
    title: 'Innovation Fellows',
    members: [
      {
        name: 'Shruti Jain',
        role: 'Lead Innovator, Healthcare',
        photo:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e2?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Parth Kohli',
        role: 'Lead Innovator, Robotics',
        photo:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Mehul Bansal',
        role: 'Lead Innovator, FinTech',
        photo:
          'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=facearea&w=220&h=220&q=80',
      },
      {
        name: 'Selena Roy',
        role: 'Lead Innovator, Climate Tech',
        photo:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=220&h=220&q=80',
      },
    ],
  },
];

export default function RDStructurePage() {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070f] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#030712] to-[#05070f]" />
      <div className="absolute -top-32 left-0 w-72 h-72 bg-[#e71329]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 -right-16 w-96 h-96 bg-[#303094]/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-24">
        <section className="text-center space-y-6 mb-16">
          <p className="text-sm tracking-[0.4em] uppercase text-[#8b9eff]">BRDC</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-[#c4b5fd] via-white to-[#fda4af] bg-clip-text text-transparent">
            Primary Cells & Structure of the BPIT Research & Development Centre
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A human-centric, outcome-driven structure that empowers research programs, industry collaborations, grants, and intellectual property for the BPIT innovation ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowMembers(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-[#303094] via-[#543fd7] to-[#e71329] shadow-[0_10px_40px_rgba(79,70,229,0.35)] transition hover:shadow-[0_15px_50px_rgba(231,19,41,0.35)]"
            >
              <Users className="w-4 h-4 transition-transform group-hover:scale-110" />
              View BRDC Members
            </button>
            <a
              href="#primary-cells"
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition"
            >
              Explore Cells
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {leadershipLayers.map(({ title, description, count, accent, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30"
            >
              <div className={`absolute inset-x-4 top-0 h-1 rounded-b-full bg-gradient-to-r ${accent}`} />
              <div className="flex items-center gap-4 mb-4">
                <span className="p-3 rounded-2xl bg-white/10 border border-white/10">
                  <Icon className="w-6 h-6 text-white" />
                </span>
                <div>
                  <p className="text-sm text-gray-400">{count}</p>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section id="primary-cells" className="mt-20 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#fcd34d] to-[#f97316] flex items-center justify-center text-black font-semibold">
              BR
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
                Primary Cells of BRDC
              </p>
              <h2 className="text-2xl font-semibold text-white">Five strategic pillars with dedicated outcomes</h2>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
            <div className="space-y-6">
              {primaryCells.map(({ title, description, icon: Icon, gradient }, index) => (
                <div
                  key={title}
                  className="group relative flex flex-col md:flex-row gap-6 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition duration-300 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105`} />
                      <Icon className="w-6 h-6 absolute inset-0 m-auto text-white" />
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="md:flex-1 text-gray-300 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { label: 'Collaborative MoUs', value: '35+' },
            { label: 'Funded Projects Supported', value: '48' },
            { label: 'Active Patent Filings', value: '22' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 text-center hover:shadow-[0_20px_60px_rgba(23,37,84,0.35)] transition"
            >
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </section>
      </div>

      {showMembers && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0f172a] border border-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400">BRDC Members</p>
                <h3 className="text-2xl font-semibold text-white mt-1">People behind the breakthroughs</h3>
              </div>
              <button
                onClick={() => setShowMembers(false)}
                className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition"
              >
                Close
              </button>
            </div>

            <div className="space-y-10">
              {membersData.map((bucket) => (
                <div key={bucket.title}>
                  <h4 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">{bucket.title}</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {bucket.members.map((member) => (
                      <div
                        key={member.name}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-white/30 transition"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={member.photo}
                              alt={member.name}
                              loading="lazy"
                              className="w-14 h-14 rounded-2xl object-cover border border-white/10 shadow-lg"
                            />
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wide text-gray-400">
                              BRDC
                            </span>
                          </div>
                          <div>
                            <p className="text-lg font-semibold">{member.name}</p>
                            <p className="text-sm text-gray-400">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}