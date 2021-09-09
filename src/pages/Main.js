import React, { useEffect, useState, useContext } from "react";
import Movie from "../components/Movie";
import { AuthContext } from "../context/AuthContext";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f89ce8fd59aae325b1f059373d9d2349&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=f89ce8fd59aae325b1f059373d9d2349&query=";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
    //console.log("API_KEY: ", process.env.REACT_APP_API_KEY);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else {
      alert("Please login to search a movie!");
    }
  };
  
  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="search"
          placeholder="Search a movie"
          onChange={handleOnChange}
        />
      </form>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}
export default App;
