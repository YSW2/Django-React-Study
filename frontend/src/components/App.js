import React, { Component } from "react"; // React와 Component 모듈을 불러옴
import { createRoot } from "react-dom/client"; // render 함수를 불러옴
import HomePage from "./HomePage";

function App() {
  return (
    <div className="center">
      <HomePage />
    </div>
  );
}
export default App;

const appDiv = createRoot(document.getElementById("app"));
appDiv.render(<App />);
