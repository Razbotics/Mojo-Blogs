import React from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, placeholder }) {
  return (
    <input
      className="Search"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
