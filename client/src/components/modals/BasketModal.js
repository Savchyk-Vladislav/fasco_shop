import React, { useContext } from "react";
import styles from "./BasketModal.module.css";
import { Context } from "../../index.js";
import BasketItem from "../BasketItem";
import { observer } from "mobx-react-lite";
import {
  removeBasketItem,
  updateBasketItemCount,
} from "../../http/clothAPI.js";
import { SHOP_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

const BasketModal = observer(({ isOpen, onClose }) => {
  const { cloth } = useContext(Context);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const hasItems = cloth.basketItems.length > 0;

  const totalPrice = hasItems
    ? cloth.basketItems.reduce(
        (acc, item) => acc + item.cloth.price * item.count,
        0
      )
    : 0;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.sidebar}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h1 className={styles.title}>Shopping Cart</h1>

        {hasItems ? (
          <>
            {cloth.basketItems.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                onCountChange={(id, newCount) => {
                  updateBasketItemCount(id, newCount).then(() => {
                    cloth.updateBasketItemCount(id, newCount);
                  });
                }}
                onItemRemove={(id) => {
                  removeBasketItem(id).then(() => {
                    cloth.removeBasketItemById(id);
                  });
                }}
              />
            ))}
            <div className={styles.total}>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className={styles.checkout}>Checkout</button>
          </>
        ) : (
          <div style={{ marginTop: 40, textAlign: "center", color: "#555" }}>
            <div
              style={{
                fontSize: 48,
                marginBottom: 16,
                color: "#bbb",
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              🛒
            </div>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: 24,
              }}
            >
              Your basket is empty
            </p>
            <button
              onClick={() => {
                navigate(SHOP_ROUTE);
                onClose();
              }}
              className={styles.checkout}
            >
              Go to Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
});


export default BasketModal;
