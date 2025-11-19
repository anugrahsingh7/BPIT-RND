"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/ui/skiper-ui/blogcard";

export default function AcademicBlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Engineering",
      author: [
        { name: "Dr. Arvind Sharma", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPIT-Arvind-F-APS-300x300.jpg" },
        { name: "Dr. Pooja Bhatia", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPIT-F2-300x300.jpg" }
      ],
      date: "March 5, 2024",
      excerpt:
        "Recent scientific discoveries across psychology, cosmology, and neuroscience offer fresh perspectives on complex systems. A study from Aalto University explored the psychological impact of the challenging video game Dark Souls. Researchers analyzed Reddit discussions and found that many players reported emotional growth from the game’s difficulty. Struggling and ultimately succeeding helped players build perseverance, resilience, and acceptance of failure. While not replacing therapy, such games can promote positive mental health outcomes by offering meaningful, narrative-driven experiences. In cosmology, a new theory proposed by a University of Portsmouth researcher suggests that the universe might function as a computational process. According to this idea, gravity could result from information optimization. Tracking a single massive object would be computationally easier than many smaller ones, naturally leading to gravitational attraction. This concept could dramatically change our understanding of gravity and the universe’s fundamental structure if validated. In neuroscience, researchers in Barcelona revealed essential findings about brain connectivity and psychosis. They discovered that patients who recovered from psychotic episodes showed increased communication between different brain regions. At the same time, those with persistent symptoms exhibited reduced connectivity. This insight could improve predictions about mental health outcomes and guide more personalized treatment strategies. Together, these studies demonstrate how diverse scientific fields find new ways to explain resilience, reality, and recovery, offering a deeper understanding of human experiences and the universe’s structure.",
      category: "Technology",
      image:
        "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/05/BPIT-7.5.25-1-300x300.jpg",
    },
    {
      title: "The Patent Paradox: When Innovation Stagnates on Paper",
       author: [
        { name: "Dr. Arvind Sharma", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPIT-Arvind-F-APS-300x300.jpg" },
        { name: "Dr. Pooja Bhatia", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPIT-F2-300x300.jpg" }
      ],
      date: "April, 2025",
      excerpt:
        "The patent system was designed to protect and encourage innovation, allowing inventors to secure rights over their creations. However, in practice, many patents exist only on paper, filed with the help of agents and financial backing, but never implemented in the real world. This phenomenon, often driven by corporations and individuals seeking legal leverage rather than practical development, creates a significant barrier to technological progress. Instead of fostering creativity, these “paper patents” are obstacles, blocking others from developing or improving upon similar ideas. A significant factor behind this issue is the role of patent agents and financial influence. Wealthy entities can afford expert legal services to craft well-structured patent applications, ensuring approval even for ideas that have never been tested or proven feasible. This disadvantages independent inventors and startups, as they may lack the financial resources to secure patents for their groundbreaking ideas. As a result, the system becomes skewed in favor of those who can afford to patent ideas rather than those who can bring them to life. The consequences of unused patents are far-reaching. They create legal landmines for real innovators who might unknowingly develop something already patented but never used. This stifles progress in various industries, from pharmaceuticals to renewable energy, where critical advancements are often held back due to intellectual property restrictions.",
      category: "Sustainability",
      image:
        "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/04/BPIT-Patent-mill-1-300x250.jpg",
    },
    {
      title: "Sustainable Plastics: Paving the Way for an Eco-Friendly Future",
       author: [
        { name: "Dr. Arvind Sharma", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPIT-Arvind-F-APS-300x300.jpg" },
        { name: "Dr. Pooja Bhatia", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPIT-F2-300x300.jpg" }
      ],
      date: "February 28, 2024",
      excerpt:
        "Plastic pollution is one of the biggest environmental challenges of our time, but what if the solution lies in the very material that causes the problem? Let’s dive into the world of sustainable plastics! Sustainable plastics are materials designed to minimize environmental impact by either being derived from organic resources or by recycling waste plastics. One of the major issues with conventional plastics is their non-biodegradability, which leads to significant disposal challenges and widespread accumulation in the environment. Plastics are derived from non-renewable petroleum resources, contributing to their depletion. Additionally, single-use plastics significantly contribute to global plastic pollution, making the problem even more severe. To address these concerns, sustainable and greener alternatives are essential, and sustainable plastics offer a promising solution. These materials can be broadly categorized into bioplastics and recycled plastics. Bioplastics are produced from renewable organic sources like starch, sugarcane, and wood pulp, offering a more sustainable alternative to conventional plastics. These materials originate from natural resources and can naturally degrade under appropriate conditions, reducing their environmental footprint. On the other hand, recycled plastics are produced by reprocessing used plastic waste, extending its lifecycle and reducing the demand for virgin plastic production. Biodegradable plastics can be an ideal substitute for conventional plastics due to their similar applications, as illustrated in the figure below.",
      category: "Sustainability",
      image:
        "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/03/Sp-2-2-300x250.jpg",
    },
    {
      title: "Big Data Databases Using AI in the Current Era",
       author: [
        { name: "Dr. Charu Gupta", photo: "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/01/BPITCSE-F-300x300.png" },
      
      ],
      date: "February 28, 2024",
      excerpt:
        "The future of big data management is undeniably tied to the evolution of AI. As machine learning models become more advanced and accessible, organizations will continue to harness AI to drive efficiency and innovation. The development of AI will likely lead to the creation of autonomous systems capable of managing entire big data ecosystems—monitoring, analyzing, and optimizing data in real-time without significant human intervention. Additionally, AI’s ability to handle unstructured data, such as images, videos, and text, will become more refined, enabling even greater insights across various industries. With the proliferation of edge computing and IoT devices, AI will further enable the decentralized processing of data, allowing for faster and more localized decision-making.� AI is undoubtedly transforming the way big data databases are managed in the current era. By automating tasks like data integration, storage optimization, querying, predictive analytics, and real-time decision-making, AI is enabling organizations to derive valuable insights from vast datasets quickly and efficiently. As technology continues to evolve, AI will play an even more pivotal role in addressing the challenges of big data management, paving the way for smarter, more agile systems that can handle the complexities of the data-driven world.",
      category: "Sustainability",
      image:
        "https://rnd.bpitindia.ac.in/wp-content/uploads/2025/02/BPIT-RD-Blog2-1-300x300.jpg",
    },
    
    
    
  ];

  const faqs = [
    {
      question: "How often is the Academic Blog updated?",
      answer:
        "We publish new stories every fortnight, aligning releases with major academic events and submission cycles to ensure timely relevance for scholars and practitioners.",
    },
    {
      question: "Can students contribute to the blog?",
      answer:
        "Yes. While faculty lead most features, we welcome co-authored student research summaries vetted by supervising professors. Submit your abstract and methodology for consideration.",
    },
    {
      question: "What review process do articles undergo?",
      answer:
        "Each submission goes through a two-step review—first by the editorial board for narrative clarity, then by a subject-matter peer reviewer focusing on rigor and citation integrity.",
    },
    {
      question: "Are multimedia or data visualizations accepted?",
      answer:
        "We encourage interactive media, including datasets, infographics, and embedded visualizations that enhance comprehension. Provide source files, captions, and accessibility notes when submitting.",
    },
  ];

  const totalPosts = blogPosts.length;
  const authorSet = new Set();
  const categorySet = new Set();

  blogPosts.forEach((post) => {
    post.author?.forEach((author) => authorSet.add(author.name));
    if (post.category) categorySet.add(post.category);
  });

  const [openIndex, setOpenIndex] = useState(null);
  const trackRef = useRef(null);

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 320 + 16;
    const amount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#05060f] via-[#111132] to-[#1f1b3a] p-10 shadow-2xl">
          <div className="absolute inset-0 opacity-40 mix-blend-screen">
            <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#e71329] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#303094] blur-3xl" />
          </div>
          <div className="relative grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="space-y-6 text-white">
              <p className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gray-300">
                Academic Blog
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Research stories shaping tomorrow’s breakthroughs
              </h1>
              <p className="text-lg text-gray-300">
                Dive into curated thought leadership from BPIT&apos;s faculty and
                researchers. Explore frontier work in AI, sustainability, and
                emerging technologies, distilled into actionable insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                  Browse Latest Issues
                </button>
                <button className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                  Submit Your Research
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                Snapshot
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <p className="text-4xl font-bold text-white">{totalPosts}+</p>
                  <p className="text-sm text-gray-400">Peer-reviewed stories</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">
                    {authorSet.size}+
                  </p>
                  <p className="text-sm text-gray-400">Faculty contributors</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">
                    {categorySet.size}
                  </p>
                  <p className="text-sm text-gray-400">Interdisciplinary themes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative mt-16">
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
                  author={post.author} // NOW ARRAY
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

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-white backdrop-blur-xl">
          <div className="mb-10 space-y-4 text-center">
           
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Everything you need to know before pitching your story
            </h2>
            <p className="text-gray-300">
              Click a question to reveal additional context, guidelines, and best
              practices curated by the editorial team.
            </p>
          </div>
          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left text-lg font-medium text-white"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    {faq.question}
                    <span className="ml-4 text-sm text-gray-400">
                      {isOpen ? "Hide" : "Read more"}
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      id={`faq-panel-${index}`}
                      className="mt-4 text-base text-gray-300"
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
