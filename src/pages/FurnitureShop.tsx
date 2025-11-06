import React from "react";
import Header from "../component/Header";
import MainSection from "../component/MainSection";
import Footer from "../component/Footer";

const FurnitureShop: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default FurnitureShop;
