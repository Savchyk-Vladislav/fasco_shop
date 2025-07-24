import React, { useState } from "react";
import styles from "./NewArrivals.module.css";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import NACard from "./NACard.js";

const NewArrivals = () => {
  const categoryList = [
    "Men’s Fashion",
    "Women’s Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals",
  ];

  const [activeCategory, setActiveCategory] = useState("Women’s Fashion");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>New Arrivals</h1>
        <p>
          It’s time to reinvent your wardrobe with carefully selected new
          arrivals. <br />
          From bold statements to minimalist essentials — explore pieces that
          inspire confidence and elevate your everyday style. <br />
          Be the trendsetter, not the follower — find what speaks to you today.
        </p>
      </div>
      <div className={styles.categories}>
        {categoryList.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${styles.category} ${
              activeCategory === category ? styles.active : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.products}>
        <NACard />
        <NACard />
        <NACard />
        <NACard />
        <NACard />
        <NACard />
      </div>
      <NavLink to={SHOP_ROUTE} className={styles.viewMore}>
        View More
      </NavLink>
    </div>
  );
};

export default NewArrivals;
