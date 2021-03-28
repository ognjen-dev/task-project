import React from "react";

const SelectDropdown = ({ selectPlaceholder, selectValue }) => {
  return (
    <div>
      <select
        className="lg:px-2 lg:py-1 font-semibold font-mono px-5 py-2 w-36 lg:w-24 bg-gray-50 text-gray-400 rounded-md"
        name="items"
        id="items"
      >
        <option value={selectValue}>{selectPlaceholder}</option>
      </select>
    </div>
  );
};

export default SelectDropdown;
