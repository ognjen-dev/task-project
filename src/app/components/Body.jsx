import React from "react";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const Body = () => {
  return (
    <div className="lg:px-48 md:px-32 px-1 flex flex-row justify-center py-5">
      <div className="border rounded-md w-full h-screen lg:p-0 mx-1 lg:w-4/6 lg:mr-4">
        <BodyLeft />
      </div>
      <div className="border rounded-md w-96 lg:block hidden">
        <BodyRight />
      </div>
    </div>
  );
};

export default Body;
