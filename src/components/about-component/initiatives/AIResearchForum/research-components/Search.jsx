/** @format */

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

const Search = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    onSearchChange(inputValue);
  };

  return (
    <div className="research-forum-search">
      <div className="research-forum-input">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search the Paper"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="research-forum-btn">
        <button onClick={handleButtonClick}>Search</button>
      </div>
    </div>
  );
};

export default Search;
