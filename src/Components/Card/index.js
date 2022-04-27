import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container">
      <h2>{props.weather}</h2>
      <img className="image" src={props.src}></img>
      <p>{props.emoji}</p>
      <h1>{props.header}</h1>
    </div>
  );
};

export default Card;
