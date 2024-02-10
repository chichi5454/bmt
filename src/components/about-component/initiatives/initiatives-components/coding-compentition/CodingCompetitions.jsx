/** @format */
import React, { useState } from "react";
import "./codingCompetitions.css";
import CompetitionTop from "./coding-sections/CompetitionTop";
import CompetitionTasks from "./coding-sections/CompetitionTasks";
import Leaderboard from "./coding-sections/Leaderboard";

const CodingCompetitions = () => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (value) => {
    setFilterValue(value);
  };

  return (
    <div className="coding-compentions">
      <h2>Coding Competitions</h2>
      <div className="coding-competitions-container">
        <CompetitionTop onFilter={handleFilter} />
      </div>
      <div className="coding-competitions-section">
        <CompetitionTasks filterValue={filterValue} />
        <Leaderboard filterValue={filterValue} />
      </div>
    </div>
  );
};

export default CodingCompetitions;
