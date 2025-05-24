"use client"

import { useEffect, useState, useRef } from "react"
import { ExternalLink, Github, MapPin, Globe, Zap, Users, Shield } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger card animations
          const cards = [0, 1, 2, 3]
          cards.forEach((cardIndex, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, cardIndex])
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "IoT Waste Management System",
      description:
        "Reduced food waste using smart tech in university dining halls. Built with IoT sensors and a web dashboard for real-time monitoring and analytics.",
      icon: Zap,
      iconColor: "text-green-500",
      bgGradient: "from-green-500/20 to-emerald-600/20",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-400",
      technologies: ["IoT", "Python", "Flask", "JavaScript"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      category: "IoT & Hardware",
    },
    {
      id: 2,
      title: "ULM Virtual Tour",
      description:
        "A Google Maps-integrated web app showing campus buildings with interactive features and detailed information for prospective students.",
      icon: MapPin,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-500/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400",
      technologies: ["Google Maps API", "JavaScript", "HTML", "CSS"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      category: "Web Development",
    },
    {
      id: 3,
      title: "FUSN (Nepali Student Web Platform)",
      description:
        "Helps Nepali students compare university options using shared scores and documents for better decision making and educational planning.",
      icon: Users,
      iconColor: "text-purple-500",
      bgGradient: "from-purple-500/20 to-violet-600/20",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "SafeRoute App",
      description:
        "A mobile app predicting safer routes based on crime data analysis and real-time safety information to enhance user security.",
      icon: Shield,
      iconColor: "text-orange-500",
      bgGradient: "from-orange-500/20 to-red-600/20",
      borderColor: "border-orange-500/30",
      hoverBorder: "hover:border-orange-400",
      technologies: ["React Native", "Python", "Machine Learning", "APIs"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mobile & AI",
    },
  ]

  const techColors: { [key: string]: string } = {
    IoT: "bg-green-500/20 text-green-400 border-green-500/30",
    Python: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Flask: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Google Maps API": "bg-red-500/20 text-red-400 border-red-500/30",
    HTML: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    CSS: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
    MongoDB: "bg-green-500/20 text-green-400 border-green-500/30",
    Express: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    "React Native": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "Machine Learning": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    APIs: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  }

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-16 h-16 border-2 border-purple-400 rotate-45" />
            ) : i % 3 === 1 ? (
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 transform rotate-45" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            My Portfolio <span className="text-3xl">🚀</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in{" "}
            <span className="text-blue-400 font-semibold">web development</span>,{" "}
            <span className="text-green-400 font-semibold">IoT systems</span>, and{" "}
            <span className="text-purple-400 font-semibold">software engineering</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Card */}
              <div
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${project.borderColor} ${project.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Project Icon */}
                      <div
                        className={`p-3 rounded-xl bg-gray-700/50 border ${project.borderColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                      </div>
                    </div>

                    {/* Floating Indicator */}
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Globe className="w-16 h-16 text-gray-500 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      Preview
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${
                            techColors[tech] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-xl border border-gray-600/50 hover:border-gray-500 transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Get In Touch
              </button>
              <button
                onClick={() => window.open("https://github.com/yourusername", "_blank")}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
