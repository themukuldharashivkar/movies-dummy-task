import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toggleFavorite } from "../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import shawnshank from "../assets/images/shawshank.jpg";
import { GoArrowUpRight } from "react-icons/go";

export default function Card({ movie, image, imdb_url, rating, id }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.movies);

  console.log(image);

  const handleToggleFavorite = (movieId) => {
    dispatch(toggleFavorite(movieId));
  };

  return (
    <div className="bg-zinc-950 relative border-4 border-[#0598ce] rounded-3xl border-opacity-40 overflow-hidden w-full hover:border-opacity-100 transition-colors duration-150 ease-in group text-white">
      <a href={imdb_url} target="_blank" rel="noreferrer">
        <div className="bg-gray-900 flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
          <div className="absolute w-2/3 rounded-3xl overflow-hidden transition-all bg-transparent bg-opacity-0">
            <img
              className="w-full object-cover p-5 rounded-3xl"
              width={200}
              height={200}
              alt={movie}
              src={shawnshank}
              // src={`../assets/${image}`}
            />
          </div>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-25 p-3 rounded-xl backdrop-blur-2xl">
            <GoArrowUpRight size={32} className=" fill-gray" />
          </div>
        </div>
      </a>

      <div className="md:min-h-[20vh] lg:min-h-[27vh] bg-zinc-950 p-6 flex flex-col justify-between items-start gap-y-4">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
          {movie}
        </h2>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <p>Rating:</p>
            <div className="flex items-center gap-x-1 text-base md:text-lg lg:text-xl 2xl:text-2xl">
              <p className="font-bold">
                {rating}
                <span className="text-gray-500 font-normal pl-0.5">/10</span>
              </p>
            </div>
          </div>
          {favorites.includes(id) ? (
            <FaHeart
              onClick={() => handleToggleFavorite(id)}
              className="z-[90] text-[#f50057] text-3xl cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={() => handleToggleFavorite(id)}
              className="z-[90] text-[#f50057] text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
