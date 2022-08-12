import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { imageDB } from "../additional/imageDB/imageDB";
import {KEY, fetchMovie} from "../additional/fetching/fetchMovies";
import MovieCard from "../component/MovieCard/MovieCard";

const MovieDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
console.log(movie);
    const handleGoBack = () => {

        if (location?.state?.from) {

            return navigate(location.state.from);
        }

        return navigate('/');
    };

    useEffect(() => {
        console.log(movieId);
        fetchMovie(movieId ,KEY)
        .then(res => setMovie(res))
    }, [movieId]);

    return (
        
        <>
            <button type="button" onClick={handleGoBack}>go back</button>

            {movie && (
                <MovieCard 
                    id={movieId}
                    URL={imageDB} 
                    img={movie.poster_path} 
                    tag={movie.tagline} 
                    title={movie.title}
                    average={movie.vote_average}
                    overview={movie.overview}
                    genres={movie.genres}
                    />
            )}
        </>
    )
}

export default MovieDetails;