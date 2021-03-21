import React from "react";
import MainPage from "app/pages/MainPage";
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-gray-100 w-screen h-screen z-negative">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
