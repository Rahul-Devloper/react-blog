import React from 'react';
import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch data for that resource'); //throw is used when data shows an error from the server.
            }
            console.log('Happy hacking')
            return res.json();
        })
        .then(blogData =>{
            setData(blogData);
            setIsLoading(false);
            setError(null);
            
        })
        .catch((error)=>{
            setIsLoading(false);
            setError(error.message);
        })
        },1000)
    }, [url]);

    return{ data, isLoading, error}

}

export default useFetch
