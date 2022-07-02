import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./ImageSlider.css";
import Slider from "react-slick";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaChevronLeft className="left-arrow" onClick={prev} />
      <FaChevronRight className="right-arrow" onClick={next} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className="slider-img" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
