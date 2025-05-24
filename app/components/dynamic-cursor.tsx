"use client"

import { useEffect, useState } from "react"

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseEnterButton = () => setCursorVariant("button")
    const mouseLeaveButton = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners for interactive elements
    const buttons = document.querySelectorAll("button, a, .cursor-pointer")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", mouseEnterButton)
      button.addEventListener("mouseleave", mouseLeaveButton)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", mouseEnterButton)
        button.removeEventListener("mouseleave", mouseLeaveButton)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
    },
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-8 h-8 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          transform: `translate(${variants[cursorVariant as keyof typeof variants].x}px, ${
            variants[cursorVariant as keyof typeof variants].y
          }px) scale(${variants[cursorVariant as keyof typeof variants].scale})`,
        }}
      />

      {/* Trailing cursor */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-300 rounded-full pointer-events-none z-40 opacity-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      />

      {/* Outer glow */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border border-purple-400 rounded-full pointer-events-none z-30 opacity-30 transition-all duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`,
        }}
      />
    </>
  )
}
