"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (isMenuOpen && !event.target.closest('.nav-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Blogs', href: '#blogs', icon: '📝' },
    { name: 'Contact Us', href: '#contact', icon: '📞' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Our Services', href: '#services', icon: '⚡' }
  ];

  return (
    <>
      <nav className="w-full relative z-50">
        {/* Gradient background with blur effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-slate-700/50"></div>
        
        {/* Content */}
        <div className="relative flex justify-between items-center px-6 py-4">
          {/* Left side - Brand text with gradient */}
          <div className="flex items-center">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Build Scalable and Reliable Applications
            </span>
          </div>
          
          {/* Right side - Browse button */}
          <div className="nav-menu-container relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsMenuOpen(true)}
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              {/* Button background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <span>Browse</span>
                <span className={`transition-all duration-300 ${isMenuOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                  {isMenuOpen ? '✕' : '⟶'}
                </span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </nav>

      {/* Overlay Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
        isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu content */}
        <div className={`nav-menu-container relative h-full flex items-center justify-center transition-all duration-700 ease-out ${
          isMenuOpen 
            ? 'translate-y-0 scale-100' 
            : '-translate-y-20 scale-95'
        }`}>
          <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 shadow-2xl shadow-black/50 max-w-2xl w-full mx-6">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Navigation
              </h2>
              <p className="text-slate-400 text-sm">Explore our sections</p>
            </div>
            
            {/* Menu items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 ${
                    isMenuOpen ? 'animate-fade-in-up' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                        {item.name === 'Home' && 'Return to main page'}
                        {item.name === 'Blogs' && 'Read our latest posts'}
                        {item.name === 'Contact Us' && 'Get in touch with us'}
                        {item.name === 'Projects' && 'View our work portfolio'}
                        {item.name === 'Our Services' && 'Discover what we offer'}
                      </p>
                    </div>
                    <span className="ml-auto text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Close hint */}
            <div className="text-center mt-8">
              <p className="text-slate-500 text-xs">
                Click outside or press the Browse button to close
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;