import React, { useState } from "react";
import "../styles/gallery.css";
import Carousel from "../components/Carousel";
export default function Gallery() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="galleryContainer">
      <h1 className="galleryTitle">Gallery</h1>
      <Carousel />
    </div>
  );
}