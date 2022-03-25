import "./App.css";
import AnimateSlide from "./components/AnimateSlide";
import data from "./data/slideReview.json";
import Carousel from "react-material-ui-carousel";
import Header from "./components/Header";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";

function App() {
  const sildeData = data.slideReview;

  return (
    <>
      <Header />
      <Carousel
        autoplay={true}
        NextIcon={<AiFillRightSquare />}
        PrevIcon={<AiFillLeftSquare />}
      >
        {sildeData.map((slide, index) => {
          return (
            <AnimateSlide
              key={index}
              name={slide.name}
              role={slide.role}
              image={slide.image}
              desc={slide.desc}
            />
          );
        })}
      </Carousel>
    </>
  );
}

export default App;
