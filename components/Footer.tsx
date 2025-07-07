import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      
      {/* Content */}
      <div className="relative px-6 py-16 text-center max-w-4xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        {/* Main heading */}
        <h3 className="text-3xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Thanks for Reading
          </span>
        </h3>
        
        {/* Description text */}
        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          Thank you for taking the time to learn about us. If our vision resonates with you and you appreciate
          the way we build{' '}
          <span className="text-blue-400 font-medium">impactful digital solutions</span>{' '}
          that help businesses grow, attract new customers,
          and boost profitability—let's collaborate and create something{' '}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium">
            exceptional together
          </span>.
        </p>
        
        {/* CTA Button */}
        <div className="relative inline-block">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full text-white font-semibold text-base transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95">
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
            
            {/* Button content */}
            <span className="relative flex items-center gap-2">
              Contact Us
              <span className="transition-transform duration-300 group-hover:translate-x-1">✨</span>
            </span>
          </button>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500/50 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-30" style={{animationDelay: '1.5s'}}></div>
      </div>
    </footer>
  );
};

export default Footer;