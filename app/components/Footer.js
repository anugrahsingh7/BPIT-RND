'use client';

import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-transparent backdrop-blur-sm border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* All Sections in Horizontal Line */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          

          {/* Connect with Us Section */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Connect with Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#303094]/50 focus:border-[#303094]/50 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-300 mb-1"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#303094]/50 focus:border-[#303094]/50 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-sm bg-gradient-to-r from-[#303094] to-[#e71329] text-white font-medium rounded-lg hover:from-[#252575] hover:to-[#c91124] focus:outline-none focus:ring-2 focus:ring-[#303094]/50 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              College Location
            </h3>
            <div className="rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1234567890123!2d77.112334!3d28.7366482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013045aab491%3A0xb6a504893549c54f!2sBhagwan%20Parshuram%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="BPIT College Location"
              ></iframe>
            </div>
          </div>
          {/* Contact Information Section */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="w-4 h-4 text-[#e71329] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-300 mb-1">
                      Address
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Bhagwan Parshuram Institute of Technology, Sector 17, Rohini, New Delhi - 110089
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="w-4 h-4 text-[#e71329] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-300 mb-1">
                      Phone
                    </p>
                    <div className="space-y-0.5">
                      <a
                        href="tel:+911123456789"
                        className="block text-xs text-gray-400 hover:text-[#e71329] transition-colors"
                      >
                        +91 11 2345 6789
                      </a>
                      <a
                        href="tel:+911123456790"
                        className="block text-xs text-gray-400 hover:text-[#e71329] transition-colors"
                      >
                        +91 11 2345 6790
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-start space-x-2">
                  <svg
                    className="w-4 h-4 text-[#e71329] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-300 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@bpit.ac.in"
                      className="text-xs text-gray-400 hover:text-[#e71329] transition-colors"
                    >
                      info@bpit.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-[#303094] to-[#e71329] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">BPIT</span>
              </div>
              <span className="text-sm text-gray-400">
                BPIT R&D
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Bhagwan Parshuram Institute of Technology. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

