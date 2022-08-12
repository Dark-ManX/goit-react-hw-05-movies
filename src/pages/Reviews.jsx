import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import shortid from "shortid";
import {KEY, fetchReviews} from '../additional/fetching/fetchMovies';

const Reviews = () => {

    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchReviews(movieId, KEY)
        .then(res => setReviews([...res.results]))
    }, [movieId])
    return (
        <ul>
            {reviews 
            ? (reviews.map(({author, content}) => (
                <li key={shortid.generate()}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>)))
            : <p>We don't have any reviews for this movie</p>}
        </ul>

    )
}

export default Reviews;