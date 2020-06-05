import React from 'react';
import './card-styles.css'

export const Card = (props) => {
    return(
        <div className = 'card-container'>
            <img alt = 'random' src={`https://randomuser.me/api/portraits/women/${props.model.id}.jpg`}/>
             <h2>{props.model.name}</h2>
             <p>userid {props.model.username}</p>

             <p>email {props.model.email}</p>
        </div>

    )
}