import React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import LogoSwitch from './components/LogoSwitch'
import Hero from './components/Hero'
import Cta from './components/Cta'
import Carousel from './components/Carousel'
import LogoSpread from './components/LogoSpread'
import Slider from './components/Slider'
import Reviews from './components/Reviews'
import EndHero from './components/EndHero'
import LogoMarquee from './components/LogoMarquee'
import Footer from './components/Footer'
import Pricing from './components/Pricing'

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/' element = {
          <>
        <LogoSwitch />
        <Hero />
        <Cta />
        <Carousel />
        <LogoSpread />
        <Slider />
        <Reviews />
        <EndHero />
        <Cta />
        <LogoMarquee />
        <Footer />
        
        </>
        } />
      </Routes>
    </div>
  )
}

export default App