import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button.js";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
