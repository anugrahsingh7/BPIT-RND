export default function IPRPage() {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            Intellectual Property Rights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protecting and managing intellectual property for innovation and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Patents</h3>
            <p className="text-gray-300 mb-4">
              Filing and managing patent applications for innovative research outcomes.
            </p>
            <div className="text-3xl font-bold text-[#e71329]">25+</div>
            <div className="text-sm text-gray-400">Active Patents</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Copyrights</h3>
            <p className="text-gray-300 mb-4">
              Protecting software, publications, and creative works.
            </p>
            <div className="text-3xl font-bold text-[#e71329]">50+</div>
            <div className="text-sm text-gray-400">Registered</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Trademarks</h3>
            <p className="text-gray-300 mb-4">
              Securing brand identity and institutional marks.
            </p>
            <div className="text-3xl font-bold text-[#e71329]">10+</div>
            <div className="text-sm text-gray-400">Registered</div>
          </div>
        </div>
      </div>
    </div>
  );
}

