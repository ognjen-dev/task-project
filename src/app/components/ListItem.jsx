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
    <div className="bg-gray-50 rounded-md mx-6 py-7 my-2 flex flex-row justify-between px-5 items-center">
      <button className="text-lg font-bold ml-5 focus:outline-none" onClick={activateTodoHandler}>{text}</button>
      <div>
        <button className="text-lg hover:opacity-60" onClick={completeHandler}>✔️</button>
        <button className="ml-5 text-lg hover:opacity-60" onClick={deleteHandler}>❌</button>
      </div>
    </div>
  );
};

export default ListItem;
