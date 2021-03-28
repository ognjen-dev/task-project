import React from "react";

const SearchInput = () => {
  return (
    <div className="lg:ml-2 ml-1 bg-gray-50 flex flex-row justify-between w-9/12 rounded-md items-center pr-3 py-1 mx-2 lg:text-md text-xs lg:max-w-xl -mr-0 xl:mr-0 font-semibold outline-none md:py-2">
      <input type="text" className="text-gray-400 font-bold ml-4 bg-gray-50 outline-none" placeholder="Search Projects" />
      {/* <p className="text-gray-400 font-bold ml-4">
        Search projects
      </p> */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="lightgray"
          className="w-6 h-6 lg:mr-1"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
