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
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-[#e71329] rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

