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
    <div className="z-20 absolute bg-black bg-opacity-70 min-h-screen w-full flex flex-col justify-center items-center">
      <div className="h-52 w-80 pb-3 bg-white flex flex-col justify-center items-center">
        <p className="text-xl font-bold mb-5 text-gray-800">New Project</p>
        <form className="bg-white flex flex-col items-center justify-center">
          <input
            className="py-2 px-1 focus:outline-none rounded-md border-gray-300 border text-md"
            placeholder="Title"
            value={InputText}
            type="text"
            onChange={inputTextHandler}
          />
          <div className="mt-5">
            <button
              onClick={() => setisFormOpen(false)}
              className="text-md font-bold mr-2 lg:mr-5 px-5 py-2 bg-gray-200 text-gray-800 hover:text-gray-50 hover:border-0 hover:bg-gray-600 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={submitTodoHandler}
              type="submit"
              className="text-md font-bold px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
