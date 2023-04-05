import React from 'react'
import heroImg from '../images/photo-grid.png'


export default function Hero(){
    return(
        <div className='hero-container'>
            <img src={heroImg}></img>
            <div className='hero-content'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}