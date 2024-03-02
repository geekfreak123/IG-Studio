import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import Icon1 from "../../Assets/Icon1.png";
import Icon2 from "../../Assets/Icon2.png";
import Icon3 from "../../Assets/Icon3.png";
import Icon4 from "../../Assets/Icon4.png";

const midDivItemsArr = ["Home", "Attorneys", "Practice Areas", "About Us"];
const imageIconArr = [Icon1, Icon2, Icon3, Icon4];

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.upperContainer}>
            <div className={styles.logoDiv}>
              <Logo />
            </div>
            <div className={styles.midDiv}>
              <ul>
                {midDivItemsArr.map((ele, idx) => (
                  <li key={idx}>
                    <p>{ele}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.IconDiv}>
              {imageIconArr.map((icon, index) => {
                return <img key={index} src={icon} alt={`Icon${index + 1}`} />;
              })}
            </div>
          </div>

          <div className={styles.lowerContainer}>
            <p>© 2020 Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
