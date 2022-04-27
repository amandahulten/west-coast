import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.weather}</h2>
      <h1>{props.header}</h1>
      <img src={props.src} />
      <p>{props.emoji}</p>
    </div>
  );
};

export default Card;
