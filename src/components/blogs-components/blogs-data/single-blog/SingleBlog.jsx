/** @format */
import './SingleBlog.css'
import { useParams } from "react-router-dom";
import { blogData } from "../../../../Helpers/blogs/Blogs";
import BlogDescriptions from "./single-blog-components/BlogDescriptions";
import BlogAuthor from "./single-blog-components/BlogAuthor";
import ShareArticle from "./single-blog-components/ShareArticle";

const SingleBlog = () => {
    const { id } = useParams()
    const singleBlogRoute = blogData.find(blog => blog.id === parseInt(id))

    if(!singleBlogRoute){
        return (
            <h1>Blog Not Found!!!</h1>
        )
    }

  return (
    <div className="single-blog-page">
        <div className="title">
            <h2>{singleBlogRoute.title}</h2>
            <p>{singleBlogRoute.date}</p>
        </div>
      <div className="single-blog-wrapper">
        <div className="img-container">
          <img src={singleBlogRoute.image} alt="single-blog-img" />
        </div>

        {/* Blog Descriptions */}
        <div className="single-blog-descriptions">
            <BlogDescriptions singleBlogRoute={singleBlogRoute}/>
        </div>
        {/* Comment Section */}
        <div className="single-blog-comment">
            <p>Leave a comment...</p>
            <div className="comment-box">
                <textarea name="comment" className="comments-section" placeholder="Write your comment"></textarea>
                <button className="comment-btn">POST</button>
            </div>
        </div>
        {/* Blog Author component */}
      <div className="blog-author">
        <BlogAuthor singleBlogRoute={singleBlogRoute}/>
      </div>

      {/* Share Article */}
      <div className="share-blog-container">
        <h3>SHARE THE ARTICLE</h3>
        <ShareArticle/>
      </div>
      </div>
    </div>
  );
};

export default SingleBlog;
