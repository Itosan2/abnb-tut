import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'


export default function App() {
  
  const cards=data.map(e=>{
    return(
      <Card
        key={e.id}
        {...e}
      />
    )
  })

  return(
    <div className='container'>
      <NavBar/>
      <Hero/>
      <section className='card-list'>{cards}</section>
    </div> 

  )
}

{/* <section className='card-list'>{cards}</section>
{/* 
// <Card
        // key={e.id}

        // spread object as props - replace item(e)
        // {...e}
        
        //-- replace method (1) --
        // item={e} 

        //-- Method (1) --
        // img={e.coverImg}
        // rating={e.stats.rating}
        // reviewCount={e.stats.reviewCount}
        // title={e.title}
        // price={e.price}
        // location={e.location}
        // openSpots={e.openSpots}
    // /> */}

