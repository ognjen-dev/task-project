import React from "react";
import Button from 'app/components/Button';

const Header = () => {
  return (
    <div className="lg:px-48 md:px-48 px-1 flex flex-row justify-between py-5 shadow-md">
      <p className="font-mono font-bold text-3xl inline-flex justify-start">
        ✔️Tasks
      </p>
      
      <div className="flex flex-row lg:mr-0 mr-1">
        <button className="hover:underline text-gray-700 font-semibold lg:mr-8 mr-3 font-mono">
          Demo user
        </button>

        <Button buttonText={`Sign up`} buttonColor={`blue`} />

      </div>
    </div>
  );
};

export default Header;
