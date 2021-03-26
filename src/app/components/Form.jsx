import React, { useContext } from "react";
import { InputContext } from "app/components/context";
import '../../App.css'

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
    <div className="z-20 absolute bg-gray-700 bg-opacity-30 h-screen w-screen flex flex-col justify-center items-center">
      <form className="bg-white">
        <input
          className="py-3 px-1 focus:outline-none text-md"
          placeholder="Enter a new task"
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
  );
};

export default Form;
