import React from "react";
import Navbar from "../components/Navbar";
import DealsOfTheMonth from "../components/DealsOfTheMonth";
import Offer from "../components/Offer";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductPage";

const ClothPage = () => {
  return (
    <div>
      <Navbar />
      <ProductPage />
      <Offer />
      <Features />
      <DealsOfTheMonth />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ClothPage;
