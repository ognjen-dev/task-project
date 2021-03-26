import React, { useContext } from "react";
import Advert from "app/components/Advert";
import "app/style.css";
import { InputContext } from "app/components/context";

const FormEdit = () => {
  const context = useContext(InputContext);
  const { InputText, setInputText, todos, setTodos, activeTodo, setactiveTodo } = context;
  return (
    <div className="shadow-sm bg-white rounded-xl w-full min-h-screen z-negative">
      <div className="p-5 overflow-y overflow-x-hidden overflow-scroll max-h-screen ">
        <div className="flex flex-row justify-between font-semibold items-baseline py-6 lg:px-6 px-3">
          <p className="text-lg">Top Templates</p>
          <a
            href="/"
            className="text-gray-400 text-md font-semibold hover:text-blue-600"
          >
            See All&#10132;
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
