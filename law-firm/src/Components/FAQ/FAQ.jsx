import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "./Accordion/Accordion";

const data = [
  {
    id: 1,
    question: "How much is my case worth?",
    answer:
      "It depends on which category you fall in. It starts from roughly 5000 US Dollars.",
  },
  {
    id: 2,
    question: "What should I do right after car accidect",
    answer: "No matter whose mistake was it, immediately call the police.",
  },
  {
    id: 3,
    question: "Are charges for divorce lawyers high?",
    answer:
      "Not generally. It depends on how long is it taking and how critical yur case is.",
  },
];

const FAQSection = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>FAQ</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
          <div className={styles.rightContainer}>
            <h5>Do I need a personal injury report?</h5>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>

            {data.map((ele) => (
              <>
                <div className={styles.partitionHorizontal}></div>
                <Accordion data={ele} key={ele.id} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
