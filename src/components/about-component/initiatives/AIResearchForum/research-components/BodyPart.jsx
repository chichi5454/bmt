/** @format */

import React, { useState } from "react";
import Papers from "./Papers";
import Sidebar from "./Sidebar";
import Search from "./Search";

import "./BodyPart.css";

const BodyPart = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="BodyPart">
      <Search onSearchChange={handleSearchChange} />
      <div className="bodypart-container">
        <Papers searchValue={searchValue} />
        <Sidebar />
      </div>
    </div>
  );
};

export default BodyPart;
