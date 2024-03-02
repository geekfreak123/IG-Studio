import React, { useState } from "react";
import styles from "./Accordion.module.css";
import ButtonIcon from "../../../Assets/ButtonIcon.png";

const Accordion = ({ data }) => {
  const { id, question, answer } = data;

  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordionView = () => {
    setOpenAccordion((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container} onClick={toggleAccordionView}>
        <div className={styles.textDiv}>
          <h3>{question}</h3>
        </div>
        <div className={styles.buttonDiv}>
          <img src={ButtonIcon} alt="Button Icon" />
        </div>
      </div>

      {openAccordion && (
        <div className={styles.answerDiv}>
          <p>{answer}</p>
        </div>
      )}
    </>
  );
};

export default Accordion;
