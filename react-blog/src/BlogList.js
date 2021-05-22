import React from 'react'

const BlogList = ({bloglist, titlehead,}) => {
    const blogsup = bloglist;
    const title = titlehead;
    return (
        <div className = 'blog-list'>
            <h2>{title}</h2>
            {blogsup.map((blog)=>(
                 <div className="blog-preview" key={blog.id}>
                     <h2>{blog.title}</h2>
                     <p>The blog is written by {blog.body}</p>
                 </div>
             ))}
        </div>
    )
}

export default BlogList
