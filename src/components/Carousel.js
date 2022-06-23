import React, { useState } from "react";
import "../styles/carousel.css";
import { images } from "../Helper/CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].image})` }}
      >
        <div
          className="left"
          onClick={() => {
           currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <AiOutlineLeft style={35}/>
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
           currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}
