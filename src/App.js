import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";
import Branche from "./components/Branche/Branche";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider slides={SliderData} />
      <Branche />
      {/* <Blog /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
