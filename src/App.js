import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";
import Branche from "./components/Branche/Branche";
import Why from "./components/Why/Why";
import Npd from "./components/Npd/Npd";
import Gallery from "./components/Gallery-photos/Gallery";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <div className="App">
      <Navbar />
      <ImageSlider slides={SliderData} />
      <Branche />
      <hr />
      {/* <Blog /> */}
      <Why />
      <Npd />
      <Gallery />
      <FaArrowCircleUp
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
