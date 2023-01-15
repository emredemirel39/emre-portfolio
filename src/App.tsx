import React, { useState } from "react";
import Header from "./components/Header";
import logo from "./logo.svg";

function App() {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement | HTMLElement, MouseEvent>
  ) => {
    console.log("");
  };

  return (
    <div className="App">
      <Header handleMouseMove={handleMouseMove} />
    </div>
  );
}

export default App;
