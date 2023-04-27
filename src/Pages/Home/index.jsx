import React from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Feature from "./component/Features";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Feature />
    </div>
  );
};

export default Home;
