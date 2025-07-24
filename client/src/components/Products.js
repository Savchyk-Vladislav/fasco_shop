import React from "react";
import styles from "./Products.module.css";
import TypeBar from "./TypeBar";
import BrandBar from "./BrandBar";
import ClothList from "./ClothList";
import Pagination from "./Pagination";

const Products = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Fashion</h1>
        <span>
          Home{" "}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_2543)">
              <path
                d="M3.53812 1.14089L3.41383 1.26517C3.33146 1.34754 3.33146 1.4811 3.41383 1.56349L6.85023 4.99991L3.41383 8.43632C3.33146 8.5187 3.33146 8.65225 3.41383 8.73464L3.53812 8.85892C3.6205 8.94129 3.75405 8.94129 3.83642 8.85892L7.54631 5.14906C7.62868 5.06669 7.62868 4.93313 7.54631 4.85074L3.83642 1.14089C3.75405 1.0585 3.6205 1.0585 3.53812 1.14089Z"
                fill="black"
                stroke="black"
                stroke-width="0.0175781"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_2543">
                <rect
                  width="9"
                  height="9"
                  fill="white"
                  transform="translate(0.97998 0.5)"
                />
              </clipPath>
            </defs>
          </svg>{" "}
          Fashion
        </span>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.filters}>
          <h2>Filters</h2>
          <TypeBar />
          <BrandBar />
        </div>
        <div className={styles.listPagination}>
          <ClothList />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Products;
