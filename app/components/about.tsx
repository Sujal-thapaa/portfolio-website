"use client"

import { useEffect, useState, useRef } from "react"
import { Download, ExternalLink, Code, Globe, Zap, Brain, Server, Lightbulb } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger card animations
          const cards = [0, 1, 2]
          cards.forEach((cardIndex, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, cardIndex])
            }, index * 200)
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

  const skills = [
    { icon: Globe, label: "Web Development", color: "text-blue-500", progress: 85 },
    { icon: Zap, label: "IoT Systems", color: "text-green-500", progress: 75 },
    { icon: Brain, label: "AI & ML", color: "text-purple-500", progress: 70 },
    { icon: Server, label: "Backend Dev", color: "text-orange-500", progress: 80 },
  ]

  const timeline = [
    { year: "2022", title: "Started Web Development", description: "HTML, CSS, JavaScript" },
    { year: "2023", title: "IoT Projects", description: "Waste Management System" },
    { year: "2024", title: "AI Exploration", description: "Machine Learning & Edge Computing" },
  ]

  const handleDownloadResume = () => {
    window.open(
      "https://docs.google.com/document/d/1Yex6ud63rZc7k8FjjaW_3C9vUcaoU56FdgvV7SQRlr0/edit?usp=drive_link",
      "_blank",
    )
  }

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Code Symbols */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500/10 font-mono text-2xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {["</>", "{}", "[]", "()"][Math.floor(Math.random() * 4)]}
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
            About Me <span className="text-3xl">👨‍💻</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Illustration */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visibleCards.includes(0) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
                {/* Animated Developer Workspace */}
                <div className="relative">
                  {/* Desk Setup */}
                  <div className="relative">
                    {/* Monitor */}
                    <div className="w-full max-w-sm mx-auto mb-6">
                      <div className="bg-gray-900 rounded-lg p-4 border-4 border-gray-700 relative overflow-hidden">
                        {/* Screen Content */}
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded p-3 h-32">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <div
                                className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                            <Code className="w-4 h-4 text-white animate-bounce" />
                          </div>
                          {/* Code Lines */}
                          <div className="space-y-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="flex space-x-1">
                                <div
                                  className="w-2 h-1 bg-purple-300 rounded opacity-80 animate-pulse"
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                ></div>
                                <div
                                  className={`w-${8 + (i % 3) * 4} h-1 bg-white rounded opacity-60 animate-pulse`}
                                  style={{ animationDelay: `${i * 0.15}s` }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Monitor Stand */}
                      <div className="w-12 h-6 bg-gray-700 mx-auto rounded-b-lg"></div>
                      <div className="w-16 h-3 bg-gray-600 mx-auto rounded-lg"></div>
                    </div>

                    {/* Floating Tech Icons */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="absolute top-1/2 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="absolute -bottom-4 right-1/4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className="absolute top-4 right-4 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-blue-400/30 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              visibleCards.includes(1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6">
              {/* Paragraph 1 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 animate-pulse" />
                  <h3 className="text-xl font-semibold text-white">Academic Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I am a driven undergraduate student at the{" "}
                  <span className="text-blue-400 font-semibold">University of Louisiana at Monroe (ULM)</span>, pursuing
                  a <span className="text-purple-400 font-semibold">Bachelor of Science in Computer Science</span> with
                  a strong foundation in <span className="text-green-400 font-semibold">Mathematics</span>.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-500 mt-1 animate-pulse" />
                  <h3 className="text-xl font-semibold text-white">Technical Passion</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about <span className="text-blue-400 font-semibold">web development</span>,{" "}
                  <span className="text-green-400 font-semibold">IoT systems</span>, and{" "}
                  <span className="text-purple-400 font-semibold">virtual mapping technologies</span>. I've worked on
                  projects like a{" "}
                  <span className="text-orange-400 font-semibold">Dining Hall Waste Management System</span> using IoT,
                  and a <span className="text-pink-400 font-semibold">Virtual Campus Tour</span> built with the Google
                  Maps API.
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <Brain className="w-6 h-6 text-purple-500 mt-1 animate-pulse" />
                  <h3 className="text-xl font-semibold text-white">Future Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I actively explore new areas such as <span className="text-purple-400 font-semibold">AI</span>,{" "}
                  <span className="text-blue-400 font-semibold">edge computing</span>, and{" "}
                  <span className="text-orange-400 font-semibold">backend development</span>. My goal is to contribute{" "}
                  <span className="text-green-400 font-semibold">innovative solutions</span> that positively impact
                  society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-700 ${
            visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  <span className="font-semibold text-white">{skill.label}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${
                      skill.color.includes("blue")
                        ? "from-blue-500 to-blue-600"
                        : skill.color.includes("green")
                          ? "from-green-500 to-green-600"
                          : skill.color.includes("purple")
                            ? "from-purple-500 to-purple-600"
                            : "from-orange-500 to-orange-600"
                    } transition-all duration-1000 ease-out`}
                    style={{
                      width: visibleCards.includes(2) ? `${skill.progress}%` : "0%",
                      transitionDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{skill.progress}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Learning Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                      <div className="text-purple-400 font-bold text-lg">{item.year}</div>
                      <div className="text-white font-semibold text-xl mb-2">{item.title}</div>
                      <div className="text-gray-300">{item.description}</div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-800 animate-pulse"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadResume}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
