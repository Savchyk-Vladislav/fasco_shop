import React, { useState, useEffect, useContext } from "react";
import styles from "./ProductPage.module.css";
import paymentLogo from "../images/paymentLogo.png";
import { useParams } from "react-router-dom";
import { fetchOneCloth, fetchRating } from "../http/clothAPI";
import { createBasketItem } from "../http/clothAPI";
import { Context } from "../index";
import Spinner from "./Spinner";

const ProductPage = () => {
  const [clothItem, setCloth] = useState();
  const { cloth } = useContext(Context);
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60);

  const maxStars = 5;

  const sizes = ["M", "L", "XL", "XXL"];

  useEffect(() => {
    fetchOneCloth(id).then((data) => setCloth(data));
    fetchRating(id).then((data) => setRating(data));
  }, []);

  const decrease = () => {
    if (value > 1) setValue(value - 1);
  };

  const increase = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = String(Math.floor(seconds / (3600 * 24))).padStart(2, "0");
    const hours = String(Math.floor((seconds % (3600 * 24)) / 3600)).padStart(
      2,
      "0"
    );
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${days}:${hours}:${minutes}:${secs}`;
  };

  const addToCart = () => {
    try {
      createBasketItem(id, selectedSize, value).then(() =>
        cloth.setBasketItem(clothItem, selectedSize, value)
      );
      alert("Successful added!");
    } catch (e) {
      alert(e);
    }
  };

  if (!clothItem) return <Spinner />;

  return (
    <div className={styles.mainContainer}>
      <img
        src={process.env.REACT_APP_API_URL + clothItem.img}
        alt="ItemPhoto"
      />
      <div className={styles.details}>
        <h6>FASCO</h6>
        <h1>{clothItem.name}</h1>
        <div className={styles.rating}>
          {[...Array(maxStars)].map((_, index) => {
            if (index < Math.floor(clothItem.rating)) {
              return (
                <svg
                  key={index}
                  className={styles.star}
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.54532L9.54964 5.18699L7.49701 0.0302734L5.44439 5.18699L0 5.54532L4.1758 9.09101L2.80553 14.4696L7.49701 11.5041L12.1885 14.4696L10.8183 9.09101L15 5.54532Z"
                    fill="black"
                  />
                </svg>
              );
            } else if (
              index === Math.floor(clothItem.rating) &&
              clothItem.rating % 1 !== 0
            ) {
              return (
                <svg
                  key={index}
                  className={styles.star}
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id={`half-star-${index}`}
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop
                        offset={`${(clothItem.rating % 1) * 100}%`}
                        stopColor="black"
                      />
                      <stop
                        offset={`${(clothItem.rating % 1) * 100}%`}
                        stopColor="white"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M15 5.54532L9.54964 5.18699L7.49701 0.0302734L5.44439 5.18699L0 5.54532L4.1758 9.09101L2.80553 14.4696L7.49701 11.5041L12.1885 14.4696L10.8183 9.09101L15 5.54532Z"
                    fill={`url(#half-star-${index})`}
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              );
            } else {
              return (
                <svg
                  key={index}
                  className={styles.star}
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.5456L9.55274 5.18735L7.5 0.0305176L5.44726 5.18738L0 5.54563L4.17943 9.0885L2.80828 14.4697L7.5 11.5044L12.1917 14.4697L10.8206 9.08873L15 5.5456ZM7.5 10.4647L4.20516 12.5471L5.16688 8.77276L2.22155 6.28004L6.05859 6.028L7.5 2.40696L8.94141 6.02803L12.7829 6.28004L9.83306 8.77253L10.7948 12.5471L7.5 10.4647Z"
                    fill="black"
                  />
                </svg>
              );
            }
          })}
          <span className={styles.value}>({rating.totalRatings})</span>
        </div>
        <div className={styles.priceBlock}>
          <span className={styles.currentPrice}>
            {"$" + clothItem.price.toFixed(2)}
          </span>
          <span className={styles.oldPrice}>
            {"$" + (clothItem.price * 1.33).toFixed(2)}
          </span>
          <span className={styles.discount}>SAVE 33%</span>
        </div>
        <div className={styles.viewContainer}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.969855" clip-path="url(#clip0_6_72)">
              <path
                d="M19.7693 9.65383C17.8115 6.33154 14.1601 4.11108 10 4.11108C5.83821 4.11108 2.18766 6.3331 0.23078 9.65383C0.0796862 9.91022 0 10.2024 0 10.5C0 10.7976 0.0796862 11.0898 0.23078 11.3462C2.18859 14.6684 5.83995 16.8889 10 16.8889C14.1618 16.8889 17.8124 14.6668 19.7693 11.3461C19.9203 11.0897 20 10.7976 20 10.5C20 10.2024 19.9203 9.91021 19.7693 9.65383ZM10 15.2222C6.43904 15.2222 3.33019 13.3229 1.66668 10.5C3.19991 7.89813 5.96102 6.08088 9.17231 5.81223C9.51245 6.1624 9.72224 6.6399 9.72224 7.16664C9.72224 8.24053 8.85168 9.11108 7.77779 9.11108C6.70391 9.11108 5.83335 8.24053 5.83335 7.16664L5.83338 7.16518C5.47898 7.82785 5.27779 8.58483 5.27779 9.38886C5.27779 11.9969 7.392 14.1111 10 14.1111C12.608 14.1111 14.7222 11.9969 14.7222 9.38886C14.7222 8.3114 14.3611 7.31841 13.7537 6.52376C15.6842 7.32768 17.292 8.73282 18.3334 10.5C16.6699 13.3229 13.561 15.2222 10 15.2222Z"
                fill="black"
                stroke="black"
                stroke-width="0.0347222"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_72">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>24 people are viewing this right now</span>
        </div>
        <div className={styles.timerContainer}>
          <span className={styles.label}>Hurry up! Sale ends in:</span>
          <span className={styles.timer}>{formatTime(timeLeft)}</span>
        </div>
        <div className={styles.sizeContainer}>
          <p className={styles.sizeLabel}>
            <b>
              Size: <span>{selectedSize}</span>
            </b>
          </p>
          <div className={styles.sizeButtons}>
            {sizes.map((size) => (
              <button
                key={size}
                className={`${styles.sizeButton} ${
                  selectedSize === size ? styles.active : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.quantityContainer}>
          <h4>Quantity</h4>
          <div className={styles.quantity}>
            <div className={styles.counter}>
              <button onClick={decrease}>−</button>
              <input type="text" value={value} readOnly />
              <button onClick={increase}>+</button>
            </div>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_150)">
                <path
                  d="M8.75 8.5C8.8875 8.5 9 8.3875 9 8.25V7.75C9 7.6125 8.8875 7.5 8.75 7.5H1.25C1.1125 7.5 1 7.6125 1 7.75V8.25C1 8.3875 1.1125 8.5 1.25 8.5H8.75ZM19.75 14.5H19V11.1219C19 10.5969 18.7875 10.0812 18.4125 9.70937L15.7906 7.0875C15.4219 6.7125 14.9062 6.5 14.3781 6.5H13V4.95625C13 4.15312 12.3063 3.5 11.4563 3.5H3.54375C2.69375 3.5 2 4.15312 2 4.95625V5.5H0.25C0.1125 5.5 0 5.6125 0 5.75V6.25C0 6.3875 0.1125 6.5 0.25 6.5H7.75C7.8875 6.5 8 6.3875 8 6.25V5.75C8 5.6125 7.8875 5.5 7.75 5.5H3V4.95625C3 4.70312 3.24375 4.5 3.54375 4.5H11.4563C11.7563 4.5 12 4.70312 12 4.95625V14.5H6.4875C6.03125 13.8969 5.3125 13.5 4.5 13.5C3.93438 13.5 3.41875 13.6937 3 14.0125V11.5H2V16C2 17.3813 3.11875 18.5 4.5 18.5C5.88125 18.5 7 17.3813 7 16C7 15.8281 6.98125 15.6625 6.95 15.5H13.05C13.0156 15.6625 13 15.8281 13 16C13 17.3813 14.1187 18.5 15.5 18.5C16.8813 18.5 18 17.3813 18 16C18 15.8281 17.9813 15.6625 17.95 15.5H19.75C19.8875 15.5 20 15.3875 20 15.25V14.75C20 14.6125 19.8875 14.5 19.75 14.5ZM4.5 17.5C3.67188 17.5 3 16.8281 3 16C3 15.1719 3.67188 14.5 4.5 14.5C5.32812 14.5 6 15.1719 6 16C6 16.8281 5.32812 17.5 4.5 17.5ZM13 7.5H14.3781C14.6406 7.5 14.9 7.60625 15.0844 7.79375L17.7062 10.4156C17.7312 10.4406 17.7406 10.475 17.7625 10.5031H13V7.5ZM15.5 17.5C14.6719 17.5 14 16.8281 14 16C14 15.1719 14.6719 14.5 15.5 14.5C16.3281 14.5 17 15.1719 17 16C17 16.8281 16.3281 17.5 15.5 17.5ZM18 14.5H17.4875C17.0312 13.8969 16.3125 13.5 15.5 13.5C14.6875 13.5 13.9688 13.8969 13.5125 14.5H13V11.5H18V14.5ZM8 10.25V9.75C8 9.6125 7.8875 9.5 7.75 9.5H0.25C0.1125 9.5 0 9.6125 0 9.75V10.25C0 10.3875 0.1125 10.5 0.25 10.5H7.75C7.8875 10.5 8 10.3875 8 10.25Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.03125"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_150">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>
              <b>Estimated Delivery:</b> Jul 30 - Aug 03
            </p>
          </div>
          <div className={styles.infoItem}>
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_156)">
                <path
                  d="M17.9219 6.26875L16.3406 1.525C16.1375 0.9125 15.5656 0.5 14.9187 0.5H5.08125C4.43437 0.5 3.8625 0.9125 3.65937 1.525L2.07812 6.26875C2.02812 6.42188 2 6.58125 2 6.74375V15C2 15.8281 2.67188 16.5 3.5 16.5H16.5C17.3281 16.5 18 15.8281 18 15V6.74375C18 6.58125 17.975 6.42188 17.9219 6.26875ZM3 6.74375C3 6.69063 3.00937 6.6375 3.025 6.58437L4.60625 1.84063C4.675 1.6375 4.86562 1.5 5.08125 1.5H9.5V6.75H3V6.74375ZM17 15C17 15.275 16.775 15.5 16.5 15.5H3.5C3.225 15.5 3 15.275 3 15V7.75H17V15ZM17 6.75H10.5V1.5H14.9187C15.1344 1.5 15.325 1.6375 15.3938 1.84063L16.975 6.58437C16.9906 6.63438 17 6.6875 17 6.74375V6.75Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.03125"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_156">
                  <rect
                    width="20"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>
              <b>Free Shipping & Returns:</b> On all orders over $75
            </p>
          </div>
        </div>
        <div className={styles.paymentOptions}>
          <img src={paymentLogo} alt="paymentLogo" />
          <h5>Guarantee safe & secure checkout</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
