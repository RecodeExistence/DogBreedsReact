import React from 'react'; 
import './card.style.css';


export const Card = props => (
    <div className="card-container">
        <h1>{props.dog.name}</h1>
        <img className="dogImg" alt='dogbreed' src={props.dog.image.url} align="center" height="180px" width="200px"/>
        <p><strong>Bred for:</strong> {props.dog.bred_for}</p>
    </div>
)