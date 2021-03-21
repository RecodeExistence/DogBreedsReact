import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.dogBreeds.map((dog) => (
      <Card
        key={dog.id}
        dog={dog}
        url={dog.image.url}
        bred_for={dog.bred_for}
      />
    ))}
  </div>
);
