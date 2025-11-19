export default function EventsPage() {
  const events = [
    {
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      type: "Conference",
      description: "Annual technology conference featuring industry leaders and researchers."
    },
    {
      title: "Research Symposium",
      date: "April 20, 2024",
      type: "Symposium",
      description: "Showcasing cutting-edge research from faculty and students."
    },
    {
      title: "Industry-Academia Meet",
      date: "May 10, 2024",
      type: "Workshop",
      description: "Bridging the gap between academic research and industry needs."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upcoming and past events, conferences, and workshops
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-[#e71329] rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

