import React from 'react';
import './card-list-styles.css';
import {Card} from '../card-component/card-component';

export const CardList = (props) => {
    console.log(props)
    return (
        <div className = 'card-list'>
           {props.heroines.map(heroine => (
             <Card key = {heroine.id} heroine = {heroine} />
           ))}              
        </div>

    )
      
}