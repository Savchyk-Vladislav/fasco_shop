import React from "react";
import styles from "./OfferPointLeft.module.css";

const OfferPointLeft = ({ text = "Brand Name", style = {} }) => {
  return (
    <div className={styles.offerPointLeft} style={style}>
      <div className={styles.point}>
        <svg
          width="141"
          height="21"
          viewBox="0 0 141 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.pointLine}
        >
          <path d="M141 1H20.5L1 20.5" stroke="black" />
        </svg>

        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.5"
            cy="10.5"
            r="10"
            transform="matrix(-1 0 0 1 21.5 0)"
            fill="white"
            fillOpacity="0.63"
            stroke="black"
          />
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default OfferPointLeft;
