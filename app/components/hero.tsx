"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showSubheading, setShowSubheading] = useState(false)
  const [showArrow, setShowArrow] = useState(false)

  const fullText = "SUJAL THAPA"
  const subheadings = ["Creative Developer", "Computer Science Student", "Tech Enthusiast"]

  useEffect(() => {
    setMounted(true)

    // Typing animation
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowSubheading(true), 500)
        setTimeout(() => setShowArrow(true), 1500)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              background: `linear-gradient(45deg, #ff6b6b, #ffa500, #8b5cf6)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-purple-600 animate-pulse"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-orange-500 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-red-500 animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute opacity-10 animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-16 h-16 border-2 border-purple-400 rotate-45" />
            ) : i % 3 === 1 ? (
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-45" />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Greeting */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-4 tracking-wide">
            Hi There! <span className="inline-block animate-bounce text-3xl">👋</span>
          </h1>
        </div>

        {/* Main Name with Typing Effect */}
        <div className="relative mb-8">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight">
            <span className="text-white font-light tracking-wider">I'M </span>
            <br className="sm:hidden" />
            <span className="relative inline-block">
              {/* Glitch Background Effect */}
              <span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-purple-600 opacity-50 blur-sm animate-pulse"
                aria-hidden="true"
              >
                {typedText}
              </span>

              {/* Main Text with Gradient */}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-purple-600 animate-gradient-x">
                {typedText}
                {typedText.length < fullText.length && <span className="animate-blink text-white">|</span>}
              </span>

              {/* Sparkle Effects */}
              {typedText.length === fullText.length && (
                <>
                  <div className="absolute -top-4 -right-4 w-6 h-6">
                    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div
                      className="absolute top-2 left-2 w-2 h-2 bg-pink-400 rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6">
                    <div
                      className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>
                </>
              )}
            </span>
          </h2>
        </div>

        {/* Subheading with Slide-in Animation */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            showSubheading ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 mb-12">
            {subheadings.map((text, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-400 transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {text}
                </span>
                {index < subheadings.length - 1 && <span className="hidden sm:inline mx-4 text-purple-400">|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            showSubheading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToNext}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1Yex6ud63rZc7k8FjjaW_3C9vUcaoU56FdgvV7SQRlr0/edit?usp=drive_link",
                  "_blank",
                )
              }
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          showArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2 tracking-wider">SCROLL DOWN</span>
          <div className="relative">
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-purple-400 transition-colors duration-300" />
            <div className="absolute inset-0 w-6 h-6 border border-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
          </div>
        </button>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
