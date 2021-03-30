import React, { useContext } from "react";
import { InputContext } from "app/components/context";
import ListItem from 'app/components/ListItem'

const List = () => {
  const context = useContext(InputContext);
  const { InputText, setInputText, todos, setTodos } = context;
  return (
    <div className="">
      <ul className="pt-1 rounded-b-xl bg-white pb-1 mb-5">
        {todos.map((todo) => (
            <ListItem todo={todo} author={todo.author} text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
