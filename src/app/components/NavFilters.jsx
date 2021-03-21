import React from "react";
import SearchInput from "app/components/SearchInput";
import Button from "app/components/Button";
import SelectDropdown from "app/components/SelectDropdown";

const NavFilters = () => {
  return (
    <div>
      <div className="flex flex-row justify-between py-8 lg:px-6 px-3">
        <div className="lg:block hidden max-h-14">
          <Button
            buttonColor="blue"
            buttonText="+ Add project"
            textSize="md"
            textStyle="bold"
            py="3"
          />
        </div>
        <div className="lg:hidden ">
          <Button
            buttonColor="blue"
            buttonText="+ Add project"
            textSize="md"
            textStyle="bold"
            py="2"
          />
        </div>
        <SearchInput />
      </div>
      {/* red ispod */}
      <div className="px-10 flex flex-row items-center justify-between border-b pb-8">
        <p className="font-bold font-mono text-lg">Recent</p>
        <div className="flex flex-row">
          <div className="mr-3">
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
  );
};

export default NavFilters;
