import React, { useContext } from "react";
import Header from "app/components/Header";
import Body from "app/components/Body";
import InputProvider, { InputContext } from "app/components/context";
import Form from "app/components/Form";
import "../../App.css";

const MainPage = () => {
  const context = useContext(InputContext);
  const { isFormOpen, setisFormOpen } = context;
  return (
    <div>
      {isFormOpen === true ? <Form /> : null}
      <div className=""></div>
      <div className="z-10 relative">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default MainPage;
