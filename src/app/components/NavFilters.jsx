import React, { useState, useContext } from "react";
import SearchInput from "app/components/SearchInput";
import Button from "app/components/Button";
import Form from "app/components/Form";
import SelectDropdown from "app/components/SelectDropdown";
import { InputContext } from "app/components/context";

const NavFilters = () => {
  const context = useContext(InputContext);
  const {
    isFormOpen,
    setisFormOpen,
    setInputText,
    InputText,
    todos,
    setTodos,
  } = context;

  const handleFormBool = () => {
    setisFormOpen((prevState) => (prevState = false));
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div
      className={`rounded-t-xl bg-white ${
        todos.length < 0 ? `rounded-b-xl` : `rounded-b-none`
      }`}
    >
      <div className="flex flex-row justify-between items-center py-8 lg:px-6 px-3">
        <div className="lg:block hidden max-h-14">
          <button
            onClick={() => setisFormOpen(true)}
            className={`focus:outline-none bg-blue-500 hover:bg-blue-600 text-white text-md rounded-md px-5 py-2 font-bold font-mono`}
          >
            + Add project
          </button>
        </div>
        <div className="lg:hidden ">
          <button
            onClick={() => setisFormOpen(true)}
            className={`focus:outline-none bg-blue-500 hover:bg-blue-600 text-white text-md rounded-md px-5 py-3 font-bold font-mono`}
          >
            + Add project
          </button>
        </div>
        <SearchInput />
      </div>
      {/* red ispod */}
      <div className="">
        <div>
          <p className="ml-6  mb-8 font-bold font-mono text-lg lg:hidden">
            Recent
          </p>
        </div>
        <div className="flex flex-row items-center justify-between border-gray-100 pb-8">
          <p className="font-bold font-mono text-md lg:block hidden ml-12">
            Recent
          </p>
          <div className="flex flex-row justify-center ml-5 lg:mr-7">
            <div className="mr-7">
              <SelectDropdown
                selectPlaceholder="By Votes"
                selectValue="by value"
              />
            </div>
            <div className="">
              <SelectDropdown
                selectPlaceholder="By Value"
                selectValue="by value"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFilters;
