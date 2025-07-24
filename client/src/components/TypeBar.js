import React, { useContext } from "react";
import { Context } from "../index";
import styles from "./TypeBar.module.css";
import { observer } from "mobx-react-lite";

const TypeBar = observer(() => {
  const { cloth } = useContext(Context);

  const handleClick = (type) => {
    if (cloth.selectedType.id === type.id) {
      cloth.setSelectedType({});
    } else {
      cloth.setSelectedType(type);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Types</h3>
      <div className={styles.types}>
        {cloth.types.map((type) => (
          <button
            key={type.id}
            className={`${styles.typeOption} ${
              cloth.selectedType.id === type.id ? styles.active : ""
            }`}
            onClick={() => handleClick(type)}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
});

export default TypeBar;
