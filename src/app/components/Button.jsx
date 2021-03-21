import React from "react";

const Button = ({buttonText, buttonColor}) => {
  return (
    <div>
      <button className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-600 text-white rounded-md px-5 py-1.5 font-semibold font-mono`}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
