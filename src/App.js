import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//b810f1c
const API_URL = "http://www.omdbapi.com?apikey=b810f1c";
const movie1 = {
  Title: "Superman/Batman: Apocalypse",
  Year: "2010",
  imdbID: "tt1673430",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found..</h2>
        </div>
      )}
    </div>
  );
}

export default App;
