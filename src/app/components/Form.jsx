import React, { useContext } from "react";
import { InputContext } from "app/components/context";
import "../../App.css";

const Form = () => {
  const context = useContext(InputContext);
  const {
    InputText,
    setInputText,
    setTodos,
    todos,
    isFormOpen,
    setisFormOpen,
  } = context;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: InputText, completed: false, id: Math.random() * 1000 },
    ]);
    setisFormOpen(false);
    setInputText("");
  };

  return (
    <div className="z-20 absolute bg-gray-900 bg-opacity-60 min-h-screen w-full flex flex-col justify-center items-center">
      <div className="h-32 w-72 bg-white flex flex-col justify-center items-center">
        <p className="text-lg">
          Project title
        </p>
        <form className="bg-white rounded-lg border-gray-300 border">
          <input
            className="py-3 px-1 focus:outline-none text-md"
            placeholder="Title"
            value={InputText}
            type="text"
            onChange={inputTextHandler}
          />
          <button
            onClick={submitTodoHandler}
            type="submit"
            className="text-lg px-1"
          >
            ✔️
          </button>
          <button onClick={() => setisFormOpen(false)} className="text-lg px-1">
            ❌
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
