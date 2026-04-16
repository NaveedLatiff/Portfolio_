import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"
import ParticleBackground from "@/components/ParticleBackground"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Contact from "@/sections/Contact"
import Skills from "@/sections/Skills"
import Projects from "@/sections/Projects"
import Footer from "@/sections/Footer"
import WhatsApp from "@/components/Whatsapp"

const Page = () => {
  return (

    <>
        <WhatsApp/>
      <ParticleBackground />
      <CustomCursor />
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

    </>
    )
  }

export default Page