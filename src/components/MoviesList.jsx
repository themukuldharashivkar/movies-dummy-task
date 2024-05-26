import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/moviesSlice";
import Card from "./Card";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <section className="pt-10 pb-20">
      {loading && (
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
          Loading...
        </h2>
      )}
      {error && (
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
          Error: {error}
        </h2>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {!loading &&
          movies.map((movie) => (
            <div key={movie.id}>
              <Card
                movie={movie.movie}
                image={movie.image}
                imdb_url={movie.imdb_url}
                rating={movie.rating}
                id={movie.id}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default MoviesList;
