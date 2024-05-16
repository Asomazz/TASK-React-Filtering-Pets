import React from "react";

const Search = ({ setQuery }) => {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="input-group rounded">
      <input
        onChange={handleSearch}
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
};

export default Search;
