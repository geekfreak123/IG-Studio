import React from "react";
import styles from "./ChooseUsCard.module.css";

export default function ChooseUsCard({ data }) {
  const { id, image, successRate, description, buttonText } = data;

  return (
    <>
      <div className={id % 2 !== 0 ? styles.wrapper : styles.wrapper2}>
        <div className={styles.imgWrapper}>
          <img src={image} alt="Gift Icon" />
        </div>

        <h5>{successRate}</h5>
        <p>{description}</p>

        <button className={styles.btnContainer}>{buttonText}</button>
      </div>
    </>
  );
}
