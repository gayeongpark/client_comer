import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailedProduct from "../components/Products/DetailedProduct";

export default function Product() {
  return (
    <div>
      <Navbar />
      <DetailedProduct />
      <Footer />
    </div>
  );
}
