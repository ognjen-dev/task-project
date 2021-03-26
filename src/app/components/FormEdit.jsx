import React, { useContext } from "react";
import Advert from "app/components/Advert";
import "app/style.css";
import { InputContext } from "app/components/context";

const FormEdit = () => {
  const context = useContext(InputContext);

  const {
    InputText,
    setInputText,
    todos,
    setTodos,
    activeTodo,
    setactiveTodo,
    isFormOpen,
    setisFormOpen,
  } = context;
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    activeTodo.text = InputText
    setisFormOpen(false)
    setInputText("")
  };
  return (
    <div className="shadow-sm bg-white rounded-xl w-full min-h-screen z-negative">
      <div className="p-5 overflow-y overflow-x-hidden overflow-scroll max-h-screen ">
        <div className="flex flex-row justify-between font-semibold items-baseline py-6 lg:px-6 px-3">
          {activeTodo != null ? <h1>{activeTodo.text}</h1> : <h1>!error!</h1>}
          <form action="">
            <input
              type="text"
              className="py-3 px-1 focus:outline-none text-md"
              placeholder="Edit title"
              value={InputText}
              onChange={inputTextHandler}
            />
            <button
              onClick={submitTodoHandler}
              type="submit"
              className="text-lg px-1"
            >
              ✔️
            </button>
            <button
              className="text-lg px-1"
              onClick={() => {setactiveTodo(null)}}
            >
              Exit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
