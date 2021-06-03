import React from 'react'
import {Link} from 'react-router-dom'

const BlogList = ({bloglist, titlehead,}) => {
    const blogsup = bloglist;
    const title = titlehead;
    return (
        <div className = 'blog-list'>
            <h2>{title}</h2>
            {blogsup.map((blog)=>(
                 <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                     <p>The blog is written by {blog.body}</p>
                    </Link>
                 </div>
             ))}
        </div>
    )
}

export default BlogList
