"use client";
import { useState } from 'react';

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics capabilities.",
    author: "Sarah Chen",
    category: "Data Science",
    tech: ["React", "Python", "TensorFlow"]
  },
  {
    title: "Sustainable Smart Home System",
    description: "IoT-enabled home automation focusing on energy efficiency and environmental sustainability.",
    author: "Marcus Rodriguez",
    category: "IoT",
    tech: ["Arduino", "Node.js", "MongoDB"]
  },
  {
    title: "Blockchain Supply Chain Tracker",
    description: "Transparent supply chain management using blockchain technology for enhanced traceability.",
    author: "Emma Thompson",
    category: "Blockchain",
    tech: ["Solidity", "Web3", "React"]
  },
  {
    title: "Virtual Reality Training Platform",
    description: "Immersive VR environment for professional training and skill development across industries.",
    author: "David Park",
    category: "VR/AR",
    tech: ["Unity", "C#", "Oculus SDK"]
  },
  {
    title: "AI Content Generation Tool",
    description: "Advanced natural language processing tool for automated content creation and optimization.",
    author: "Lisa Wang",
    category: "AI/ML",
    tech: ["Python", "GPT", "FastAPI"]
  },
  {
    title: "Collaborative Design Platform",
    description: "Real-time collaborative workspace for designers with advanced version control and feedback systems.",
    author: "James Mitchell",
    category: "Design Tools",
    tech: ["Vue.js", "WebRTC", "PostgreSQL"]
  },
  {
    title: "Mobile Health Companion",
    description: "Comprehensive health tracking application with AI-powered insights and personalized recommendations.",
    author: "Priya Patel",
    category: "Healthcare",
    tech: ["React Native", "Firebase", "TensorFlow"]
  },
  {
    title: "Quantum Computing Simulator",
    description: "Educational quantum computing simulator for learning quantum algorithms and principles.",
    author: "Alexander Kim",
    category: "Education",
    tech: ["Python", "Qiskit", "WebGL"]
  }
];

const categories = ["All", "Data Science", "IoT", "Blockchain", "VR/AR", "AI/ML", "Design Tools", "Healthcare", "Education"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null); // ✅ FIXED HERE

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover innovative solutions crafted with passion and cutting-edge technology
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {project.category === "Data Science" && "📊"}
                      {project.category === "IoT" && "🏠"}
                      {project.category === "Blockchain" && "⛓️"}
                      {project.category === "VR/AR" && "🥽"}
                      {project.category === "AI/ML" && "🤖"}
                      {project.category === "Design Tools" && "🎨"}
                      {project.category === "Healthcare" && "🏥"}
                      {project.category === "Education" && "🎓"}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    hoveredProject === i ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {project.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{project.author}</span>
                    </div>

                    <button className="group/btn relative px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                      <span className="relative z-10">View Project</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-300/20 to-pink-300/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's collaborate and bring your innovative ideas to life
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </div>
      </section>
    </main>
  );
}
