import React from "react";

const ListItem = ({ itemPlaceholder }) => {
  return (
    <div className="bg-gray-100 p-6 my-2 mx-5 rounded-md">
      <p>
          {itemPlaceholder}
      </p>
    </div>
  );
};

export default ListItem;
