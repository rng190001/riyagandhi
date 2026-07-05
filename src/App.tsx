import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import Education from './sections/Education'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
