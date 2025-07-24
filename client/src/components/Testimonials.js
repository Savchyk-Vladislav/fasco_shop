import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import customerReview1 from "../images/customerReview1.png";
import customerReview2 from "../images/customerReview2.png";
import customerReview3 from "../images/customerReview3.png";

const slides = [0, 1, 2];

const slidesInfo = [
  {
    image: customerReview1,
    text: `"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"`,
    name: "James K.",
    job: "Traveler",
  },
  {
    image: customerReview3,
    text: `"Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great."`,
    name: "Megen W.",
    job: "UI Designer",
  },
  {
    image: customerReview2,
    text: `"Items That I ordered were the best investment I ever made. I can't say enough about your quality service."`,
    name: "Suzan B.",
    job: "UI Designer",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const getSlideStyle = (index) => {
    const position = (index - activeIndex + slides.length) % slides.length;

    switch (position) {
      case 0:
        return `${styles.card} ${styles.active}`;
      case 1:
        return `${styles.card} ${styles.right}`;
      case slides.length - 1:
        return `${styles.card} ${styles.left}`;
      default:
        return styles.hidden;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>This Is What Our Customers Say</h1>
        <span>
          Real stories from real people. See why they love what we do.
        </span>
      </div>

      <div className={styles.slider}>
        {slidesInfo.map((slide, i) => (
          <div key={i} className={getSlideStyle(i)}>
            <div className={styles.slideContent}>
              <div className={styles.imageWrapper}>
                <img src={slide.image} alt={`review-${i}`} />
              </div>
              <div className={styles.slideTexts}>
                <p>{slide.text}</p>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                        fill="#FCA120"
                      />
                    </svg>
                  ))}
                </div>
                <div className={styles.blackLine}></div>
                <h1>{slide.name}</h1>
                <h3>{slide.job}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
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
        <button className={styles.arrowRight} onClick={handleNext}>
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
    </div>
  );
};

export default Testimonials;
