import React from "react";
import styles from "./HomeHeader.module.css";
import leftHeaderImg from "../images/home_left_header_img.png";
import rightHeaderImg from "../images/home_right_header_img.png";
import topHeaderImg from "../images/home_top_header_img.png";
import bottomHeaderImg from "../images/home_bottom_header_img.png";
import chanelLogo from "../images/ChanelLogo.png";
import louisVuittonLogo from "../images/LouisVuittonLogo.png";
import pradaLogo from "../images/PradaLogo.png";
import calvinKleinLogo from "../images/CalvinKleinLogo.png";
import denimLogo from "../images/DenimLogo.png";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const HomeHeader = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.sideImgContainer}>
          <img src={leftHeaderImg} alt="leftHeaderImg" />
        </div>
        <div className={styles.mediumContainer}>
          <div className={styles.topImgContainer}>
            <img src={topHeaderImg} alt="topHeaderImg" />
          </div>
          <div className={styles.textHeader}>
            <h2 className={styles.ultimate}>ULTIMATE</h2>
            <h1 className={styles.sale}>SALE</h1>
            <h4 className={styles.collection}>NEW COLLECTION</h4>
            <NavLink to={SHOP_ROUTE} className={styles.shopNow}>
              SHOP NOW
            </NavLink>
          </div>
          <img
            src={bottomHeaderImg}
            alt="bottomHeaderImg"
            className={styles.bottomHeaderImg}
          />
        </div>
        <div className={styles.sideImgContainer}>
          <img src={rightHeaderImg} alt="rightHeaderImg" />
        </div>
      </div>
      <div className={styles.logoSlider}>
        <div className={styles.logoTrack}>
          <img src={chanelLogo} alt="ChanelLogo" />
          <img src={louisVuittonLogo} alt="louisVuittonLogo" />
          <img src={pradaLogo} alt="pradaLogo" />
          <img src={calvinKleinLogo} alt="calvinKleinLogo" />
          <img src={denimLogo} alt="denimLogo" />

          <img src={chanelLogo} alt="ChanelLogo" />
          <img src={louisVuittonLogo} alt="louisVuittonLogo" />
          <img src={pradaLogo} alt="pradaLogo" />
          <img src={calvinKleinLogo} alt="calvinKleinLogo" />
          <img src={denimLogo} alt="denimLogo" />

          <img src={chanelLogo} alt="ChanelLogo" />
          <img src={louisVuittonLogo} alt="louisVuittonLogo" />
          <img src={pradaLogo} alt="pradaLogo" />
          <img src={calvinKleinLogo} alt="calvinKleinLogo" />
          <img src={denimLogo} alt="denimLogo" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
