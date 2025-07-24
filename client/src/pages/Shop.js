import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchClothes, fetchTypes } from "../http/clothAPI";

const Shop = observer(() => {
  const { cloth } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => cloth.setTypes(data));
    fetchBrands().then((data) => cloth.setBrands(data));
    fetchClothes(null, null, 1, 4).then((data) => {
      cloth.setClothes(data.rows);
      cloth.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchClothes(cloth.selectedType.id, cloth.selectedBrand.id, cloth.page, cloth.limit).then((data) => {
      cloth.setClothes(data.rows);
      cloth.setTotalCount(data.count);
    });
  }, [cloth.page, cloth.selectedType, cloth.selectedBrand]);

  return (
    <div>
      <Navbar />
      <Products />
      <Offer />
      <Features />
      <Gallery />
      <Subscribe />
      <Footer />
    </div>
  );
});

export default Shop;
