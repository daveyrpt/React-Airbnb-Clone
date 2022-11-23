import React from 'react'
import airbnb from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <header className='pl-8 shadow-lg flex items-center rounded-t-md w-screen'>
            <img src={airbnb} className="airbnb-logo"/>
        </header>
    )
}