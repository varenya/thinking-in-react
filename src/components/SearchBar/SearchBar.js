import React from "react";
import "./searchbar.css";

function SearchBar({ searchText, handleSearchText }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search.."
      value={searchText}
      onChange={handleSearchText}
    />
  );
}

export { SearchBar };
