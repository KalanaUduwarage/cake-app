import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import img1 from "./IMG/IMG1.jpg";
import img2 from "./IMG/IMG2.jpg";
import img3 from "./IMG/IMG3.jpg";
import img4 from "./IMG/IMG4.jpg";
import img5 from "./IMG/IMG5.jpg";
import img6 from "./IMG/IMG6.jpg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const images = [img1, img2, img3, img4, img5, img6];
const Home = () => {
  return (
    <div className="home">
      <div className="Slider">
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          height="50%"
        >
          {images.map((image) => {
            return (
              <Image
                draggable={false}
                style={{ width: "100%", height: "50%" }}
                src={image}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
