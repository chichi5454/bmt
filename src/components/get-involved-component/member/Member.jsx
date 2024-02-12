/** @format */

import React from "react";
import "./Member.css";
import MemberPage from "./member-page/MemberPage";
import Individual from "./Individual/Individual";
import Corporate from "./Corporate/Corporate";

const Member = () => {
  return (
    <div className="member">
      <MemberPage />
      <Individual />
      <Corporate />
    </div>
  );
};

export default Member;
