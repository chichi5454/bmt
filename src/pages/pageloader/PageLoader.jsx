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

//App.js

// import React from "react";
// import ReactLoading from "react-loading";

// export default function Loading() {
//   return (
//     <div>
//       <h2>Loading in ReactJs - GeeksforGeeks</h2>
//       <ReactLoading type="balls" color="#0000FF" height={100} width={50} />
//       <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
//       <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} />
//       <ReactLoading type="cubes" color="#0000FF" height={100} width={50} />
//       <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
//       <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
//       <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
//       <ReactLoading
//         type="spinningBubbles"
//         color="#0000FF"
//         height={100}
//         width={50}
//       />
//     </div>
//   );
// }
