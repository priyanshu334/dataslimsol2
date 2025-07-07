"use client";
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/public/images/img1.png"
            alt="Team Meeting"
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-blue-400/20 rotate-45 animate-float-fast"></div>
        <div className="absolute top-1/3 right-32 w-12 h-12 bg-purple-400/30 rounded-full animate-pulse"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 animate-fade-in">
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 animate-slide-up">
            Crafting Digital Excellence Through Innovation & Strategy
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-expand"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Where Innovation 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Meets Excellence</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At <span className="font-semibold text-blue-600">[Your Agency Name]</span>, we are a passionate team of tech enthusiasts, designers, marketers, and strategists dedicated to driving digital innovation and growth. Companies partner with us to create a lasting digital presence through cutting-edge technology, impactful branding, and scalable marketing campaigns.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-slide-up-delay">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <Image
                  src="/public/images/img2.png"
                  alt="Team"
                  width={400}
                  height={300}
                  className="rounded-2xl mx-auto animate-float-gentle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image First */}
            <div className="relative animate-slide-up lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="w-full h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-slide-up-delay lg:order-2">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Our 
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Vision</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to be a trusted global leader in empowering organizations to navigate transformation and seize tomorrow. We envision a future that prioritizes user-centric digital experiences, leveraging the latest technologies and design thinking.
              </p>
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200/50">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Future-focused digital transformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              How We Drive 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help companies grow through strategic digital solutions and data-driven innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Web Development", desc: "Cutting-edge websites and applications" },
              { icon: "📱", title: "Mobile Apps", desc: "iOS and Android solutions" },
              { icon: "🎨", title: "Branding", desc: "Memorable brand identities" },
              { icon: "📈", title: "SEO & Marketing", desc: "Data-driven growth strategies" },
              { icon: "⚡", title: "Performance", desc: "Lightning-fast optimization" },
              { icon: "🎯", title: "Strategy", desc: "Results-focused planning" }
            ].map((item, idx) => (
              <div key={idx} className="group animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #ffffff 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Meet Our 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Co-Founder", expertise: "Strategic Vision & Leadership" },
              { name: "Sarah Chen", role: "CTO & Co-Founder", expertise: "Technology & Innovation" },
              { name: "Marcus Williams", role: "Creative Director", expertise: "Design & User Experience" }
            ].map((founder, idx) => (
              <div key={idx} className="group animate-slide-up" style={{animationDelay: `${idx * 0.2}s`}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-blue-300 font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-300 leading-relaxed">{founder.expertise}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
        
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
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
          50% { transform: translateY(-10px); }
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
        
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
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
    </div>
  );
}