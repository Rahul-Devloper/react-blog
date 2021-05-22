import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList'

const Home = () => {

const [blogs, setBlogs] = useState(null);



// const handleDelete=(id)=>{
//     const newBlogs = blogs.filter((blog)=> blog.id !== id );
//     setBlogs(newBlogs);
// }

useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res =>{
        return res.json();
    })
    .then(blogData =>{
        setBlogs(blogData);
    })
}, []);

    return (
        <div className="home">
             {blogs && <BlogList bloglist = {blogs} titlehead = 'All Blogs!' />}
        </div>
    )
}

export default Home
