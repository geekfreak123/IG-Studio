import React from "react";
import styles from "./ChooseUs.module.css";
import GiftImage from "../../Assets/GiftImage.svg";
import ChooseUsCard from "./ChooseUsCard/ChooseUsCard";

const data = [
  {
    id: 1,
    image: GiftImage,
    successRate: "98% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonText: "Read More",
  },
  {
    id: 2,
    image: GiftImage,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonText: "Read More",
  },
  {
    id: 3,
    image: GiftImage,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonText: "Read More",
  },
];

const ChooseUs = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Why Choose us?</h3>
        </div>
        <div className={styles.boxWrapper}>
          {data.map((cardItem) => (
            <ChooseUsCard data={cardItem} key={cardItem.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
