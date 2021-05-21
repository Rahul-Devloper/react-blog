import React from 'react'
import {useState} from 'react';

const Home = () => {

const [blogs, setBlogs] = useState([
    {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'My new Party', body: 'lorem ipsum...', author: 'luigi', id: 2},
    {title: 'My new Disco', body: 'lorem ipsum...', author: 'princess', id: 3}
]);

    return (
        <div className="home">
             {blogs.map((blog)=>(
                 <div className="blog-preview" key={blog.id}>
                     <h2>{blog.title}</h2>
                     <p>The blog is written by {blog.body}</p>
                 </div>
             ))}
        </div>
    )
}

export default Home
