import React from "react";
import styles from "./Subscribe.module.css";
import subscribeImg1 from "../images/subscribeImg1.png";
import subscribeImg2 from "../images/subscribeImg2.png";

const Subscribe = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={subscribeImg1} alt="subscribeImg1" />
      <div className={styles.texts}>
        <h1>Subscribe To Our Newsletter</h1>
        <p>
          Stay in the loop with our latest updates, travel tips, and exclusive
          offers. Join our newsletter and never miss a beat.
        </p>
        <form>
          <input type="email" placeholder="michael@ymail.com"></input>
          <button className={styles.subscribe}>Subscribe Now</button>
        </form>
      </div>
      <img src={subscribeImg2} alt="subscribeImg2" />
    </div>
  );
};

export default Subscribe;
