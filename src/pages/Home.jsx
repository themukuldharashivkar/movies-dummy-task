import MoviesList from "../components/MoviesList";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#001a33] pt-16">
      <h2 className="text-3xl text-white md:text-4xl lg:text-5xl 2xl:text-6xl pt-10">
        List of 100 Movies
      </h2>
      <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl pb-10 text-gray-400">
        You can add or remove movies from favorite movies list by clicking on
        the heart :)
      </p>
      <MoviesList />
    </section>
  );
};
export default Home;
