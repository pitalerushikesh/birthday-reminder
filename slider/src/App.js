import "./App.css";
import AnimateSlide from "./components/AnimateSlide";
import data from "./data/slideReview.json";
import Carousel from "react-material-ui-carousel";
import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  const sildeData = data.slideReview;

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Carousel
          indicators={false}
          animation="slide"
          navButtonsAlwaysVisible={true}
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
      </Container>
    </>
  );
}

export default App;
