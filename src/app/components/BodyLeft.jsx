import React from "react";
import NavFilters from "app/components/NavFilters";
import List from "app/components/List";

const BodyLeft = () => {
  return (
    <div className="shadow-sm">
      <NavFilters />
      <List />
    </div>
  );
};
export default BodyLeft;
