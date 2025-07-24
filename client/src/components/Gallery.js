import React from "react";
import styles from "./Gallery.module.css";
import galleryPhoto1 from "../images/galleryPhoto1.png";
import galleryPhoto2 from "../images/galleryPhoto2.png";
import galleryPhoto3 from "../images/galleryPhoto3.png";
import galleryPhoto4 from "../images/galleryPhoto4.png";
import galleryPhoto5 from "../images/galleryPhoto5.png";
import galleryPhoto6 from "../images/galleryPhoto6.png";
import galleryPhoto7 from "../images/galleryPhoto7.png";

const Gallery = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Follow Us On Instagram</h1>
        <p>
          Discover our world through moments, captured in color, light, and
          feeling. <br />
          Follow us for daily inspiration and stories told one post at a time.
        </p>
      </div>
      <div className={styles.images}>
        <img src={galleryPhoto1} alt="galleryPhoto1" />
        <img src={galleryPhoto2} alt="galleryPhoto2" />
        <img src={galleryPhoto3} alt="galleryPhoto3" />
        <img src={galleryPhoto4} alt="galleryPhoto4" />
        <img src={galleryPhoto5} alt="galleryPhoto5" />
        <img src={galleryPhoto6} alt="galleryPhoto6" />
        <img src={galleryPhoto7} alt="galleryPhoto7" />
      </div>
    </div>
  );
};

export default Gallery;
