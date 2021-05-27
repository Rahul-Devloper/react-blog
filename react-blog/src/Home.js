import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList'

const Home = () => {

const [blogs, setBlogs] = useState(null);
const [isLoading, setIsLoading] = useState(true);



// const handleDelete=(id)=>{
//     const newBlogs = blogs.filter((blog)=> blog.id !== id );
//     setBlogs(newBlogs);
// }

useEffect(()=>{
    setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
    .then(res =>{
        return res.json();
    })
    .then(blogData =>{
        setBlogs(blogData);
        setIsLoading(false);
    })
    },1000)
}, []);

    return (
        <div className="home">
            {isLoading && <h1>Please Wait...</h1>}
             {blogs && <BlogList bloglist = {blogs} titlehead = 'All Blogs!' />}
        </div>
    )
}

export default Home
