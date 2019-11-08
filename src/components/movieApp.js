import React, {Component} from "react";
import TitleFilter from './titleFilter'
import RatingFilter from './ratingFilter'
import MovieList from './movieList'

const MovieApp = () => (
  <div className="movie-app">
    <header className="movie-app-header">
      <TitleFilter />
      <RatingFilter />
    </header>
    <main className="movie-app-main">
        <MovieList />
    </main>
  </div>
)

export default MovieApp;
