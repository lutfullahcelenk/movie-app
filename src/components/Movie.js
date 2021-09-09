import React, {useContext} from "react";
import { AuthContext } from "../context/AuthContext";


const IMG_API = "https://image.tmdb.org/t/p/w1280";


const setVoteClass = (vote) => {
    if (vote >= 8){
        return "green";
    } else if (vote >= 6){
        return "orange";
    } else {
        return "red";
    }
}
const Movie = ({title, poster_path, overview, vote_average}) => {
    
    const { currentUser } = useContext(AuthContext);

    return (
    <div className="movie">
        <img src={poster_path ? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            {currentUser && <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>}
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
)};
export default Movie;