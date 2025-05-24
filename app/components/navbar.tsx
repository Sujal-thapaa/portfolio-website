"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, User, FolderOpen, FileText, BookOpen, Star } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "resume") {
      // Open Google Docs resume in new tab
      window.open(
        "https://docs.google.com/document/d/1Yex6ud63rZc7k8FjjaW_3C9vUcaoU56FdgvV7SQRlr0/edit?usp=drive_link",
        "_blank",
      )
      setIsOpen(false)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const menuItems = [
    { name: "Home", icon: Home, id: "hero" },
    { name: "About", icon: User, id: "about" },
    { name: "Projects", icon: FolderOpen, id: "portfolio" },
    { name: "Resume", icon: FileText, id: "resume" },
    { name: "Blogs", icon: BookOpen, id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-purple-400">St.</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </button>
            ))}
            <button className="p-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
              <Star size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
