import React from 'react'
import Navbar from './Navbar'
import PricingCards from './PricingCards'
import LogoMarquee from './LogoMarquee'
import Footer from './Footer'
const Pricing = () => {
  return (
    <div>
        <div className='mt-30 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl lg:text-7xl'>Design Like a Pro.</h1>
            <p className='text-sm lg:text-2xl mt-5'>Get full access to all apps and features- Cancel Anytime.</p>
        </div>
        <div>
            <PricingCards />
        </div>
        <div>
            <LogoMarquee />
        </div>
        <div>
            <Footer />
        </div>
    </div>

  )
}

export default Pricing