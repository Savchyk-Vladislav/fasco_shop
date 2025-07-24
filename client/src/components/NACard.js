import React, { useState } from "react";
import styles from "./NACard.module.css";
import NAPhoto1 from "../images/NAPhoto1.png";

const NACard = () => {
  return (
    <div className={styles.card}>
      <img src={NAPhoto1} alt="Card 1"></img>
      <div className={styles.texts}>
        <div className={styles.nameAndRaiting}>
          <div className={styles.nameBrand}>
            <h2>Shiny Dress</h2>
            <span>AI Karam</span>
          </div>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                  fill="#FCA120"
                />
              </svg>
            ))}
          </div>
        </div>
        <span>(4.1k) Customer Reviews</span>
        <div className={styles.priceCount}>
          <h1>$95.50</h1>
          <span>Almost Sold Out</span>
        </div>
      </div>
    </div>
  );
};

export default NACard;
