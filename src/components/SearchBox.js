import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="type to search"
      ></input>
    </div>
  );
};

export default SearchBox;
