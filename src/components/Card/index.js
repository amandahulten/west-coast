import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h2>{props.weather}°C</h2>
        <h1>{props.header}</h1>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};

export default Card;
