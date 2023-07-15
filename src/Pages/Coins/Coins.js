import React from "react";
import Banner from "./Banner";
import TableOfCoins from "./TableOfCoins";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const Coins = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <TableOfCoins />
      <Footer />
    </div>
  );
};

export default Coins;
