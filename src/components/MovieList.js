import React from "react";

const MovieList = (props) => {
  const FavoriteComponent = props.FavoriteComponent;
  return (
    <>
      {props.movies.map((movie) => (
        <div
          className="image-container d-flex jutify-content-start m-3"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavoritesClick(movie)}
            className="overlay d-flex align-items-center justify-center"
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
