import React from 'react';
import './card-styles.css'

export const Card = (props) => {
    return(
        <div className = 'card-container'>
            <img alt = 'random' src={`https://randomuser.me/api/portraits/women/${props.heroine.id}.jpg`}/>
             <h2>{props.heroine.employee_name}</h2>
             <p>Ranking {props.heroine.employee_salary}</p>
        </div>

    )
}