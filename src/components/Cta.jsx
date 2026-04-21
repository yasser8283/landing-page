import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
    return (
        <div className='mt-15 w-full flex justify-center items-center'>
            <div className='flex gap-5'>
                <button className='bg-black text-white p-3 rounded-full '>Join for free</button>
                <button className='cursor-pointer hover:bg-black hover:text-white  text-black border border-black p-3 rounded-full '><Link to='/pricing'>Explore plans</Link></button>
            </div>
        </div>
    )
}

export default Cta