import React from "react";
import styles from "./NewsLetters.module.css";

const NewsLetter = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Subscribe Our Newsletter</h2>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name:"
            className={styles.inputName}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className={styles.inputEmail}
          />

          <button>
            <p>SEND</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
