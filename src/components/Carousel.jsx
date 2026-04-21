import React from 'react'
import { useState,useEffect } from 'react'
const Carousel = () => {
    const imageArr = ['https://storage.googleapis.com/website-production/uploads/2016/03/airbnb-marketing-gift-card.png',
        'https://www.optimizepress.com/wp-content/uploads/2023/11/elements-of-a-landing-page-hero.jpeg',
        'https://market-resized.envatousercontent.com/previews/files/634527604/preview/preview_00.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=2a8b6fcbb4db54d96ead144eb688245483ec6314ca557693826e0f3c40f56ef6'
    ]

    const [currentImg, setcurrentImg] = useState(0);

    useEffect(() => {
      let carouselInterval = setInterval(() => {
        setcurrentImg(prev => (prev + 1)%imageArr.length)
      }, 5000);
    
      return () => {
        clearInterval(carouselInterval)
      }
    }, [])
    
  return (
    <div className='bg-gray-100 rounded-3xl p-4 max-w-screen-xl mx-auto mt-15'>
      <div className='w-full h-125 overflow-hidden'>
        <div className='flex h-full transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${currentImg * 100}%)`}}>
            {imageArr.map((url, idx)=>{
                return <img key={idx} src={url} className='w-full h-full object-contain flex-shrink-0' />
            })}
        </div>
        </div>  
    </div>
  )
}

export default Carousel