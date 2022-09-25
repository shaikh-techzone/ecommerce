import { Carousel } from "antd";
import React from "react";
import img1 from "../../img/slider-1.jpg";
import img2 from "../../img/slider-2.jpg";
import img3 from "../../img/slider-3.jpg";
const contentStyle = {
  height: "450px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const Slider = () => {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img src={img1} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={img2} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={img3} alt="" style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
