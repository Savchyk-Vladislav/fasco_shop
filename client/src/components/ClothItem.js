import React from "react";
import styles from "./ClothItem.module.css";
import { useNavigate } from "react-router-dom";
import { CLOTH_ROUTE } from "../utils/consts";

const ClothItem = ({ cloth }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <img
        src={process.env.REACT_APP_API_URL + cloth.img}
        alt="ClothImg"
        onClick={() => navigate(CLOTH_ROUTE + "/" + cloth.id)}
      />
      <h2>{cloth.name}</h2>
      <span>{"$" + cloth.price + ".00"}</span>
    </div>
  );
};

export default ClothItem;
