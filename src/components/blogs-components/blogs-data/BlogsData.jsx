import './BlogData.css'
import { Link } from 'react-router-dom'
import { blogData } from '../../../Helpers/blogs/Blogs'
import { useState } from 'react'

const BlogsData = () => {
    const [ blogInput, setBlogInput ] = useState("")

    // Function to handle input changes
    const handleChanges = (e) => {
        const lowerInput = e.target.value.toLowerCase()
        setBlogInput(lowerInput);
    }

    // Filtered data
    const filteredBlogs = blogData.filter((blog) => {
        if(blogInput === ""){
            return true
        }else{
            return blog.title.toLowerCase().includes(blogInput)
        }
    })

  return (
    <div className='blogs-data-container'>
      <div className="blogs-search">
        <input type="text" 
            onChange={handleChanges}
            value={blogInput}
            placeholder="Search..." className="blogs-input" />

        <i className="fa-solid fa-magnifying-glass search-btn"></i>
      </div>

      <div className="blog-wrapper">
        {filteredBlogs.length === 0 ? (
            <h2>Blog Not Found</h2>
        ): (
            filteredBlogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} className="blog-data" key={blog.id}>
                    <div className="image">
                        <img src={blog.image} alt="event 1" />
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <p className='blog-title-par'>{blog.title}</p>
                            <p>{blog.date}</p>
                        </div>

                        <i class="fa-solid fa-plus"></i>
                    </div>
                </Link>
            ))
        )}
    </div>
    </div>
  )
}

export default BlogsData
