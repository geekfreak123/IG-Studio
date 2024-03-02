import React from "react";
import styles from "./Teams.module.css";
import person1_img from "../../Assets/Team Card/TeamMember1.png";
import person2_img from "../../Assets/Team Card/TeamMember2.png";
import person3_img from "../../Assets/Team Card/TeamMember3.png";
import person4_img from "../../Assets/Team Card/TeamMember4.png";
import person5_img from "../../Assets/Team Card/TeamMember5.png";
import person6_img from "../../Assets/Team Card/TeamMember6.png";
import TeamCard from "./TeamCard/TeamCard";

const teamsData = [
  {
    id: 1,
    image: person1_img,
    name: "Danial Def",
    cases: 301,
  },
  {
    id: 2,
    image: person2_img,
    name: "Sanfole",
    cases: 850,
  },
  {
    id: 3,
    image: person3_img,
    name: "Cesforila",
    cases: 470,
  },
  {
    id: 4,
    image: person4_img,
    name: "Colleen",
    cases: 180,
  },
  {
    id: 5,
    image: person5_img,
    name: "Haldone",
    cases: 212,
  },
  {
    id: 6,
    image: person6_img,
    name: "Nik Jeo",
    cases: 350,
  },
];

const Teams = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Our Team</h1>
        </div>

        <div className={styles.teamGridContainer}>
          {teamsData.map((person) => (
            <div className={styles.tile}>
              <TeamCard data={person} key={person.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
