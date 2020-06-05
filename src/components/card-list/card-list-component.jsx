import React from 'react';
import './card-list-styles.css';
import {Card} from '../card-component/card-component';

export const CardList = (props) => {
    return (
        <div className = 'card-list'>
           {props.models.map(model => (
             <Card key = {model.id} model = {model} />
           ))}              
        </div>

    )
      
}