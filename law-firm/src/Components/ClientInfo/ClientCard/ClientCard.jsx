import React from "react";
import styles from "./ClientCard.module.css";

const ClientCard = ({ data }) => {
  const { id, image, name, designation, description } = data;
  const inlineStyles = id % 2 === 0 ? { backgroundColor: "#2E2E2E" } : {};

  return (
    <>
      <div className={`${styles.wrapper}`} style={inlineStyles}>
        <div className={styles.imgContainer}>
          <img src={image} alt="client" />
        </div>

        <div className={styles.header}>
          <h4>{name}</h4>
          <p>{designation}</p>
        </div>

        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
