import { useState, useEffect } from "react";
import {Link, useLocation} from 'react-router-dom';
import {KEY, fetchRes} from "../additional/fetching/fetchMovies";
import MovieItem from "./styledPages/HomePageMovies.styled";

const HomePageMovies = () => {

    const [movies, setMovies] = useState([]);

    const location = useLocation();

    useEffect(() => {

    fetchRes(KEY)
    .then(({results}) => setMovies([...results]))
    .catch(error => alert(error))
}, []);

return (
    <ul>
        {movies.map(({id, title}) => (
            <MovieItem key={id}>
                <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
            </MovieItem>
        ))}
    </ul>
)
}


export default HomePageMovies;