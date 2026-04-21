import { Library } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='p-10 mt-25 w-full bg-black grid grid-cols-4'>
            <div className=' flex flex-col col-span-2'>
                <Library color='white' size={45} />
                <p className='text-white font-bold'>Design better digital experiences with Library</p>
            </div>
            <div className='flex flex-col gap-5 text-white font-bold'>
                <p>Explore</p>
                <p>Glossary</p>
                <p>Plans</p>
                <p>Pricing</p>
                <p>Blogs</p>
                <p>Newsletter</p>
            </div>
            <div className='flex flex-col gap-5 text-white font-bold'>
                <p>Contact</p>
                <p>X(Twitter)</p>
                <p>Instagram</p>
                <p>Linkedin</p>
                <p>Blogs</p>
                <p>Newsletter</p>
            </div>
        </div>
    )
}

export default Footer