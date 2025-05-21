import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToSection from "@/components/scroll-to-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <ScrollToSection />
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
