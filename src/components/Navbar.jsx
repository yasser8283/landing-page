import React from 'react'
import { useState } from 'react'
import { Library, Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className='flex justify-center w-full'>
            <div className='flex flex-col w-110 px-3 py-3 lg:w-160 bg-gray-200 mt-10 lg:px-5 lg:py-5 rounded-3xl lg:rounded-full'>
                {/* Main row */}
                <div className='flex items-center justify-between h-14'>
                    <div className='flex gap-2'>
                        <Library strokeWidth={3} />
                        <h2 className='cursor-pointer uppercase tracking-wider'>
                            <Link to='/'>Library</Link>
                        </h2>
                    </div>
                    <button className='lg:hidden' onClick={() => setisOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    {/* Desktop */}
                    <ul className='hidden cursor-pointer lg:flex font-semibold gap-5 flex-nowrap items-center'>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li>Log In</li>
                        <li><button className='bg-black text-white p-2 rounded-full'>Join for free</button></li>
                    </ul>
                </div>
                {/* Mobile dropdown */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='flex flex-col cursor-pointer font-semibold gap-5 py-4 px-2'>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li>Log In</li>
                        <li><button className='bg-black text-white p-2 rounded-full'>Join for free</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar