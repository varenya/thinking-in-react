import React from "react";
import "./searchbar.css";

function SearchBar({ searchText, handleSearchText }) {
  return (
    <input
      className="border-b-2 border-secondary text-lg p-1 w-full outline-none focus:border-accent"
      type="text"
      placeholder="Search.."
      value={searchText}
      onChange={handleSearchText}
    />
  );
}

export { SearchBar };
