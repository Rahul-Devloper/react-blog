import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {

  const{ data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');



// const handleDelete=(id)=>{
//     const newBlogs = blogs.filter((blog)=> blog.id !== id );
//     setBlogs(newBlogs);
// }



    return (
        <div className="home">
            {error && <h4>{error}</h4>}
            {isLoading && <h1>Please Wait...</h1>}
             {blogs && <BlogList bloglist = {blogs} titlehead = 'All Blogs!' />}
        </div>
    )
}

export default Home
