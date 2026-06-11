import NavBar from './components/navbar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import { ThemeProvider } from './context/ThemeContext'

const App = () => (
  <ThemeProvider>
    <NavBar />
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="skills"><Skills /></section>
    <section id="education"><Education /></section>
    <section id="experience"><Experience /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
    <Footer />
  </ThemeProvider>
)

export default App
