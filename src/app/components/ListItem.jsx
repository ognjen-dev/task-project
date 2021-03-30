import React, { useContext } from "react";
import { InputContext } from "app/components/context";

const ListItem = ({ text, todo, author, completed }) => {
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
    setactiveTodo(null);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            author: item.author,
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
    <div
      onClick={activateTodoHandler}
      className="cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-md mx-6 py-7 my-2 flex flex-row justify-between px-5 items-center"
    >
      <div className="flex flex-col ml-5 w-72 justify-center items-start">
        <p className="text-lg font-bold focus:outline-none">{text}</p>
        <p className="text-md font-regular lg:flex lg:flex-row flex flex-col">
          <p>{author}</p>
          <p className="ml-5 lg:block hidden">&bull;</p>
          <p className="mx-5">x months ago</p>
          <p className="lg:block hidden">&bull;</p>
          {completed === true ? (
            <p className="ml-5 font-semibold text-red-400">Completed</p>
          ) : (
            <p className="ml-5 font-semibold text-blue-400">Active</p>
          )}
        </p>
      </div>
      <div>
        <button
          className="focus:outline-none text-lg hover:opacity-60"
          onClick={(e) => {
            e.stopPropagation();
            completeHandler();
          }}
        >
          ✔️
        </button>
        <button
          className="focus:outline-none ml-5 text-lg hover:opacity-60"
          onClick={(e) => {
            e.stopPropagation();
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
