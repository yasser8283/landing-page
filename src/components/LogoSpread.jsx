import React, { useState, useRef, useEffect } from "react";

const logos = ['https://www.citypng.com/public/uploads/preview/hd-airbnb-symbol-logo-sign-icon-png-image-701751695125377fcceqslrgk.png',
    'https://cdn.freebiesupply.com/logos/large/2x/dropbox-1-logo-png-transparent.png',
    'https://cdn-icons-png.flaticon.com/512/732/732135.png', 'https://w7.pngwing.com/pngs/256/867/png-transparent-zomato-logo-thumbnail.png',
    'https://e7.pngegg.com/pngimages/1007/388/png-clipart-duolingo-full-logo-tech-companies.png',
    'https://image.pngaaa.com/561/898561-middle.png',
    'https://cdn.worldvectorlogo.com/logos/netflix-4.svg',
    'https://cdn.worldvectorlogo.com/logos/spotify-2.svg']

const text = ['A growing Library of', '1000+ Apps', 'curated for everyone']
const textProperties = [
    { size: 'text-xl', weight: 'font-light' },
    { size: 'text-5xl', weight: 'font-bold' },
    { size: 'text-xl', weight: 'font-light' }
]
const angles = logos.map((_, idx) => {
    const baseAngle = (idx / logos.length) * 2 * Math.PI;
    return baseAngle + (Math.random() - 0.5) * 0.8;
})

const LogoSpread = () => {

    const [logoVisible, setlogoVisible] = useState(false)
    const [textIndex, settextIndex] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [visibleSet, setVisibleSet] = useState(new Set())

    const sectionRef = useRef(null)

    useEffect(() => {
        if(window.innerWidth < 768){
            setlogoVisible(true)
            setIsActive(true)
        }
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setlogoVisible(true)
                setIsActive(true)
            }
        }, { threshold: 0.6 });
        observer.observe(sectionRef.current)
    }, [])

    useEffect(() => {
        if (!isActive) return;
        setTimeout(() => {
            settextIndex([0, 1, 2]);
            [0, 1, 2].forEach((i) => {
                setTimeout(() => {
                    setVisibleSet(prev => new Set([...prev, i]))
                }, i * 600)
            })
        }, 500)
    }, [isActive])

    return (
        <div ref={sectionRef} className='h-125 mt-40 relative'>
            <div className='relative w-full h-full'>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {textIndex.map((elem, idx) => {
                        if (!textProperties[elem]) return null;
                        return <h2 className={`${textProperties[elem].size} ${textProperties[elem].weight} ${visibleSet.has(elem) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} key={idx}>{text[elem]}</h2>
                    })}
                </div>
                {logos.map((url, idx) => {
                    const isMobile = window.innerWidth < 768
                    const angle = angles[idx] || 0;
                    const finalX = Math.cos(angle) * (isMobile ? 170 : 600);
                    const finalY = Math.sin(angle) * (isMobile ? 190 : 300);

                    return (
                        <div
                            key={idx}
                            className={`
                                absolute top-1/2 left-1/2
                                transition-all duration-900 ease-out
                                ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                            `}
                            style={{
                                transitionDelay: `${idx * 150}ms`,
                                transform: logoVisible
                                    ? `translate(${finalX}px, ${finalY}px)`
                                    : "translate(-50%, -50%)"
                            }}
                        >
                            <div
                                className="animate-[float_3s_ease-in-out_infinite]"
                                style={{ animationDelay: `${idx * 0.3}s` }}
                            >
                                <img src={url} alt="" className='w-10 h-10 lg:w-20 lg:h-20' />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default React.memo(LogoSpread)