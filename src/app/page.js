import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"
import ParticleBackground from "@/components/ParticleBackground"
import Hero from "@/sections/Hero"

const Page = () => { // Changed to uppercase 'Page'
  return (
    <div className='min-h-screen w-full relative'>
     
      <CustomCursor />
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default Page