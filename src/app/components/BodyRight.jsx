import React from "react";
import Advert from "app/components/Advert";
import "app/style.css";

const BodyRight = () => {
  return (
    <div className="shadow-sm bg-white rounded-xl w-full min-h-screen">
      <div className="bg-white rounded-t-xl relative z-20 flex flex-row justify-between items-center p-5">
        <p className="text-lg font-bold">Top Templates</p>
        <a
          href="/"
          className="text-gray-400 text-md font-semibold hover:text-blue-600"
        >
          See All&#10132;
        </a>
      </div>
      <div className="-mt-12 px-5 overflow-y overflow-x-hidden overflow-scroll max-h-screen ">
        <div className="flex flex-row justify-between font-semibold items-baseline pb-6 lg:px-6 px-3"></div>
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
