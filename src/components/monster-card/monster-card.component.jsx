import React from 'react'
import './monster-card.style.css'

export const MonsterCard = props => {
    return <div className="card-container">
        <img alt="Monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
}

