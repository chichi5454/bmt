/** @format */

import "./competitionTop.css";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const CompetitionTop = ({ onFilter }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    // Pass the input value to the parent component for filtering
    onFilter(inputValue);
  };

  return (
    <div className="competition-top">
      <div className="competition-top-input">
        <SearchIcon className="search-icon"/>
        <input
          type="text"
          placeholder="Find your next competition"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="competition-top-btn">
        <button onClick={handleButtonClick}>Search Competitions</button>
      </div>
    </div>
  );
};

export default CompetitionTop;
