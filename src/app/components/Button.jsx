import React from "react";

const Button = ({ buttonText, buttonColor, textSize, textStyle, py }) => {
  return (
    <div>
      <button
        className={`bg-${buttonColor}-600 hover:bg-${buttonColor}-700 text-white text-${textSize} rounded-md px-5 py-${py} font-${textStyle} font-mono`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
