import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
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
            if(error.name === 'AbortError'){
                console.log('fetch aborted')
            } 
            else{
                setIsLoading(false);
            setError(error.message);
            } 
            
        })
        },1000)

        return()=> abortCont.abort();
    }, [url]);

    return{ data, isLoading, error}

}

export default useFetch
