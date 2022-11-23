import React from 'react'
import hero_grid from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className='Hero flex flex-col items-center pt-5'>
            <img src={hero_grid} className="hero-grid"/>
            <div className=' hero-content'>
                <h1 className='pt-7 pb-3'>Online Experience</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}