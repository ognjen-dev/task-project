import React from "react";

const Header = () => {
  return (
    <div className="lg:px-52 md:px-52 px-2 flex flex-row justify-between py-5 shadow-sm bg-white">
      <p className="font-mono font-bold text-3xl inline-flex justify-start">
        ✔️Tasks
      </p>

      <div className="flex flex-row lg:mr-0 mr-1">
        <button className="hover:underline text-gray-700 font-semibold lg:mr-8 mr-3 font-mono">
          Demo user
        </button>
        {/* 
        <Button
          buttonColor="blue"
          buttonText="Sign up"
          textSize="md"
          textStyle="bold"
          py="1.5"
        /> */}
        <button
          className={`bg-blue-600 hover:bg-blue-700 text-white text-md rounded-md px-5 py-3 font-bold font-mono`}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
