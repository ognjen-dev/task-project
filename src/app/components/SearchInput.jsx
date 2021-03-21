import React from "react";

const SearchInput = () => {
  return (
    <div className="lg:ml-2 ml-1 flex bg-gray-50 font-semibold py-1 rounded-md">
      <div className="flex flex-row items-center mr-5 lg:mr-0">
        <div className="">
          <input
            type="text"
            placeholder="Search Projects"
            className="w-3/5 lg:text-md text-xs lg:w-full md:w-full sm:mr-44 -mr-8 xl:-mr-6  lg:-mr-6 lg:mr-52 font-semibold outline-none bg-gray-50 ml-4 py-2 md:py-1"
          />
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="lightgray"
            className="w-6 h-6 lg:mr-4 -ml-1 bg-gray-50"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
