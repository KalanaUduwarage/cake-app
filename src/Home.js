import SimpleImageSlider from "react-simple-image-slider";

const Home = () => {
    const images = [
        { url: "/IMG/IMG1.jpg" },
        { url: "/IMG/IMG1.jpg" },
        { url: "/IMG/IMG1.jpg" },
        { url: "/IMG/IMG1.jpg" },
        { url: "/IMG/IMG1.jpg" },
        { url: "/IMG/IMG1.jpg" },
        { url: "/IMG/IMG1.jpg" },
      ];

    return ( 
        <div className = "home">
            <div className ="Slider">
                <SimpleImageSlider width={896} height={504} images={images} />
            </div>
        </div>
     );
}
 
export default Home;
