import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinnerContainer}>
        <div className={styles.loader}></div>
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
