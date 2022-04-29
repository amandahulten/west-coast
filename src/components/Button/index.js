import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={styles.button}>
        {props.message}
      </button>
    </div>
  );
};

export default Button;
