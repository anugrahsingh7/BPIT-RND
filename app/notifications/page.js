'use client';

import { useMemo, useState } from "react";
import { Bell, Calendar, DownloadCloud, Filter, Pin, Search, Star, Zap } from "lucide-react";

const notifications = [
  {
    title: "New Research Grant Opportunity",
    subtitle: "Seed Funding • ₹10L",
    date: "March 1, 2024",
    deadline: "March 30, 2024",
    category: "Grant",
    priority: "High",
    description:
      "Applications are now open for the 2024 Research Excellence Grant. Secure funding for cross-disciplinary prototypes and innovation pilots.",
    tags: ["Funding", "Innovation", "Prototype"],
    attachment: "Grant_Brief.pdf"
  },
  {
    title: "Patent Filing Workshop",
    subtitle: "Hands-on with IPR experts",
    date: "February 28, 2024",
    deadline: "Enroll by March 10",
    category: "Workshop",
    priority: "Medium",
    description:
      "Learn about the patent filing process, IPR management, and get one-on-one consultation for your inventions.",
    tags: ["IPR", "Training"],
    attachment: "Workshop_Agenda.pdf"
  },
  {
    title: "Call for Research Papers",
    subtitle: "International Conference 2024",
    date: "February 25, 2024",
    deadline: "April 15, 2024",
    category: "Publication",
    priority: "High",
    description:
      "Submit your research papers for the upcoming international conference focusing on AI, Clean Energy, and Biomedical Engineering.",
    tags: ["Conference", "AI", "CleanTech"],
    attachment: "Submission_Guide.docx"
  },
  {
    title: "Innovation Sprint Demo Day",
    subtitle: "Cohort-3 • Showcase",
    date: "March 12, 2024",
    deadline: "Demo slots closing Mar 8",
    category: "Event",
    priority: "Low",
    description:
      "Present your sprint outcomes to our industry jury panel. Top three teams will fast-track into the incubation program.",
    tags: ["Event", "Incubation"],
    attachment: "Sprint_Day_Schedule.pdf"
  }
];

const pinnedHighlight = {
  title: "FY 24-25 Flagship Opportunities",
  points: [
    "Grand Challenge 2.0: Smart Mobility & Circular Materials",
    "Impact Seed Fund: ₹50L earmarked for student startups",
    "Global Residency with TU Munich & NTU Singapore"
  ],
  link: "#",
  cta: "Download opportunity deck"
};

const quickActions = [
  { label: "All", value: "All" },
  { label: "Grants", value: "Grant" },
  { label: "Workshops", value: "Workshop" },
  { label: "Publications", value: "Publication" },
  { label: "Events", value: "Event" }
];

const timeline = [
  {
    title: "Mentor Connect Marathon",
    time: "Mar 05, 4:00 PM",
    type: "Mentorship",
    detail: "Book 20-min sprint reviews with visiting mentors."
  },
  {
    title: "IP Due-Diligence Desk",
    time: "Mar 07, 2:00 PM",
    type: "IPR",
    detail: "Share disclosures for quick prior-art scans."
  },
  {
    title: "Hardware Validation Slot",
    time: "Mar 11, 11:00 AM",
    type: "Lab Access",
    detail: "Reserve FabLab benches & testing equipment."
  }
];

const stats = [
  { label: "Active notices", value: 18, trend: "+3 this week", icon: Bell },
  { label: "Deadlines this week", value: 5, trend: "2 urgent", icon: Calendar },
  { label: "Attachments", value: 12, trend: "New decks added", icon: DownloadCloud },
  { label: "Opportunities won", value: 7, trend: "Team updates", icon: Star }
];

