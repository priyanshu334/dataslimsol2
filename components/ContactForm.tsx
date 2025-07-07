"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [focusedField, setFocusedField] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field:string, value:string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background with gradient and glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-50/90 to-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-2xl shadow-slate-900/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h3>
          <p className="text-slate-600 text-sm">Let's create something amazing together</p>
        </div>
        
        {/* Form */}
        <div className="space-y-6">
          {/* Name Input */}
          <div className="relative group">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField('')}
              className="w-full px-4 py-4 bg-white/70 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-400 text-slate-800 font-medium"
              placeholder="Enter your name"
            />
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'name' ? 'opacity-100' : ''}`}></div>
          </div>

          {/* Email Input */}
          <div className="relative group">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              className="w-full px-4 py-4 bg-white/70 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-400 text-slate-800 font-medium"
              placeholder="Enter your email"
            />
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'email' ? 'opacity-100' : ''}`}></div>
          </div>

          {/* Phone Input */}
          <div className="relative group">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField('')}
              className="w-full px-4 py-4 bg-white/70 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-400 text-slate-800 font-medium"
              placeholder="Enter your phone number"
            />
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'phone' ? 'opacity-100' : ''}`}></div>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
              rows={4}
              className="w-full px-4 py-4 bg-white/70 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-400 text-slate-800 font-medium resize-none"
              placeholder="Tell us about your project..."
            />
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'message' ? 'opacity-100' : ''}`}></div>
          </div>

          {/* Submit Button */}
          <div className="relative pt-2">
            <button
              type="submit"
              className="group relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center gap-2">
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">🚀</span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500/30 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500/30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;