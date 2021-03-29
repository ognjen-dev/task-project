import React, { useContext } from "react";
import { InputContext } from "app/components/context";

const ListItem = ({ text, todo }) => {
  const context = useContext(InputContext);
  const {
    InputText,
    setInputText,
    setTodos,
    todos,
    activeTodo,
    setactiveTodo,
  } = context;

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    setactiveTodo(null)
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const activateTodoHandler = () => {
    setactiveTodo(todo);
  };

  return (
    <div onClick={activateTodoHandler} className="cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-md mx-6 py-7 my-2 flex flex-row justify-between px-5 items-center">
      <p
        className="text-lg font-bold ml-5 focus:outline-none"
      >
        {text}
      </p>
      <div>
        <button
          className="focus:outline-none text-lg hover:opacity-60"
          onClick={(e) => {
            e.stopPropagation()
            completeHandler();
          }}
        >
          ✔️
        </button>
        <button
          className="focus:outline-none ml-5 text-lg hover:opacity-60"
          onClick={(e) => {
            e.stopPropagation()
            deleteHandler();
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ListItem;
