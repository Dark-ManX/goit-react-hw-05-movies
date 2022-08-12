import { Suspense} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import {Container, StyledLink} from './styledPages/HomeStyled';

const Home = () => {
    
    return (
        <Container>
            <header>
                <nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="movies">Movie</StyledLink>
                </nav>
            </header>

            <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} />}>
                <Outlet/>
            </Suspense>
        </Container>
    )
}

export default Home;