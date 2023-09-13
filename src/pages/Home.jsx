import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {
  MdOutlineAddBox,
  MdOutlineDelete,
  MdLocalMovies,
} from "react-icons/md";
import MovieIcon from "../components/MovieIcon";
import Showtimes from "../components/Showtimes";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://movie-theater-backend.vercel.app/movies")
      .then((response) => {
        setMovies(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 flex h-screen flex-col gap-5 items-center justify-start">
      <div className="flex flex-col justify-center items-center gap-3 ">
        <div className="flex gap-3 items-center justify-center">
          <h1 className="text-3xl my-8 font-mono ">SmallTown Movie Theatre</h1>
          <MdLocalMovies className="text-4xl" />
        </div>
        <Link className="flex items-center gap-2" to="/movies/create">
          <h4>Add New Movie</h4>
          <MdOutlineAddBox className="text-sky-600 text-xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" w-3/4 h-full grid justify-center sm:grid-cols-2 lg:grid-cols-3  gap-5">
          {movies.map((movie) => {
            return (
              <div
                key={movie._id}
                className="flex flex-col items-center justify-between gap-2 h-fit border-2 p-2 border-sky-950 rounded"
              >
                <h1 className=" text-center text-xl font-mono">
                  {movie.title}
                </h1>
                <h4>{movie.releaseYear}</h4>

                <div className="flex flex-col w-4/5 items-center justify-center gap-4 ">
                  <MovieIcon genre={movie.genre} />
                  <h4>{movie.genre}</h4>
                  <Showtimes movie={movie} />
                  <Link to={`/movies/details/${movie._id}`}>
                    <AiOutlineEdit className="text-2xl text-sky-600" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
