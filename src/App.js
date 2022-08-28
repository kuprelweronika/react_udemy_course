import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    //przechwytuje dane z serwera
    //wszystko wykonuje z funkcją .then() zeby miec gwarancje ze poprzednia rzecz sie wykonała zanim przejdzie dalej
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json(); //sciagam dane z json, to jest
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
