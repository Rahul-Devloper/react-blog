import React from 'react'
import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'

const BlogDetails = () => {

    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleCLick = ()=>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className='blog-details'>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.details}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleCLick}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails