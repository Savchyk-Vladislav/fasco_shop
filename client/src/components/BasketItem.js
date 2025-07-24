import React, { useState } from "react";
import styles from "./BasketItem.module.css";
import { observer } from "mobx-react-lite";

const BasketItem = observer(({ item, onCountChange, onItemRemove }) => {
  const handleDecrement = () => {
    if (item.count > 1) onCountChange(item.id, item.count - 1);
  };

  const handleIncrement = () => {
    onCountChange(item.id, item.count + 1);
  };

  const handleRemove = () => {
    onItemRemove(item.id);
  };

  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.image}
        src={process.env.REACT_APP_API_URL + item.cloth.img}
        alt={item.cloth.name}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{item.cloth.name}</h3>
        <p className={styles.size}>Size: {item.size}</p>
        <p className={styles.price}>${item.cloth.price}</p>
        <div className={styles.count}>
          <button onClick={handleDecrement} className={styles.countBtn}>
            -
          </button>
          <span className={styles.countValue}>{item.count}</span>
          <button onClick={handleIncrement} className={styles.countBtn}>
            +
          </button>
        </div>
        <p className={styles.price}>
          Subtotal price: ${item.cloth.price * item.count}
        </p>
        <button className={styles.remove} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
});

export default BasketItem;
