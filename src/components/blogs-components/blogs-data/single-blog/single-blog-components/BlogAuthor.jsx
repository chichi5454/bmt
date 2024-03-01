/** @format */

import React from "react";

const BlogAuthor = ({ singleBlogRoute }) => {
  return (
    <>
      <div className="author-title">
        {/* <h4>DATE</h4> */}
        <h4>AUTHOR</h4>
        {/* <h4>COMMENT</h4> */}
      </div>
      <div className="blog-author-details">
        <i>
          <p>
            The article is well written and documented by{" "}
            {singleBlogRoute.author}
          </p>
        </i>
      </div>
    </>
  );
};

export default BlogAuthor;
