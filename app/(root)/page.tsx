"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Zap, Target, Globe, Users, TrendingUp, ChevronRight, Star, Play, Smartphone, Monitor, Search, BarChart3, Palette, Shield, Clock, Award } from 'lucide-react';

export default function AgencyLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with scroll animation
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    // Auto-rotate services
    const serviceInterval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
      clearInterval(serviceInterval);
    };
  }, []);

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks",
      features: ["React & Next.js", "E-commerce Solutions", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that engage users",
      features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver measurable results",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "PPC Campaigns"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Transform your data into actionable business intelligence",
      features: ["Google Analytics", "Conversion Tracking", "A/B Testing", "Performance Reports"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security",
      features: ["Security Audits", "SSL Certificates", "Vulnerability Testing", "Data Protection"]
    }
  ];

  const projects = [
    { 
      title: "TechCorp E-Commerce Platform", 
      description: "Full-stack e-commerce solution with AI-powered recommendations and real-time inventory management",
      category: "E-Commerce",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      metrics: { conversion: "+320%", revenue: "$2.4M", users: "50K+" },
      image: "🛍️"
    },
    { 
      title: "HealthPlus Telemedicine App", 
      description: "HIPAA-compliant telehealth platform connecting patients with healthcare providers",
      category: "Healthcare",
      tech: ["React Native", "WebRTC", "AWS", "Python"],
      metrics: { patients: "25K+", satisfaction: "98%", consultations: "100K+" },
      image: "🏥"
    },
    { 
      title: "FinSecure Trading Platform", 
      description: "Real-time trading platform with advanced analytics and secure blockchain integration",
      category: "FinTech",
      tech: ["Vue.js", "Django", "WebSocket", "Blockchain"],
      metrics: { volume: "$50M+", uptime: "99.9%", trades: "1M+" },
      image: "💰"
    },
    { 
      title: "EduLearn Learning Management", 
      description: "Interactive LMS with video streaming, assessments, and progress tracking",
      category: "Education",
      tech: ["React", "Express", "MongoDB", "FFmpeg"],
      metrics: { students: "15K+", completion: "85%", courses: "500+" },
      image: "📚"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Data Slime transformed our digital presence completely. Our conversion rates increased by 300% within 3 months.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The team's expertise in both development and marketing is unmatched. They delivered beyond our expectations.",
      rating: 5,
      company: "GrowthCo"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, InnovateLab",
      content: "Professional, creative, and results-driven. Our mobile app now has over 100K active users.",
      rating: 5,
      company: "InnovateLab"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }
        
        .float {
          animation: float 6s ease-in-out infinite;
        }
        
        .float-delay-1 { animation-delay: -1s; }
        .float-delay-2 { animation-delay: -2s; }
        .float-delay-3 { animation-delay: -3s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .text-glow {
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
        }
        
        .card-glow {
          box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
          }
        }
        
        .slide-up {
          animation: slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card {
          transform: scale(0.95);
          opacity: 0.7;
          transition: all 0.5s ease;
        }

        .service-card.active {
          transform: scale(1);
          opacity: 1;
        }

        .typing {
          border-right: 2px solid #8B5CF6;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #8B5CF6; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float float-delay-1"
            style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
          />
          <div 
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 float float-delay-2"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </div>

        <div className={`relative z-10 text-center px-6 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 slide-up">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Trusted by 500+ companies worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent text-glow">
              Digital Solutions
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              That Drive Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We craft exceptional web experiences and data-driven marketing strategies that transform your business into a digital powerhouse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group flex items-center px-10 py-5 border-2 border-white/20 hover:border-white/40 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/5">
              <Play className="mr-3 w-6 h-6" />
              Watch Our Story
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`scroll-animate stagger-${index + 1} text-center`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl mb-3 backdrop-blur-sm border border-white/10">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-glow">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end digital solutions that drive real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group cursor-pointer scroll-animate stagger-${(index % 3) + 1} service-card ${activeService === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 pulse-glow" />
                  <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full card-glow">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 border border-purple-500/30 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-glow">
              Featured <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group cursor-pointer scroll-animate stagger-${(index % 2) + 1}`}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative bg-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:scale-105 card-glow">
                    
                    <div className="aspect-video bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 flex items-center justify-center text-8xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                      <span className="relative z-10">{project.image}</span>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30">
                          {project.category}
                        </span>
                        <div className="flex space-x-2">
                          {project.tech.slice(0, 2).map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-green-400">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 group-hover:shadow-lg">
                        View Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-800 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-glow">
              Client <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with Data Slime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`scroll-animate stagger-${index + 1} group`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 animate-pulse" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-animate">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-glow">
            Ready to <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transform</span><br />
            Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss your project and create something amazing together. Get a free consultation and project quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Get Free Consultation
            </button>
            <button className="px-12 py-6 border-2 border-white/30 hover:border-white/50 text-white font-bold text-xl rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/5">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Data Slime</h3>
                  <p className="text-gray-400 text-sm">Digital Solutions Agency</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                We're a full-service digital agency specializing in web development, mobile apps, and data-driven marketing strategies that drive real business growth.
              </p>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'GitHub'].map((social) => (
                  <div key={social} className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-xs">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-white cursor-pointer transition-colors">Mobile Apps</li>
                <li className="hover:text-white cursor-pointer transition-colors">Digital Marketing</li>
                <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
                <li className="hover:text-white cursor-pointer transition-colors">Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our Work</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 Data Slime. All rights reserved. Built with passion and precision.
            </p>
            <div className="flex space-x-6 text-gray-500 text-sm">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}