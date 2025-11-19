"use client";

import { useMemo, useState } from "react";

const agencyColors = {
  AICTE: "from-[#3737fb] to-[#7b7bff]",
  DST: "from-[#f97316] to-[#fb7185]",
  DRDO: "from-[#23b9ff] to-[#0ea5e9]",
};

const projects = [
  {
    title: "Explainable AI for Smart Campuses",
    fundingAgency: "AICTE",
    principalInvestigator: "Dr. Rhea Dutta",
    duration: "Apr 2024 – Mar 2027",
    amount: "₹1.2 Cr",
    summary:
      "Building interpretable AI services that optimize energy usage, safety, and facility planning while ensuring transparent decisions stakeholders can trace confidently.",
    abstract:
      "The project explores hybrid explainable AI (XAI) architectures for smart campuses. It combines graph neural networks and rule-based reasoning to deliver actionable insights for administrators and facility managers.",
    objectives: [
      "Design interpretable AI layers for campus-scale IoT data",
      "Create dashboards translating model decisions into natural language stories",
      "Establish governance framework for ethical deployments",
    ],
    methodology:
      "Federated learning pipelines fuse sensor, Wi-Fi, and scheduling streams. Shapley-based attribution is layered over graph models to surface cause-effect links for key events.",
    outcomes: [
      "Campus twin with explainable alerts",
      "Energy optimization playbooks for six buildings",
      "Policy toolkit for transparent AI audits",
    ],
    publications: [
      { title: "Transparent Campus AI", url: "https://example.com/xai" },
      { title: "Graph Reasoning for Facilities", url: "https://example.com/graph" },
    ],
    equipment: "Edge GPU pods, thermal imaging sensors, multi-protocol IoT gateways",
    collaborators: "IISc Bangalore, EnVision Analytics",
  },
  {
    title: "Indigenous Drivetrain for Micro UAVs",
    fundingAgency: "DRDO",
    principalInvestigator: "Prof. Vikram Menon",
    duration: "Jan 2023 – Dec 2025",
    amount: "₹2.4 Cr",
    summary:
      "Developing lightweight propulsion units and noise-optimized blades that allow micro UAVs to operate safely in urban search-and-rescue deployments with longer endurance windows.",
    abstract:
      "The study advances indigenous micro propulsion architectures using high-temperature composites. It targets improved thrust-to-weight ratios and acoustic stealth for tactical UAV fleets.",
    objectives: [
      "Engineer magnet-free motors leveraging printed windings",
      "Optimize blade geometry for stealth flight envelopes",
      "Prototype modular drivetrains with rapid field servicing",
    ],
    methodology:
      "Multi-physics simulations are paired with wind tunnel trials. Additive manufacturing enables rapid iteration on impeller and shroud designs validated through field sorties.",
    outcomes: [
      "30% higher thrust density demonstrator",
      "Flight endurance gain of 18 minutes",
      "Comprehensive UAV acoustic signature atlas",
    ],
    publications: [
      { title: "Quiet Propulsion Strategies", url: "https://example.com/propulsion" },
    ],
    equipment: "5-axis composite milling center, acoustic chamber, telemetry rigs",
    collaborators: "ADE Bengaluru, AeroSwift Labs",
  },
  {
    title: "Resilient Microgrids for Himalayan Villages",
    fundingAgency: "DST",
    principalInvestigator: "Dr. Imani Chopra",
    duration: "Jul 2022 – Jun 2026",
    amount: "₹1.8 Cr",
    summary:
      "Piloting adaptive hybrid microgrids combining hydrokinetic turbines, solar rooftops, and second-life batteries to guarantee uninterrupted power for fragile high-altitude habitations.",
    abstract:
      "The work develops modular microgrid controllers that anticipate landslide, snow, and load anomalies. AI-augmented forecasting and community participation anchor the deployment strategy.",
    objectives: [
      "Build predictive maintenance pipelines for remote assets",
      "Design human-in-the-loop dispatch consoles",
      "Document socio-technical adoption patterns",
    ],
    methodology:
      "Field sensors stream to digital twins hosted on low-earth-orbit satellite links. Scenario engines evaluate climate and load shocks to recommend resilient configurations.",
    outcomes: [
      "12 pilot villages with 99.1% uptime",
      "Community energy entrepreneurship model",
      "Toolkit for rapid disaster power restoration",
    ],
    publications: [
      { title: "Hybrid Microgrid Governance", url: "https://example.com/microgrid" },
      { title: "Community Energy Twins", url: "https://example.com/twin" },
    ],
    equipment: "Hydrokinetic turbines, Li-ion repurposing lab, satellite gateways",
    collaborators: "MNIT Jaipur, Himalaya Power Trust",
  },
  {
    title: "NeuroAdaptive Rehab Robotics",
    fundingAgency: "AICTE",
    principalInvestigator: "Prof. Aarav Kumar",
    duration: "Aug 2024 – Jul 2028",
    amount: "₹2.1 Cr",
    summary:
      "Creating wearable neuro interfaces and soft robotics that personalize post-stroke therapy sessions, yielding faster recovery and reducing dependence on specialist availability.",
    abstract:
      "The project combines EEG decoding, haptic biofeedback, and pneumatic actuators to craft adaptive rehab protocols. Cloud analytics tune therapy intensity using patient response loops.",
    objectives: [
      "Design lightweight soft robotic sleeves",
      "Integrate neuro signals with reinforcement learning",
      "Establish tele-rehab command center",
    ],
    methodology:
      "Rapid prototyping of textile actuators pairs with high-density EEG capture. Reinforcement learners adjust assistance levels within clinician-approved safety envelopes.",
    outcomes: [
      "21% faster motor recovery metrics",
      "Tele-rehab portal for district hospitals",
      "Open datasets on multimodal rehab signals",
    ],
    publications: [
      { title: "Adaptive Haptics for Rehab", url: "https://example.com/haptics" },
    ],
    equipment: "Soft robotic fabrication lab, EEG cap arrays, cloud ML cluster",
    collaborators: "AIIMS Rishikesh, NeuroMotion Pvt Ltd",
  },
  {
    title: "Smart Agriculture Command Stack",
    fundingAgency: "DST",
    principalInvestigator: "Dr. Meera Pillai",
    duration: "Sep 2023 – Aug 2026",
    amount: "₹1.5 Cr",
    summary:
      "Deploying hyperlocal weather fusion, soil imaging, and autonomous irrigation so marginal farmers receive precise advisories that raise yields and conserve groundwater sustainably.",
    abstract:
      "The initiative unifies satellite indices with in-situ sensors to orchestrate irrigation, nutrient delivery, and pest management. It emphasizes affordable handheld interfaces for farmers.",
    objectives: [
      "Develop multilingual AR agronomy assistant",
      "Automate irrigation via low-power mesh networks",
      "Model carbon sequestration benefits",
    ],
    methodology:
      "Edge devices compress multispectral imagery, while reinforcement agents trigger irrigation valves. Farmer co-creation workshops refine advisory UX flows.",
    outcomes: [
      "Average yield increase of 19%",
      "40% reduction in irrigation frequency",
      "Carbon-positive cropping templates",
    ],
    publications: [
      { title: "Edge-first Farm Intelligence", url: "https://example.com/agri" },
    ],
    equipment: "Soil spectrometers, LoRa gateways, AR headset lab",
    collaborators: "IIT Indore, AgriVerse Collective",
  },
  {
    title: "Maritime Domain Awareness Fabric",
    fundingAgency: "DRDO",
    principalInvestigator: "Dr. Kabir Nayar",
    duration: "Nov 2022 – Oct 2025",
    amount: "₹2.8 Cr",
    summary:
      "Integrating satellite AIS, coastal radar, and autonomous surface drones to deliver continuous maritime domain awareness with predictive anomaly alerts for coastal commands.",
    abstract:
      "The project builds a data mesh spanning satellite, sonar, and drone telemetry. It applies spatio-temporal transformers to flag suspicious trajectories in real time.",
    objectives: [
      "Unify multi-sensor maritime feeds in a zero-trust mesh",
      "Design edge analytics for autonomous patrol craft",
      "Deliver predictive dashboards for naval HQ",
    ],
    methodology:
      "Dockerized microservices ingest encrypted feeds into a time-series lakehouse. Transformer pipelines score vessel intent and surface alerts via immersive command displays.",
    outcomes: [
      "Live fused maritime map with 4-second latency",
      "Autonomous drone patrol autopilot",
      "Doctrinal playbooks for anomaly response",
    ],
    publications: [
      { title: "Spatio-temporal Maritime AI", url: "https://example.com/maritime" },
      { title: "Autonomous Coastal Patrols", url: "https://example.com/patrol" },
    ],
    equipment: "Maritime radar emulator, autonomous surface drones, satellite links",
    collaborators: "NIOT Chennai, OceaX Systems",
  },
];

