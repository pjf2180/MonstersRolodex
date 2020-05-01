import React from 'react'
import { MonsterCard } from '../monster-card/monster-card.component'
import './card-list.style.css'

export const CardList = props => {
    return <div className="card-list">
        {
            props.monsters.map((monster, idx) => 
            <MonsterCard key={idx} monster={monster}/>)
        }
    </div>
}