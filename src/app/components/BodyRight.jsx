import React from "react";
import Advert from "app/components/Advert";
import "app/style.css";

const BodyRight = () => {
  return (
    <div className="bg-white rounded-md w-full min-h-screen z-negative">
      <div className="shadow-md overflow-y overflow-x-hidden overflow-scroll max-h-screen ">
        <div className="flex flex-row justify-between font-semibold items-baseline py-6 lg:px-6 px-3">
          <p className="text-lg">Top Templates</p>
          <a
            href="/"
            className="text-gray-400 text-md font-semibold hover:text-blue-600"
          >
            See All&#10132;
          </a>
        </div>
        <Advert />
        <Advert />
        <Advert />
        <Advert />
        <Advert />
        <Advert />
      </div>
    </div>
  );
};

export default BodyRight;
