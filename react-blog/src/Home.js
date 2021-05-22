import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList'

const Home = () => {

const [blogs, setBlogs] = useState([
    {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'My new Party', body: 'lorem ipsum...', author: 'luigi', id: 2},
    {title: 'My new Disco', body: 'lorem ipsum...', author: 'princess', id: 3}
]);

const [name, setName] = useState('mario')


const handleDelete=(id)=>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id );
    setBlogs(newBlogs);
}

useEffect(()=>{
    console.log('hello')
}, []);

    return (
        <div className="home">
             <BlogList bloglist = {blogs} titlehead = 'All Blogs!' handleDelete = {handleDelete} home = {Home} />
            <p>{name}</p>
            <button onClick = {()=>setName('luigi')}>Change Name</button>
        </div>
    )
}

export default Home