export default function SponsoredResearchPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const highlightStats = useMemo(
    () => [
      {
        label: "Total Sanctioned",
        value: "₹11.8 Cr",
        caption: "Across active grants",
      },
      {
        label: "Principal Investigators",
        value: "28",
        caption: "Faculty across 9 departments",
      },
      {
        label: "Average Success Rate",
        value: "63%",
        caption: "Last three calls",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0b0b1c] to-black text-white pb-24">
      <div className="relative isolate">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute -top-32 left-16 w-72 h-72 bg-[#303094] rounded-full mix-blend-screen" />
          <div className="absolute top-12 right-32 w-96 h-96 bg-[#e71329] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#00d4ff] rounded-full mix-blend-screen" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24">
          <header className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-[0.35em] text-white/80">
              Sponsored Research
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e4e4ff] to-[#e71329]">
              Transformative Grants Powering Breakthroughs
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Explore government and defense-sponsored programs unlocking resilient infrastructure, Indigenous technologies, assistive health, and climate-ready communities through fearless faculty leadership.
            </p>
          </header>

          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/40"
              >
                <div className="text-sm uppercase tracking-widest text-white/60">{stat.label}</div>
                <div className="mt-3 text-3xl font-bold text-white">{stat.value}</div>
                <p className="mt-2 text-sm text-white/50">{stat.caption}</p>
              </div>
            ))}
          </section>

          <section className="mt-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Active Projects</p>
                <h2 className="text-3xl font-semibold mt-2">Grants in Focus</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:border-white">
                Download Portfolio
              </button>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold uppercase tracking-wider ${agencyColors[project.fundingAgency]}`}
                    >
                      {project.fundingAgency}
                    </span>
                    <span className="text-sm text-white/60">{project.duration}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/70">PI: {project.principalInvestigator}</p>
                  <p className="mt-4 text-sm text-white/60 leading-relaxed">{project.summary}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.3em] text-white/50">Sanctioned</span>
                      <div className="text-xl font-semibold">{project.amount}</div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                    >
                      View Details
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="stroke-current">
                        <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-[#0c0c17] to-[#141428] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close details"
              className="absolute right-4 top-4 rounded-full border border-white/30 p-2 text-white/60 hover:text-white hover:border-white"
              onClick={() => setSelectedProject(null)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" className="stroke-current">
                <path d="m6 6 12 12M6 18 18 6" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex flex-col gap-6">
              <div>
                <span
                  className={`inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold uppercase tracking-wider ${agencyColors[selectedProject.fundingAgency]}`}
                >
                  {selectedProject.fundingAgency}
                </span>
                <h3 className="mt-4 text-3xl font-bold">{selectedProject.title}</h3>
                <p className="text-white/70 mt-2">
                  PI: {selectedProject.principalInvestigator} · {selectedProject.duration} · Sanctioned {selectedProject.amount}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Abstract</h4>
                  <p className="mt-3 text-white/80 leading-relaxed">{selectedProject.abstract}</p>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Methodology</h4>
                  <p className="mt-3 text-white/80 leading-relaxed">{selectedProject.methodology}</p>
                </section>
              </div>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Objectives</h4>
                <ul className="mt-4 space-y-2 text-white/80">
                  {selectedProject.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#e71329]" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Outcomes</h4>
                <ul className="mt-4 space-y-2 text-white/80">
                  {selectedProject.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="grid gap-5 md:grid-cols-2">
                <section className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
                  <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Equipment Procured</h4>
                  <p className="text-white/80">{selectedProject.equipment}</p>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
                  <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Collaborating Institutions</h4>
                  <p className="text-white/80">{selectedProject.collaborators}</p>
                </section>
              </div>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
                <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">Publication Links</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.publications.map((pub) => (
                    <a
                      key={pub.title}
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white hover:text-white"
                    >
                      {pub.title}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="stroke-current"
                      >
                        <path d="M7 17 17 7M9 7h8v8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

