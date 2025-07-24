import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import DealsOfTheMonth from "../components/DealsOfTheMonth";
import NewArrivals from "../components/NewArrivals";
import Offer from "../components/Offer";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <DealsOfTheMonth />
      <NewArrivals />
      <Offer />
      <Features />
      <Gallery />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
