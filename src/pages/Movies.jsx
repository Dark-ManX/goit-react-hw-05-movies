import { useState, useEffect, Suspense } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import shortid from "shortid";
import {TailSpin} from 'react-loader-spinner';
import {KEY, fetchMovieByName} from "../additional/fetching/fetchMovies";
import MovieItem from "./styledPages/HomePageMovies.styled";



const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(searchParams.get('query') ?? null);
    const [request, setRequest] = useState(null); 

    const reset = () => {

        setQuery('');
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setResult(query);
        setSearchParams({'query': query})
        reset();
    }

    useEffect(() => {

        if (result) {
            fetchMovieByName(result, KEY)
            .then(res => {
                setRequest(res.results)
            })

        }

    }, [result, searchParams])

    return (
        <>
            
                <form onSubmit={handleSubmit}>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type="submit" >Search</button>
                </form>
 
            
            {request && (

                <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} />}>
                    <ul>
                        {request.map(({id, title}) => (               
                            <MovieItem key={shortid.generate()} search={result}>
                                <Link to={`${id}`} state={{from: location}}>{title}</Link>
                            </MovieItem>
                        ))}
                    </ul>
                
                </Suspense>
            )}  
        </>
    )
}

export default Movies;