import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import dataBase from './data'

export default function App() {

  const importedDatabase = dataBase.map( data => {
    return <Card image = {data.coverImg} 
                 rating = {data.stats.rating}
                 review = {data.stats.reviewCount}
                 country = {data.location}
                 title = {data.title}
                 price = {data.price}
                 openSpots = {data.openSpots}
                 location = {data.location}
            />
  })

  console.log(importedDatabase)


  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='card-stack flex flex-row flex-wrap justify-center w-1/2 mx-auto'>
        {importedDatabase}
      </section>
      
    </div>
  )
}

/*
<Card
image = '../public/img/katie-zaferes.png'
rating = "5.0"
review = {6}
country = "USA"
title = "Life lessons with Katie Zaferes"
price = {136}
/>
*/