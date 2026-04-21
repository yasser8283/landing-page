import React from 'react'


const images = [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800',
    'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800',
    'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800',
    'https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800',
]
const Slider = () => {
    return (
        <div className='mt-70 overflow-hidden'>
            <h2 className=' text-2xl lg:text-5xl font-bold flex justify-center items-center mb-30'>Find multiple design patterns</h2>
            <div className='flex animate-slide'>
                {[...images, ...images].map((url, idx) => (
                    <img key={idx} src={url} alt="" className="w-75 h-150 mx-4 object-cover rounded-xl" />
                ))}
            </div>
        </div>
    )
}

export default Slider