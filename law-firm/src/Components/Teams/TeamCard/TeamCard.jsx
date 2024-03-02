import React from "react";
import styles from "./TeamCard.module.css";

export default function TeamCard({ data }) {
  const { id, image, name, cases } = data;

  return (
    <>
      <div
        className={cases === 850 ? styles.yellowBorderDiv : styles.normalBorder}
      >
        <div className={styles.wrapper}>
          <div className={styles.imageDiv}>
            <img src={image} alt={name} />
          </div>
          <div className={styles.textDiv}>
            <h4>{name}</h4>
            <p>{cases} Cases</p>
          </div>
        </div>
      </div>
    </>
  );
}
