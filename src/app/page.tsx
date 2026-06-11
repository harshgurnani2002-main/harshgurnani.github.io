import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Kaggle from '@/components/Kaggle'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Kaggle />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
