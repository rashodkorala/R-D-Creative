import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhoWeWorkWith />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}
