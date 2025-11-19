export default function RDStructurePage() {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            R&D Structure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Organizational structure and hierarchy of the Research & Development division
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Director R&D</h3>
            <p className="text-gray-300 mb-4">
              Overall leadership and strategic direction for research initiatives.
            </p>
            <div className="text-sm text-gray-400">Dr. [Name]</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Research Coordinators</h3>
            <p className="text-gray-300 mb-4">
              Department-level coordination and project management.
            </p>
            <div className="text-sm text-gray-400">5 Coordinators</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Research Scholars</h3>
            <p className="text-gray-300 mb-4">
              PhD and Master's students conducting research.
            </p>
            <div className="text-sm text-gray-400">50+ Scholars</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Faculty Researchers</h3>
            <p className="text-gray-300 mb-4">
              Full-time faculty members engaged in research activities.
            </p>
            <div className="text-sm text-gray-400">30+ Faculty</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Staff</h3>
            <p className="text-gray-300 mb-4">
              Supporting technical and administrative personnel.
            </p>
            <div className="text-sm text-gray-400">10+ Staff</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Advisory Board</h3>
            <p className="text-gray-300 mb-4">
              External experts providing guidance and oversight.
            </p>
            <div className="text-sm text-gray-400">8 Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}

