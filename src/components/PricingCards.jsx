import React from 'react'
import LogoMarquee from './LogoMarquee'
import Footer from './Footer'

const PricingCards = () => {
    return (
        <div>
            <div className='mt-10 grid gap-5 lg:grid-cols-2 place-items-center'>
                <div className='p-10 w-90  lg:w-125 lg:h-135 rounded-2xl bg-black text-white'>
                    <h1 className='font-bold text-xl'>Pro</h1>
                    <p className='mt-2'>For Individuals</p>
                    <p className='mt-3'><span className='text-6xl font-bold'>$10</span>/mo.</p>
                    <div className=' mt-3 flex justify-center items-center'>
                        <button className='bg-white w-90 h-15 rounded-full text-black'>Get Started</button>
                    </div>
                    <div className='mt-10 font-bold'>
                        <ul className='flex flex-col gap-2'>
                            <li>Access all apps & sites</li>
                            <li>Browse flows</li>
                            <li>See animations</li>
                            <li>Unlimited collections</li>
                            <li>Hide screen footers</li>
                            <li>Download multiple screens</li>
                            <li>App history</li>
                        </ul>
                    </div>
                </div>
                <div className='p-10 w-90  lg:w-125 lg:h-135 rounded-2xl bg-white border border-black'>
                    <h1 className='font-bold text-xl'>Teams</h1>
                    <p className='mt-2'>For Teams & Agencies</p>
                    <p className='mt-3'><span className='text-6xl font-bold'>$12</span>/mo.</p>
                    <div className=' mt-3 flex justify-center items-center'>
                        <button className='bg-black w-90 h-15 rounded-full text-white'>Get Started</button>
                    </div>
                    <div className='mt-10 font-bold'>
                        <ul className='flex flex-col gap-2'>
                            <li>Access all apps & sites</li>
                            <li>Browse flows</li>
                            <li>See animations</li>
                            <li>Unlimited collections</li>
                            <li>Hide screen footers</li>
                            <li>Download multiple screens</li>
                            <li>App history</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-20 flex justify-center items-center'>
                <h2 className='text-sm lg:text-3xl font-bold'>Explore different products and designs with Library.</h2>
            </div>
        </div>
    )
}

export default PricingCards