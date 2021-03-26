import React, { useContext } from "react";
import { InputContext } from "app/components/context";

const ListItem = ({ text, todo }) => {
  const context = useContext(InputContext);
  const { InputText, setInputText, setTodos, todos } = context;

  const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
      setTodos(todos.map(item => {
          if(item.id === todo.id) {
              return {
                  ...item, completed: !item.completed
              }
          }
          return item
      }))
  }

  return (
    <div>
      <li>{text}</li>
      <button onClick={completeHandler}>✔️</button>
      <button onClick={deleteHandler}>❌</button>
    </div>
  );
};

export default ListItem;
