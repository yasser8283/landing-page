import React from 'react'
import { useState, useEffect } from 'react'

const LogoSwitch = () => {

    const logos = ['https://www.citypng.com/public/uploads/preview/hd-airbnb-symbol-logo-sign-icon-png-image-701751695125377fcceqslrgk.png',
        'https://cdn.freebiesupply.com/logos/large/2x/dropbox-1-logo-png-transparent.png',
        'https://cdn-icons-png.flaticon.com/512/732/732135.png',
        'https://w7.pngwing.com/pngs/256/867/png-transparent-zomato-logo-thumbnail.png',
        'https://e7.pngegg.com/pngimages/1007/388/png-clipart-duolingo-full-logo-tech-companies.png',
        'https://image.pngaaa.com/561/898561-middle.png', 
        'https://cdn.worldvectorlogo.com/logos/netflix-4.svg',
        'https://cdn.worldvectorlogo.com/logos/spotify-2.svg',
    ]

    const [logoIndex, setlogoIndex] = useState(0)
    const [visible, setvisible] = useState(true)


    useEffect(() => {
        let logoInterval = setInterval(() => {  //For every logo
            setvisible(false)
            setTimeout(() => {  //For transition
                setlogoIndex((prev) => (prev + 1) % logos.length)
                setvisible(true)
            }, 300);
        }, 2000);

        return () => {
            clearInterval(logoInterval)
        }
    }, [logoIndex])


    return (
        <div className='mt-20 w-full flex justify-center items-center'>
            <div>
                <img src={logos[logoIndex]} alt="" height="90" width="90" className={`transition-all duration-500 ease-in-out ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />

            </div>
        </div>
    )
}

export default LogoSwitch