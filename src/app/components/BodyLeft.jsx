import React, { useContext } from "react";
import NavFilters from "app/components/NavFilters";
import List from "app/components/List";
import { InputContext } from "app/components/context";

const BodyLeft = () => {
  const context = useContext(InputContext);
  const {
    InputText,
    setInputText,
    setTodos,
    todos,
    isFormOpen,
    setisFormOpen,
  } = context;

  return (
    <div className="shadow-sm mb-5">
      <NavFilters />
      <div className=""></div>
      {todos.length > 0 ? <div className="border-t"><List /></div> : <div></div>}
    </div>
  );
};
export default BodyLeft;
