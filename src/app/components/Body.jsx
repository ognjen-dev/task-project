import React from "react";
import BodyLeft from "app/components/BodyLeft";
import BodyRight from "app/components/BodyRight";

const Body = () => {
  return (
    <div className="font-body lg:px-52 md:px-32 px-1 flex flex-row justify-center mt-5 py-5">
      <div className="rounded-md w-full h-screen lg:p-0 mx-1 lg:w-4/6 lg:mr-4">
        <BodyLeft />
      </div>
      <div className="rounded-md w-96 lg:block hidden ">
        <BodyRight />
      </div>
    </div>
  );
};

export default Body;
