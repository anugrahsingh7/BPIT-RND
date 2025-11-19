"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/ui/skiper-ui/blogcard";

export default function AcademicBlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Engineering",
      author: "Dr. John Smith",
      date: "March 5, 2024",
      excerpt: "Exploring how artificial intelligence is transforming engineering practices and research methodologies.",
      category: "Technology"
    },
    {
      title: "Sustainable Energy Solutions",
      author: "Dr. Jane Doe",
      date: "February 28, 2024",
      excerpt: "A comprehensive look at renewable energy technologies and their implementation in modern infrastructure.",
      category: "Sustainability"
    },
    {
      title: "Innovation in Materials Science",
      author: "Dr. Robert Johnson",
      date: "February 20, 2024",
      excerpt: "Recent breakthroughs in materials science and their applications in various engineering domains.",
      category: "Research"
    },
    {
      title: "Advances in Robotics",
      author: "Dr. Emily Davis",
      date: "January 15, 2024",
      excerpt: "Modern robotics trends shaping automation and precision engineering.",
      category: "Automation"
    },
    {
      title: "Data-Driven Infrastructure",
      author: "Dr. Michael Lee",
      date: "December 10, 2023",
      excerpt: "Leveraging data analytics to design resilient urban systems.",
      category: "Analytics"
    }
  ];

  const trackRef = useRef(null);

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 320 + 16;
    const amount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#303094] to-[#e71329] bg-clip-text text-transparent">
            Academic Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, research findings, and academic perspectives from our faculty and researchers
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />

          <div
            ref={trackRef}
            className="scroll-smooth overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-10 py-2"
          >
            {blogPosts.map((post, index) => (
              <div key={index} className="snap-start">
                <Card
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                  image={post.image}
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCards("left")}
              className="m-2 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCards("right")}
              className="m-2 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

