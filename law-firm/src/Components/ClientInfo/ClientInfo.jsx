import React from "react";
import styles from "./ClientInfo.module.css";
import LeftArrowImage from "../../Assets/ClientInfo/LeftArrow.png";
import RightArrowImage from "../../Assets/ClientInfo/RightArrow.png";
import Client_1_Image from "../../Assets/ClientInfo/Client1.svg";
import Client_2_Image from "../../Assets/ClientInfo/Client2.svg";
import Client_3_Image from "../../Assets/ClientInfo/Client3.svg";
import ClientCard from "./ClientCard/ClientCard";

const data = [
  {
    id: 1,
    image: Client_1_Image,
    name: "Jane Cooper",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 2,
    image: Client_2_Image,
    name: "Devon Lane",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 3,
    image: Client_3_Image,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
];

export default function ClientInfo() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>What says our happy Clients</h3>
          <div className={styles.btnContainer}>
            <button className={styles.leftArrowDiv}>
              <img src={LeftArrowImage} alt="Left Arrow" />
            </button>
            <button className={styles.rightArrowDiv}>
              <img src={RightArrowImage} alt="Right Arrow" />
            </button>
          </div>
        </div>
        <div className={styles.clientWrapper}>
          {data.map((each) => (
            <ClientCard data={each} key={each.id} />
          ))}
        </div>
      </div>
    </>
  );
}
