import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = SECTION_IDS[0]

      for (let i = 0; i < SECTION_IDS.length; i++) {
        const id = SECTION_IDS[i]
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - 100
        const height = el.offsetHeight
        const isLast = i === SECTION_IDS.length - 1
        if (scrollY >= top && (isLast || scrollY < top + height)) {
          current = id
          break
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = ['about', 'skills', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
