import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./pages/HomePage/index'),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage'),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage'),
);

const App = () => (
  <>
  </>
);

export default App;