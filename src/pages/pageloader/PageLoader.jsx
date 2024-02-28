/** @format */

import ReactLoading from "react-loading";
import React from "react";

const PageLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <ReactLoading type="bubbles" color="#EC1F27" height={100} width={100} />
    </div>
  );
};

export default PageLoader;
