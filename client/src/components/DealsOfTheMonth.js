import React, { useEffect, useState } from "react";
import styles from "./DealsOfTheMonth.module.css";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import dealPhoto1 from "../images/dealPhoto1.png";
import dealPhoto2 from "../images/dealPhoto2.png";
import dealPhoto3 from "../images/dealPhoto3.png";

const DealsOfTheMonth = () => {
  // Функционал таймера
  const targetTime =
    new Date().getTime() +
    2 * 24 * 60 * 60 * 1000 +
    6 * 60 * 60 * 1000 +
    5 * 60 * 1000 +
    30 * 1000;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    const timeLeft =
      difference > 0
        ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  // Функционал слайдера
  const [slides, setSlides] = useState([
    { img: dealPhoto1, discount: "30%" },
    { img: dealPhoto2, discount: "40%" },
    { img: dealPhoto3, discount: "50%" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftBlock}>
        <div>
          <h1 className={styles.header}>Deals Of The Month</h1>
          <p className={styles.text}>
            Don’t miss out on this month’s hottest steals! <br />
            Limited-time prices on the styles you love — only while supplies
            last.
          </p>
          <NavLink to={SHOP_ROUTE} className={styles.buyNow}>
            Buy Now
          </NavLink>
        </div>
        <div>
          <h3 className={styles.timerHeader}>Hurry, Before It’s Too Late!</h3>
          <div className={styles.timerContainer}>
            <div className={styles.timerBlock}>
              <span className={styles.timerNumber}>{format(time.days)}</span>
              <span className={styles.timerSub}>Days</span>
            </div>
            <div className={styles.timerBlock}>
              <span className={styles.timerNumber}>{format(time.hours)}</span>
              <span className={styles.timerSub}>Hr</span>
            </div>
            <div className={styles.timerBlock}>
              <span className={styles.timerNumber}>{format(time.minutes)}</span>
              <span className={styles.timerSub}>Mins</span>
            </div>
            <div className={styles.timerBlock}>
              <span className={styles.timerNumber}>{format(time.seconds)}</span>
              <span className={styles.timerSub}>Sec</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrowLeft} onClick={prevSlide}>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99994 15L0.999938 8L7.99994 1"
              stroke="black"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles.arrowRight} onClick={nextSlide}>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00018 1L8.00018 8L1.00019 15"
              stroke="black"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.slidesContainer}
          style={{
            transform: `translateX(-${currentIndex * (101/slides.length)}%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.activeSlide : ""
              }`}
            >
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              <div className={styles.discountLabel}>
                <span>01 - Spring Sale</span>
                <br />
                <p>{slide.discount} OFF</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DealsOfTheMonth;
