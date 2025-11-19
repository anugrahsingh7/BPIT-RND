export default function NotificationsPage() {
  const notifications = [
    {
      title: "New Research Grant Opportunity",
      date: "March 1, 2024",
      category: "Grant",
      description: "Applications are now open for the 2024 Research Excellence Grant. Deadline: March 30, 2024."
    },
    {
      title: "Patent Filing Workshop",
      date: "February 28, 2024",
      category: "Workshop",
      description: "Learn about the patent filing process and IPR management. Register by March 10, 2024."
    },
    {
      title: "Call for Research Papers",
      date: "February 25, 2024",
      category: "Publication",
      description: "Submit your research papers for the upcoming international conference. Deadline: April 15, 2024."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            Notifications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest announcements and opportunities
          </p>
        </div>

        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-l-4 border-[#e71329] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-[#e71329] rounded text-xs font-medium">
                      {notification.category}
                    </span>
                    <span className="text-xs text-gray-400">{notification.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {notification.title}
                  </h3>
                  <p className="text-gray-300">{notification.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