export default function NotificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesCategory = activeCategory === "All" || notification.category === activeCategory;
      const matchesSearch =
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#1a1a1a,_#050505)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f0f30] via-black to-black p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(48,48,148,0.35),_transparent)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.15em] text-gray-300">
                <Zap size={14} className="text-[#e71329]" />
                Live notice hub
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                One window for every{" "}
                <span className="bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
                  opportunity
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-gray-300">
                Track grants, publications, flagship events, and lab operations in real time. Pin what
                matters, share attachments, and never miss a deadline again.
              </p>
            </div>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-auto">
              {stats.map(({ label, value, trend, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-[#303094]/20"
                >
                  <div className="flex items-center gap-3 text-gray-300">
                    <Icon size={18} className="text-[#e71329]" />
                    <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
                  <p className="text-xs text-emerald-300/80">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.value}
                  onClick={() => setActiveCategory(action.value)}
                  className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === action.value
                      ? "border-[#e71329]/70 bg-[#e71329]/10 text-white shadow-[0_0_20px_rgba(231,19,41,0.35)]"
                      : "border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <Filter size={14} className="text-[#e71329]" />
                  {action.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-gray-300">
              <Search size={16} className="text-[#e71329]" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search notices, tags, attachments..."
                className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#201028]/70 via-[#0c0c2a]/80 to-[#050505]/90 p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#e71329]/10 p-3">
                  <Pin className="text-[#e71329]" size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Pinned highlight</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{pinnedHighlight.title}</h2>
                  <ul className="mt-4 space-y-3 text-gray-300">
                    {pinnedHighlight.points.map((point, index) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#e71329]" />
                        <p>{point}</p>
                        {index === 0 && (
                          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[#e71329]">
                            New
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40">
                    <DownloadCloud size={16} />
                    {pinnedHighlight.cta}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <article
                  key={notification.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition duration-300 hover:border-[#e71329]/60"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="order-2 flex-1 space-y-4 md:order-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                          {notification.category}
                        </span>
                        <span className="text-xs text-gray-400">{notification.date}</span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs ${
                            notification.priority === "High"
                              ? "bg-[#e71329]/20 text-[#ff657a]"
                              : notification.priority === "Medium"
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-emerald-500/10 text-emerald-300"
                          }`}
                        >
                          {notification.priority} priority
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{notification.title}</h3>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{notification.subtitle}</p>
                        <p className="mt-3 text-gray-300">{notification.description}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {notification.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="order-1 flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-gray-300 md:order-2 md:max-w-[220px]">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Deadline</p>
                        <p className="text-white">{notification.deadline}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Attachment</p>
                        <button className="mt-1 inline-flex items-center gap-2 text-[#e71329] transition hover:underline">
                          <DownloadCloud size={14} />
                          {notification.attachment}
                        </button>
                      </div>
                      <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#e71329] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#f12d40]">
                        View brief
                        <Zap size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {filteredNotifications.length === 0 && (
                <div className="rounded-3xl border border-dashed border-white/20 bg-black/40 p-10 text-center text-gray-400">
                  <p>No notices match your filters. Try a different keyword or reset the category.</p>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#e71329]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Next-up</p>
                  <h3 className="text-lg font-semibold text-white">This week&apos;s timeline</h3>
                </div>
              </div>
              <div className="mt-6 space-y-5">
                {timeline.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{item.type}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-[#e71329]">{item.time}</p>
                    <p className="mt-2 text-sm text-gray-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#303094]/40 via-[#120b23] to-black p-6 text-white">
              <h3 className="text-xl font-semibold">Need a reminder?</h3>
              <p className="mt-2 text-sm text-gray-300">
                Subscribe to daily digests or export the calendar feed to your device.
              </p>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm transition hover:bg-white/20">
                  Enable mail digest
                </button>
                <button className="w-full rounded-full border border-white/10 bg-[#e71329] px-4 py-3 text-sm font-semibold transition hover:bg-[#ff2f43]">
                  Sync to calendar
                </button>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-300">
                <span className="text-[#e71329]">Pro tip</span>: Add this feed to MS Teams or Slack.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}