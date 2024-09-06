import React from "react";
import "./Home.css";

import Footer from "../Footer/Footer";
import Cartform from "../cartform/Cartform";

const Home = () => {
  return (
    <div>
      <div className="home_header">
        <div className="data">
          <div className="header_container">
            <h1>Cakes</h1>
            <p>
            "There’s no better way to celebrate than with cake."
         Gather friends and loved ones near,
           Let the cake be the centerpiece of cheer,
         A symbol of joy and special days,
        Celebrations are made with sweet arrays.
            </p>
            <button className="Shampoobtn">Cake Shop</button>
          </div>
        </div>
      </div>
      <Cartform />
      {/* <Content /> */}
      <Footer />
    </div>
  );
};

export default Home;
