import React from 'react'
//import image from '../assets/katie-zaferes.png'
//import star from '../assets/star.png'

export default function Card({image, rating, review, country, title, price, openSpots, location}) {
    
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className='cards flex flex-col px-2 relative'>
            
          {badgeText && <div className='sold-out'>{badgeText}</div>}
            <img src={image} className='card-img rounded-lg mt-10'/>
            
            <div className=' text-content flex flex-col'>

                <div className='flex items-center py-1'>
                    <img src='/img/star.png' className='star rounded-lg mr-2'/>

                    
                    <p>{rating}<span className='text-gray-400'>({review}) &#x2022; {country}</span></p>
                </div>

                
                <p className='pb-1'>{title}</p>

                
                <p className='font-bold'>From ${price} / person</p>
            </div> 
        </section>
    )
}