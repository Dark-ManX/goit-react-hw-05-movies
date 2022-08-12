import { useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const AsyncHomePageMovies = lazy(() => import(`../../pages/HomePageMovies`));
const AsyncMovies = lazy(() => import('../../pages/Movies'));
const AsyncMovieDetails = lazy(() => import(`../../pages/MovieDetails`));
const AsyncMovieCast = lazy(() => import(`../../pages/Cast`));
const AsyncReviews = lazy(() => import(`../../pages/Reviews`));
const NotFound = lazy(() => import(`../../pages/PageNotFound`));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AsyncHomePageMovies />} />
        <Route path="movies" element={<AsyncMovies />} />

        <Route path="movies/:movieId" element={<AsyncMovieDetails />}>
          <Route path="cast" element={<AsyncMovieCast />} />
          <Route path="reviews" element={<AsyncReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
