'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-[#303094] to-[#e71329] rounded-lg flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-white font-bold text-2xl">BPIT</span>
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#303094] to-[#e71329] rounded-lg animate-ping opacity-20"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">BPIT R&D</h2>
          <p className="text-gray-300 text-sm">Loading...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#303094] to-[#e71329] rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}

