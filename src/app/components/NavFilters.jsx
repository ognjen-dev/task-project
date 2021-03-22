import React from "react";
import SearchInput from "app/components/SearchInput";
import Button from "app/components/Button";
import SelectDropdown from "app/components/SelectDropdown";

const NavFilters = () => {
  return (
    <div className="bg-white rounded-t-sm">
      <div className="flex flex-row justify-between py-8 lg:px-6 px-3">
        <div className="lg:block hidden max-h-14">
          <button
            className={`focus:outline-none bg-blue-600 hover:bg-blue-700 text-white text-md rounded-md px-5 py-3 font-bold font-mono`}
          >
            + Add project
          </button>
          {/* <Button
            buttonColor="blue"
            buttonText="+ Add project"
            textSize="md"
            textStyle="bold"
            py="3"
          /> */}
        </div>
        <div className="lg:hidden ">
          <button
            className={`focus:outline-none bg-blue-600 hover:bg-blue-700 text-white text-md rounded-md px-5 py-3 font-bold font-mono`}
            >
            + Add project
          </button>
            {/* <Button
              buttonColor="blue"
              buttonText="+ Add project"
              textSize="md"
              textStyle="bold"
              py="3"
            /> */}
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
        <div className="flex flex-row items-center justify-between border-b pb-8">
          <p className="font-bold font-mono text-lg lg:block hidden ml-9">
            Recent
          </p>
          <div className="flex flex-row justify-center ml-5 lg:mr-7">
            <div className="mr-7">
              <SelectDropdown
                selectPlaceholder="By Value"
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
