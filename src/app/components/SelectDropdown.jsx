import React from "react";

const SelectDropdown = ({ selectPlaceholder, selectValue }) => {
  return (
    <div>
      <select
        className="px-2 py-1 font-semibold font-mono bg-gray-50 text-gray-400 rounded-md"
        name="items"
        id="items"
      >
        <option value={selectValue}>{selectPlaceholder}</option>
      </select>
    </div>
  );
};

export default SelectDropdown;
