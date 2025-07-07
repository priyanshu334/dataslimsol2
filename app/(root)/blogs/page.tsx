
"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-purple-400/30 rotate-45 animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400/25 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight mb-6">
                  Explore Our
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                    Blogs
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover everything about tech niches to grow your business digitally with cutting-edge insights and strategies
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <span className="relative z-10">Tech Insights</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-2xl font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  See All Posts
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50K+</div>
                  <div className="text-sm text-gray-600">Readers</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-gray-600">Topics</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative animate-slide-up-delay">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Blog Icons */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-float-gentle">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Blog Central</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #ffffff 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-400/20 rotate-45 animate-float-fast"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data Slime
              </span>
            </h2>
            <p className="text-3xl font-bold mb-8 text-blue-300">Solutions</p>
            
            <div className="max-w-2xl mx-auto mb-10">
              <p className="text-xl leading-relaxed text-gray-300">
                At <span className="text-blue-400 font-semibold">[Your Agency Name]</span>, we are a dynamic team of marketers, designers, and strategists dedicated to taking your business to the next level. From branding to marketing, we craft custom strategies that drive growth.
              </p>
            </div>

            <button className="group relative px-10 py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-bold text-gray-800 mb-6">
              Latest 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Insights</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover cutting-edge strategies and insights to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <article
                key={i}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center relative">
                    {/* Placeholder for blog image */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white text-sm font-medium">Article {i + 1}</span>
                    </div>
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                    {['Tech', 'AI', 'Design', 'Marketing', 'Strategy', 'Innovation'][i % 6]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {[
                      'The Future of AI in Business',
                      'Design Systems That Scale',
                      'Marketing in the Digital Age',
                      'Building Remote Teams',
                      'Data-Driven Strategies',
                      'User Experience Trends',
                      'Cloud Migration Guide',
                      'Sustainable Tech Solutions',
                      'Growth Hacking Tactics'
                    ][i]}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Discover innovative approaches and proven strategies that drive real business results in today's competitive landscape.
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>John Doe</span>
                    </div>
                    <div className="text-sm text-gray-500">5 min read</div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Read Article
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16 animate-fade-in">
            <button className="px-10 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(45deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.3s both;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}