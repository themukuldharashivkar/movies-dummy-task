import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favorites = () => {
  const { movies, favorites } = useSelector((state) => state.movies);

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  // if (favoriteMovies.length === 0) return <p>No favorite movies yet.</p>;

  return (
    <section className="min-h-screen bg-[#001a33] pt-24 pb-20">
      {favoriteMovies.length > 0 && (
        <>
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
            Favorite Movies
          </h2>
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl pb-10 text-gray-400">
            These are the favorite movies, you can remove by clicking on the
            heart :)
          </p>
        </>
      )}
      {favoriteMovies.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
            No favorite movies yet.
          </p>
          <p className="text-3xl text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
            Add some to see them here.
          </p>
          <a
            href="/"
            className="mt-10 px-2 py-1 rounded-lg border border-[#0598ce] text-white text-lg hover:bg-[#0598ce] hover:text-black transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0598ce]/50 hover:rounded-3xl"
          >
            Go back home
          </a>
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {favoriteMovies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie.movie}
            image={movie.image}
            imdb_url={movie.imdb_url}
            rating={movie.rating}
            id={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
