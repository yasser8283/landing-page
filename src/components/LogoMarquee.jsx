import React from 'react'

const LogoMarquee = () => {
    const logos = [
        'https://cdn.worldvectorlogo.com/logos/netflix-4.svg',
        'https://cdn.worldvectorlogo.com/logos/spotify-2.svg',
        'https://www.citypng.com/public/uploads/preview/hd-airbnb-symbol-logo-sign-icon-png-image-701751695125377fcceqslrgk.png',
        'https://cdn.freebiesupply.com/logos/large/2x/dropbox-1-logo-png-transparent.png',
        'https://cdn-icons-png.flaticon.com/512/732/732135.png',
        'https://w7.pngwing.com/pngs/256/867/png-transparent-zomato-logo-thumbnail.png',
        'https://e7.pngegg.com/pngimages/1007/388/png-clipart-duolingo-full-logo-tech-companies.png',
        'https://image.pngaaa.com/561/898561-middle.png',
        'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',

    ]
    return (
        <div className='mt-30 overflow-hidden'>
            <div className='flex animate-marquee'>
                {[...logos, ...logos].map((url, idx) => (
                    <img key={idx} src={url} alt="" className="w-16 h-16 mx-8 object-contain" />
                ))}
            </div>
        </div>
    )
}

export default LogoMarquee