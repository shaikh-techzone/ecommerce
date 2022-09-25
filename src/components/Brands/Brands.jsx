import React from "react";
// import { Carousel } from "antd";
import brand1 from "../../img/brand-1.png";
import brand2 from "../../img/brand-2.png";
import brand3 from "../../img/brand-3.png";
import brand4 from "../../img/brand-4.png";
import brand5 from "../../img/brand-5.png";
import brand6 from "../../img/brand-6.png";

// const contentStyle = {
//   height: "160px",
//   lineHeight: "160px",
//   display: "flex",
//   textAlign: "center",
// };

const Brands = () => {
  return (
    <>
      <div class="brand">
        <div class="container">
          <div class="section-header">
            <h3>Our Brands</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              viverra at massa sit amet ultricies. Nullam consequat, mauris non
              interdum cursus
            </p>
          </div>
          <div class="brand-slider">
            <div class="brand-item">
              <img src={brand1} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand2} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand3} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand4} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand5} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
