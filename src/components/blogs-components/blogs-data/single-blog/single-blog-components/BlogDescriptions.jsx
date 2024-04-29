/** @format */

const BlogDescriptions = ({ singleBlogRoute }) => {
  return (
    <>
      <div className="summary">
        <div className="summary-title">
          <h4>SUMMARY</h4>
          <div className="icons">
            <i className="fa-solid fa-thumbs-up like-btn"></i>
            <i className="fa-solid fa-thumbs-down dislike-btn"></i>
          </div>
        </div>
        <p>{singleBlogRoute.summary}</p>
      </div>
      <div className="descriptions">
        {/* <h4>DESCRIPTION</h4> */}
        <p>{singleBlogRoute.des1}</p>
        <p>{singleBlogRoute.des2}</p>
        <p>{singleBlogRoute.des3}</p>
      </div>
    </>
  );
};

export default BlogDescriptions;
