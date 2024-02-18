/** @format */
import BlogsData from "../../components/blogs-components/blogs-data/BlogsData";
import JoinUs from "../../components/blogs-components/blogs-data/JoinUs";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-page">
      <h2>Blogs</h2>
      <div className="blogs-container">
        <BlogsData />
      </div>
      <JoinUs />
    </div>
  );
};

export default Blogs;
