// importing relevant modules
import "./index.css";
import { ReactLenis, useLenis } from "lenis/react";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

// importing images
import imageOne from "./assets/imgs/marek-piwnicki-EvPIOKp3f98-unsplash.jpg";
import imageTwo from "./assets/imgs/tiago-ferreira-_Xv52Y0r47k-unsplash.jpg";
import imageThree from "./assets/imgs/three.jpg";
import imageFour from "./assets/imgs/four.jpg";
import imageFive from "./assets/imgs/one.jpg";
import imageSix from "./assets/imgs/two.jpg";
import imageSeven from "./assets/imgs/six.jpg";
import imageEight from "./assets/imgs/five.jpg";
import imageNine from "./assets/imgs/seven.jpg";

import fontStyle from "./assets/PPHatton-Medium.otf";

function App() {
  //creating smooth scroll using Lenis
  const lenis = useLenis(({ scroll }) => {});

  // adding reference to image elements
  const firstContainer = useRef();
  const secondContainer = useRef();
  const thirdContainer = useRef();
  const forthContainer = useRef();

  // creating animation for element
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=800px",
        scrub: true,
      },
    });

    timeline
      .from(firstContainer.current, {})
      .to(firstContainer.current, { transform: `translateY(-200px)` }, 0);

    const timelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=800px",
        scrub: true,
      },
    });

    timelineTwo
      .from(secondContainer.current, {})
      .to(secondContainer.current, { transform: `translateY(200px)` }, 0);

    const timelineThree = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=800px",
        scrub: true,
      },
    });

    timelineThree
      .from(thirdContainer.current, {})
      .to(thirdContainer.current, { transform: `translateY(-200px)` }, 0);

    const timelineFour = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=800px",
        scrub: true,
      },
    });

    timelineFour
      .from(forthContainer.current, {})
      .to(forthContainer.current, { transform: `translateY(200px)` }, 0);
  });

  return (
    <ReactLenis root>
      <div className="App">
        <header>
          <h3>LTD.</h3>

          <div className="links">
            <h3>WORKS</h3>
            <h3>EXHIBITION</h3>
            <h3>LOCATION</h3>
          </div>
        </header>
        <h1 style={{ fontFamily: fontStyle }}>
          Your time is limited, so don't waste it living someone else's life.
          Don't be trapped by dogma – which is living with the results of other
          people's thinking.
        </h1>

        <div className="mainContainer">
          <div className="imageContainer" ref={firstContainer}>
            <img src={imageOne} alt="" />

            <img src={imageTwo} alt="" />
          </div>

          <div className="imageContainer" ref={secondContainer}>
            <img src={imageSix} alt="" />

            <img src={imageFour} alt="" />
          </div>

          <div className="imageContainer" ref={thirdContainer}>
            <img src={imageFive} alt="" />

            <img src={imageSeven} alt="" />
          </div>

          <div className="imageContainer" ref={forthContainer}>
            <img src={imageNine} alt="" />

            <img src={imageThree} alt="" />
          </div>
        </div>

        <div className="space"></div>

        <footer>
          <div className="circle">
            <div className="innerCircle"></div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
