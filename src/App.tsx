import React, { useRef, useState } from "react";
import { navLinks, sliderContent } from "./constants";
import FullScreenSection from "./components/FullScreenSection";
import Header from "./components/Header";
import ScrollSign from "./components/ScrollSign";
import SkillsSlider from "./components/SkillsSlider";

function App() {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement | HTMLElement, MouseEvent>
  ) => {
    setMousePosition({ left: e.pageX, top: e.pageY });
    parallaxRef.current &&
      (parallaxRef.current.style.backgroundPositionX = `-${
        mousePosition.left * 0.3
      }px`);
    parallaxRef.current &&
      (parallaxRef.current.style.backgroundPositionY = `-${
        mousePosition.top * 0.3
      }px`);
  };

  return (
    <div
      ref={parallaxRef}
      style={{
        scrollBehavior: "smooth",
        backgroundImage: `url("https://images.hdqwalls.com/wallpapers/fluid-liquid-abstract-4k-44.jpg")`, // https://wallpapercave.com/wp/wp10533403.jpg / https://images.hdqwalls.com/wallpapers/fluid-liquid-abstract-4k-44.jpg https://wallpapercave.com/wp/wp10533403.jpg
        scrollSnapType: "y mandatory",
      }}
      className="App overflow-y-scroll h-screen font-serif text-gray-200 w-full snap-start bg-auto bg-repeat"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <Header navLinks={navLinks} handleMouseMove={handleMouseMove} />
      <FullScreenSection id="1">
        <h1 className="mb-6 lg:mb-12 text-4xl md:text-6xl lg:text-7xl text-center">
          {" "}
          Hello, It's Emre!
        </h1>
        <p className="text-center text-[#a0a3a8]">
          I am a passionate and dedicated frontend developer creating visually
          stunning and responsive websites and web apps.
          {mousePosition.left} {mousePosition.top}
        </p>
        <ScrollSign direction="down" />
      </FullScreenSection>
      <FullScreenSection id="2">
        <h4 className="mb-12 text-6xl sm:text-7xl text-center border-b-2 border-blue-500 border-xl">
          About Me
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          iure porro fugiat distinctio deserunt ea! Doloribus dolorem voluptates
          saepe fugiat aliquid?
        </p>
      </FullScreenSection>
      <FullScreenSection id="3">
        <h4 className="mb-12 text-6xl sm:text-7xl text-center">Skills</h4>
        <SkillsSlider height={320} sliderContent={sliderContent} />
      </FullScreenSection>
      <FullScreenSection id="4">
        <h4 className="mb-12 text-6xl sm:text-7xl text-center border-b-2 border-blue-500 border-xl">
          Projects
        </h4>
      </FullScreenSection>
      <FullScreenSection id="5">
        <h4 className="mb-12 text-6xl sm:text-7xl text-center">Contact</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          iure porro fugiat distinctio deserunt ea! Doloribus dolorem voluptates
          saepe fugiat aliquid?
        </p>
      </FullScreenSection>
    </div>
  );
}

export default App;
