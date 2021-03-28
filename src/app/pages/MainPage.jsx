import React, { useContext, useEffect } from "react";
import Header from "app/components/Header";
import Body from "app/components/Body";
import InputProvider, { InputContext } from "app/components/context";
import Form from "app/components/Form";
import "../../App.css";

const MainPage = () => {
  const context = useContext(InputContext);
  const { isFormOpen, setisFormOpen, todos, setTodos } = context;

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
      console.log(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos()
  }, [])
  
  useEffect(() => {
    saveLocalTodos()
  }, [todos])
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
