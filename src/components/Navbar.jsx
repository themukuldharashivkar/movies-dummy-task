import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[99] inset-x-0 px-5 md:px-10 flex items-center justify-between py-3 md:py-4 border-b-2 border-white/20 bg-[#001a33] backdrop-blur-2xl bg-opacity-15">
      <Link
        to="/"
        className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase text-white font-bold"
      >
        Movies
      </Link>
      <Link
        to="/favorites"
        className="px-2 py-1 rounded-lg border border-[#0598ce] text-white text-lg hover:bg-[#0598ce] hover:text-black transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0598ce]/50 hover:rounded-3xl"
      >
        Favorite Movies
      </Link>
    </nav>
  );
};
export default Navbar;
