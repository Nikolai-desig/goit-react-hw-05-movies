import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { lazy } from 'react';
import Layout from './Layout/Layout';


const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};