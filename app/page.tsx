import Hero from "./components/Hero"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import WhyUs from "./components/WhyUs"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  )
}

