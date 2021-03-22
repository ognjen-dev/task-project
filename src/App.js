import React from "react";
import MainPage from "app/pages/MainPage";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 w-full h-full z-negative">
      <div className="">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
