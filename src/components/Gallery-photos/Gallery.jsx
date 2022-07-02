import React, { useEffect, useState } from "react";
import "./Gallery.css";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="thumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? "act" : ""}
        />
      ))}
    </div>
  );
};

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState();
  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="gallery-image-grid" src={imgs[index]} />
      <FaChevronLeft className="l-arrow" onClick={prev} />
      <FaChevronRight className="r-arrow" onClick={next} />
      <div className="as">
        <Thumbnail arr={imgs} image={setIndex} index={index} />
      </div>
    </div>
  );
};

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h2>GALERIE</h2>
        <h1>PHOTOS</h1>
      </div>
      <div className="gallery-grid">
        <Slideshow
          className="sm"
          imgs={[
            "../../gallery-imgs/1.jpg",
            "../../gallery-imgs/2.jpg",
            "../../gallery-imgs/3.jpg",
            "../../gallery-imgs/4.jpg",
            "../../gallery-imgs/5.jpg",
            "../../gallery-imgs/6.jpg",
          ]}
        />
      </div>
      <button className="gallery-btn">Voir plus</button>
      <div className="white"></div>
    </div>
  );
}

export default Gallery;
