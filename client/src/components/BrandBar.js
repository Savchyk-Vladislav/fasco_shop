import React, { useContext } from "react";
import { Context } from "../index";
import styles from "./TypeBar.module.css";
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {
  const { cloth } = useContext(Context);

  const handleClick = (brand) => {
    if (cloth.selectedBrand.id === brand.id) {
      cloth.setSelectedBrand({});
    } else {
      cloth.setSelectedBrand(brand);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Brands</h3>
      <div className={styles.types}>
        {cloth.brands.map((brand) => (
          <button
            key={brand.id}
            className={`${styles.typeOption} ${
              cloth.selectedBrand.id === brand.id ? styles.active : ""
            }`}
            onClick={() => handleClick(brand)}
          >
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  );
});

export default BrandBar;
