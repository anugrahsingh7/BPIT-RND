'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Brdc Cell', path: '/' },
    { name: 'Academic Research', path: '/academic-research' },
    { name: 'IPR', path: '/ipr' },
    { name: 'Sponsored Research', path: '/sponsored-research' },
    { name: 'Events', path: '/events' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'R&D Structure', path: '/rd-structure' },
    { name: 'Academic Blog', path: '/academic-blog' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/BPIT-logo.jpg"
                alt="BPIT Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-semibold text-white">
                BPIT R&D
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item, index) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    active
                      ? 'text-[#e71329] bg-white/20 border-b-2 border-[#e71329]'
                      : 'text-gray-300 hover:text-[#e71329] hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side - Search and Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              className="p-2 text-gray-300 hover:text-[#e71329] transition-colors duration-200 rounded-md hover:bg-white/10"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Toggle Switch */}
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={(e) => toggleDarkMode(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#303094]/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#303094]"></div>
              </label>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-[#e71329] transition-colors duration-200 rounded-md hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                      active
                        ? 'text-[#e71329] bg-white/20 border-l-4 border-[#e71329]'
                        : 'text-gray-300 hover:text-[#e71329] hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
