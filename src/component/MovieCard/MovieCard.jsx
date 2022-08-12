import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import {TailSpin} from 'react-loader-spinner';
import shortid from "shortid";
import defaultImg from "../../img/default.webp";
import { Image, CardContainer, Info, Title, MainTitle } from "../../pages/styledPages/MovieCard.styled";

const MovieCard = ({URL, img, tag, title, average, overview, genres}) => {

    return (
        <div>
            <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} />}>
                <CardContainer>
                    <Image src={img ? `${URL}/${img}` : defaultImg} alt={tag} />
                    <Info>
                        <MainTitle>{title}</MainTitle>
                        <p>User scores: {Math.round(average * 10)} %</p>
                        <Title>Overview</Title>
                        <p>{overview}</p>
                        <Title>Genres</Title>
                        <ul>
                            {genres.map(({name}) => (<li key={shortid.generate()}>{name}</li>))}
                        </ul>
                    </Info>
                </CardContainer>
                <p>Additional information</p>
                <ul>
                    <Link to="cast">Cast</Link>
                    <Link to="reviews">Reviews</Link>
                </ul>

            
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default MovieCard;