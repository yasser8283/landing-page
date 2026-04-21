import React from 'react'

const Reviews = () => {
    const reviews = [
    {
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        name: 'Sarah Johnson',
        review: 'This app completely changed how I manage my workflow. Absolutely love it!'
    },
    {
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        name: 'James Carter',
        review: 'Incredibly intuitive and powerful. Best tool I have used in years.'
    },
    {
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        name: 'Emily Davis',
        review: 'The design is beautiful and everything just works seamlessly together.'
    },
    {
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        name: 'Michael Brown',
        review: 'Saved me hours every week. I recommend this to everyone on my team.'
    },
    {
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
        name: 'Olivia Wilson',
        review: 'Simple, fast, and reliable. Exactly what I was looking for.'
    },
    {
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        name: 'Daniel Martinez',
        review: 'The customer support is amazing and the product keeps getting better.'
    },
    {
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
        name: 'Sophia Lee',
        review: 'I tried many apps but this one stands out. Highly recommended!'
    },
    {
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
        name: 'Chris Anderson',
        review: 'Game changer for productivity. Cannot imagine working without it now.'
    },
]
    return (
        <div className='mt-25'>
            <h1 className='w-full flex items-center justify-center text-2xl lg:text-3xl font-bold'>What our user's are saying</h1>
            <div className='ml-10 mt-10 grid lg:grid-cols-4 gap-5'>
                { reviews.map((elem,idx)=>{
                return <div key={idx} className='flex flex-col justify-center items-center w-75 h-100 rounded-2xl border border-gray-200'>
                    <img className='mt-3 h-30 w-30 rounded-full mb-10' src={elem.photo} alt="" />
                    <h1 className='flex justify-center items-center font-bold'>{elem.name}</h1>
                    <p className='p-5 italic'>"{elem.review}"</p>
                </div>
                })}
            </div>
        </div>
    )
}

export default Reviews