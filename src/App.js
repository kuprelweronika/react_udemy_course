import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    //przechwytuje dane z serwera
    //wszystko wykonuje z funkcją .then() zeby miec gwarancje ze poprzednia rzecz sie wykonała zanim przejdzie dalej
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json(); //sciagam dane z json, to jest najpopularniejszy format danych
        //transformuje go do js
        //te dane pobrane muszą być przechowywane w stanie, który będzie updateowany i uzywany do MoviesList
        //dodalam stan
        //teraz array z bazy danych będzie nowym stanem
        //przepisuje go na koniec funkcji z transformedMovies
        //setMovies(data.results);

        //moja aplikacja w komponencie Movies pobiera title, releaseDate i openingText, to sie nie zgadza z baza danych wiec trzeba to zmienic
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
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
