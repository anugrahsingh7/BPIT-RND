export default function AcademicResearchPage() {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            Academic Research
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advancing knowledge through cutting-edge research and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Research Areas</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#e71329] rounded-full mr-3"></span>
                Computer Science & Engineering
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#e71329] rounded-full mr-3"></span>
                Electronics & Communication
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#e71329] rounded-full mr-3"></span>
                Mechanical Engineering
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#e71329] rounded-full mr-3"></span>
                Applied Sciences
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Publications</h2>
            <p className="text-gray-300 mb-4">
              Our faculty and students regularly publish in top-tier journals and conferences.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Recent Publications: 150+</div>
              <div className="text-sm text-gray-400">Citations: 2000+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

