import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import shortid from "shortid";
import {KEY, fetchCast} from '../additional/fetching/fetchMovies';
import { imageDB } from "../additional/imageDB/imageDB";
import defaultImg from '../img/default.webp';
import { ActorPhoto } from "./styledPages/Cast.styled";

const Cast = () => {

    
    const {movieId} = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {

        fetchCast(movieId, KEY)
        .then(res => setCast([...res.cast]))
        .catch(error => console.log(error))
    }, [movieId])
    console.log(cast);

    return (
        <ul>
            {cast && (cast.map(({profile_path, name, character}) => (
            <li key={shortid.generate()}>
                <ActorPhoto src={profile_path ? (`${imageDB}/${profile_path}`) : defaultImg} alt={name}/>
                <p>{name}</p>
                <p>{character}</p>
            </li>
            )))}
        </ul>
    )
}

export default Cast;