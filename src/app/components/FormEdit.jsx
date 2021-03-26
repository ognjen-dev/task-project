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
    activeTodo.text = InputText;
    setisFormOpen(false);
    setactiveTodo(null);
    setInputText("");
  };
  return (
    <div className="shadow-sm bg-white rounded-xl w-full h-content flex flex-row justify-center">
      <div className="px-3 py-0 max-h-screen ">
        <div className="flex flex-col justify-between font-semibold items-baseline py-6 lg:px-6 px-3">
          <form action="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between items-between">
              <button
                onClick={submitTodoHandler}
                type="submit"
                className="text-lg px-4 py-1 border w-max border-gray-200 rounded-md hover:text-white hover:border-0 hover:bg-blue-500"
              >
                &#10003; Submit Edit
              </button>
              <button
                className="text-lg py-1 px-3 rounded-md border text-gray-300 border-gray-200 hover:text-gray-700 hover:border-0 hover:bg-gray-200"
                onClick={() => {
                  setactiveTodo(null);
                  setInputText("");
                }}
              >
                &#10006;
              </button>
            </div>
            <div>
              {activeTodo != null ? <h1 className="flex flex-row justify-center mb-4 mt-4">{activeTodo.text}</h1> : <h1>404</h1>}
              <input
                type="text"
                className="py-3 w-80 px-1 focus:outline-none text-md border border-gray-200 rounded-md"
                placeholder="Edit title"
                value={InputText}
                onChange={inputTextHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
