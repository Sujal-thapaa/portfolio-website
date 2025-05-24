"use client"

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    {
      name: "Resume",
      href: "https://docs.google.com/document/d/1Yex6ud63rZc7k8FjjaW_3C9vUcaoU56FdgvV7SQRlr0/edit?usp=drive_link",
      external: true,
    },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sujal124suj@gmail.com",
      color: "hover:text-green-400",
    },
  ]

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank")
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Left Section - About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Sujal Thapa</h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science student passionate about creating innovative solutions through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`group p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 ${social.color} transition-all duration-300 hover:scale-110 hover:border-purple-500/50`}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Center Section - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Monroe, LA, USA</p>
              <p>+1 740-249-0108</p>
              <p>sujal124suj@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">© 2025 Sujal Thapa. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>and lots of</span>
              <span className="text-yellow-500">☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
