import React from "react";
import styles from "./Offer.module.css";
import offerImg from "../images/offerPhoto.png";
import OfferPointLeft from "./OfferPointLeft";
import OfferPointRight from "./OfferPointRight";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const Offer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.offerImg}>
        <div className={styles.offerLeftBlock}>
          <img src={offerImg} alt="offerPhoto" />
          <OfferPointLeft
            text="Hugo Boss"
            style={{ top: "300px", left: "65px" }}
          />
          <OfferPointLeft
            text="Suspender"
            style={{ top: "130px", left: "105px" }}
          />
          <OfferPointRight
            text="Flat Cap"
            style={{ top: "20px", left: "440px" }}
          />
          <OfferPointRight
            text="Hugo Boss"
            style={{ top: "200px", left: "390px" }}
          />
          <OfferPointRight
            text="Santoni"
            style={{ top: "470px", left: "390px" }}
          />
        </div>
      </div>
      <div className={styles.offerTexts}>
        <h3>Women Collection</h3>
        <h1>Peaky Blinders</h1>
        <h2>DESCRIPTION</h2>
        <p>
          Tailored suits, flat caps, and razor-sharp attitude — channel <br />
          the iconic style of the Peaky Blinders. It’s more than fashion — it’s
          legacy, <br />
          danger, and defiance stitched into every detail. Dress like you own
          the streets.
        </p>
        <div className={styles.sizeContainer}>
          <span>Size:</span>
          <h6>M</h6>
        </div>
        <h4>$100.00</h4>
        <NavLink to={SHOP_ROUTE} className={styles.buyNow}>
          Buy Now
        </NavLink>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Offer;
