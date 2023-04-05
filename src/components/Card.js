import React from 'react'
import starImg from '../images/star.png'
import KatieImg from '../images/katie-zaferes.png'


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
    return(
        <section className='card-section'>
            <div className='card'>
                <img className='card-img' src={require(`../images/${props.coverImg}`)}></img>
                {badgeText && <div className='card-badge'>{badgeText}</div>}
                {/* {props.openSpots===0 && <div className='card-badge'>SOLD OUT</div>} */}
                <div className='card-stats'>
                        <img className='card-star' src={starImg}></img>
                        <span>{props.stats.rating}</span>
                        <span className='gray'> ({props.stats.reviewCount}) . </span>
                        <span className='gray'>{props.location}</span>
                    <p className='card-title'>{props.title}</p>
                    <p className='card-price'><strong>From ${props.price}</strong>/person</p>
                </div>
            </div>    
        </section>
    )
}