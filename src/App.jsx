import NavBar from './components/navbar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Services from './components/service/Services'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'

const App = () => {
  return (
    <div>
      <NavBar/>
      <section id="home">
       <Hero />
      </section>

      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="experience">
        <Experience/>
      </section>

      <section id="projects">
       <Services/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
     
      <Footer/>
    </div>
  )
}

export default App

 