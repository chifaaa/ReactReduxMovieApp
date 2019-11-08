import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import MovieApp from "./components/movieApp";
import movieAppStore from './store'
const App = () => (
  <Provider store={movieAppStore}>
    <MovieApp />
  </Provider>
);

export default App;
