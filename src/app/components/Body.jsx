import React from "react";
import BodyLeft from "app/components/BodyLeft";
import BodyRight from "app/components/BodyRight";

const Body = () => {
  return (
    <div>
      <div className="font-body lg:px-80 md:px-32 pr-2 pl-0 lg:flex lg:flex-row md:flex md:flex-col items-center justify-center mt-5 py-5">
        <div className="rounded-xl w-full h-screen lg:p-0 mx-1 lg:w-4/6 lg:mr-4">
          <BodyLeft />
        </div>
        <div className="rounded-xl lg:w-96 mt-44 lg:mt-0 lg:ml-1 ml-1 w-full ">
          <BodyRight />
        </div>
      </div>
    </div>
  );
};

export default Body;
