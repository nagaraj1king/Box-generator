import React from "react";
import styles from "./BoxContainer.module.css";
import Box from "../Box/Box";

// Box container holds all the boxes, Parent of all boxes

const BoxContainer = () => {
  return (
    <div className={styles.boxContainer}>
      <Box></Box>
    </div>
  );
};

export default BoxContainer;
