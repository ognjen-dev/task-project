import React from "react";
import AdImage from "app/images/stockImage.PNG";

const Advert = () => {
  return (
    <a href="/" className="bg-gray-50 mx-3 mb-4 pb-4 rounded-lg">
      <div className="flex flex-row justify-center">
        <img src={AdImage} alt="yo" className="rounded-xl"/>
      </div>
      <div className="mx-5">
        <p className="font-semibold text-gray-800 text-lg">
          Lorem ipsum dolor sit amet. | $50
        </p>
        <p className="font-regular text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          magni.
        </p>
      </div>
    </a>
  );
};

export default Advert;
