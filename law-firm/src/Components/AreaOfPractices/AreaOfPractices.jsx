import React from "react";
import styles from "./AreaOfPractices.module.css";
import { Box, Grid } from "@mui/material";

// Importing all the images required
import image1 from "../../Assets/AreaOfPractices/Image1.png";
import image2 from "../../Assets/AreaOfPractices/Image2.png";
import image3 from "../../Assets/AreaOfPractices/Image3.png";
import image4 from "../../Assets/AreaOfPractices/Image4.png";
import image5 from "../../Assets/AreaOfPractices/Image5.png";
import image6 from "../../Assets/AreaOfPractices/Image6.png";

const AreaOfPractices = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Area of Practices</h3>
      </div>
      <Box className={styles.gridContainer}>
        <Grid container spacing={2} className={styles.gridDiv}>
          <Grid item xs={6} md={8} className={styles.grid}>
            <img src={image1} alt="grid-pic" />
            <p className={styles.largeImage}>BUSINESS LAW</p>
          </Grid>

          <Grid item xs={6} md={4} className={styles.grid}>
            <img src={image2} alt="grid-pic" />
            <p className={styles.smallImage}>PARTNERSHIP LAW</p>
          </Grid>

          <Grid item xs={6} md={4} className={styles.grid}>
            <img src={image3} alt="grid-pic" />
            <p className={styles.smallImage}>REAL ESTATE LAW</p>
          </Grid>

          <Grid item xs={6} md={8} className={styles.grid}>
            <img src={image4} alt="grid-pic" />
            <p className={styles.largeImage}>BUSINESS LAW</p>
          </Grid>

          <Grid item xs={6} md={8} className={styles.grid}>
            <img src={image5} alt="grid-pic" />
            <p className={styles.largeImage}>LANDLORD DISPUTES</p>
          </Grid>

          <Grid item xs={6} md={4} className={styles.grid}>
            <img src={image6} alt="grid-pic" />
            <p className={styles.smallImage}>ELDER ABUSE</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AreaOfPractices;
