import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import DynamicCursor from "./components/dynamic-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sujal Thapa - Portfolio",
  description:
    "Computer Science Student & Web Developer passionate about IoT systems, web development, and creating innovative solutions.",
  keywords: "Sujal Thapa, Computer Science, Web Developer, IoT, Portfolio, ULM",
  authors: [{ name: "Sujal Thapa" }],
  openGraph: {
    title: "Sujal Thapa - Portfolio",
    description:
      "Computer Science Student & Web Developer passionate about IoT systems, web development, and creating innovative solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} cursor-none`}>
        <DynamicCursor />
        {children}
      </body>
    </html>
  )
}
