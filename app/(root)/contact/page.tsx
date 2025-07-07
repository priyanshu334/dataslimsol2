
"use client";
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Hero Section with Parallax Effect */}
      <div className="relative w-full h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/70 to-indigo-600/80 z-10"></div>
        <Image 
          src="/contact-image.jpg" 
          alt="Contact" 
          layout="fill" 
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Let's create something amazing together
            </p>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-16 right-16 w-12 h-12 bg-blue-300/20 rotate-45 animate-float-fast"></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-purple-300/30 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Contact Section */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column - Contact Form */}
              <div className="space-y-8">
                <div className="animate-slide-up">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Ready to Start?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 animate-slide-up-delay">
                  <ContactForm />
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-2 gap-6 animate-slide-up-delay-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold">Email Us</h3>
                    </div>
                    <p className="opacity-90">hello@company.com</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold">Visit Us</h3>
                    </div>
                    <p className="opacity-90">123 Business Ave, City</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Illustration & Features */}
              <div className="space-y-8">
                {/* Main Illustration */}
                <div className="relative group animate-slide-up">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 text-center">
                    <div className="relative inline-block">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                        alt="Contact Illustration"
                        width={240}
                        height={240}
                        className="mx-auto animate-float-gentle filter drop-shadow-lg"
                      />
                      {/* Glowing ring effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-pulse scale-110"></div>
                    </div>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="space-y-6 animate-slide-up-delay">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-1">
                    <div className="bg-white rounded-2xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">Quick Response</h3>
                          <p className="text-gray-600">We respond within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-1">
                    <div className="bg-white rounded-2xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">Expert Support</h3>
                          <p className="text-gray-600">Professional guidance always</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-1">
                    <div className="bg-white rounded-2xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">Guaranteed Results</h3>
                          <p className="text-gray-600">Your success is our priority</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
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
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}