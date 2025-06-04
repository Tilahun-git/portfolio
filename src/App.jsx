

import NavBar from './components/navbar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Services from './components/service/Services'
import Footer from './components/footer/Footer'

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

      <section id="services">
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

 