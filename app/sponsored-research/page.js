export default function SponsoredResearchPage() {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            Sponsored Research
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborative research projects funded by government and industry partners
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-white mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-300">Sponsored by: Tech Corp</p>
                <p className="text-sm text-gray-400 mt-1">Duration: 2024-2026</p>
              </div>
              <div className="border-l-4 border-[#e71329] pl-4">
                <h3 className="font-semibold text-white mb-2">Renewable Energy</h3>
                <p className="text-sm text-gray-300">Sponsored by: Energy Solutions Ltd</p>
                <p className="text-sm text-gray-400 mt-1">Duration: 2024-2027</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Funding Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#e71329]">₹50M+</div>
                <div className="text-sm text-gray-400">Total Funding</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#e71329]">15+</div>
                <div className="text-sm text-gray-400">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#e71329]">25+</div>
                <div className="text-sm text-gray-400">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

