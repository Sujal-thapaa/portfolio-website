import Hero from "./components/hero"
import About from "./components/about"
import Resume from "./components/resume"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
