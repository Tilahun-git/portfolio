import React from 'react'
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
      <Hero/>
      <About/>
      {/* <Services/> */}
      <Contact/>
      {/* <Footer/> */}
      
    </div>
  )
}

export default App
 