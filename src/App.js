import React from "react";
import MainPage from "app/pages/MainPage";
import "./App.css";
import InputProvider, { InputContext } from "app/components/context";

function App() {
  return (
    <InputProvider>
      <div className="page">
        <MainPage />
      </div>
    </InputProvider>
  );
}
// bring back regular bg b4 pushing code
export default App;
