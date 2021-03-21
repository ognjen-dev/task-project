import React from "react";
import SearchInput from "app/components/SearchInput";
import Button from "app/components/Button";

const BodyLeft = () => {
  return (
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
  );
};
export default BodyLeft;
