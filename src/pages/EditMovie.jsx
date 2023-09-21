import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Select from "../components/Select";
import { MdOutlineDelete } from "react-icons/md";
import { genres, showTimes, years } from "../components/Data";

const EditMovie = () => {
  
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [showTime1, setShowTime1] = useState("12:00");
  const [showTime2, setShowTime2] = useState("");
  const [showTime3, setShowTime3] = useState("");
  const [showTime4, setShowTime4] = useState("");
  const [showTime5, setShowTime5] = useState("");
  const [showTime6, setShowTime6] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault()
    const data = {
      title,
      genre,
      releaseYear,
      showTime1,
      showTime2,
      showTime3,
      showTime4,
      showTime5,
      showTime6,
    };
    setLoading(true);
    axios
      .put(`https://movietheatrebackend.onrender.com/movies/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Not edited. Check console for error");
        console.log(error);
      });
  };

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`https://movietheatrebackend.onrender.com/movies/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Not deleted. Check console for error");
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://movietheatrebackend.onrender.com/movies/${id}`)
      .then((response) => {
        setTitle(response.data.movie.title);
        setGenre(response.data.movie.genre);
        setReleaseYear(response.data.movie.releaseYear);
        setShowTime1(response.data.movie.showTime1);
        setShowTime2(response.data.movie.showTime2);
        setShowTime3(response.data.movie.showTime3);
        setShowTime4(response.data.movie.showTime4);
        setShowTime5(response.data.movie.showTime5);
        setShowTime6(response.data.movie.showTime6);


        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />

      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex flex-col">
          <div className="h-1 w-1 border-1 border-white"/>
          <div className=" flex flex-col border-2 border-sky-950 justify-center items-center mx-auto rounded-xl w-fit gap-4 p-4">
            <form
              className=" flex flex-col  justify-center items-center mx-auto rounded-xl w-fit gap-4 p-2"
              action=""
            >
              <input
                required
                onChange={(e) => setTitle(e.target.value)}
                className="flex flex-col w-full items-center justify-center bg-sky-950 p-1 rounded text-white"
                type="text"
                value={title}
              />
              <label className="flex flex-col w-full items-center justify-center bg-sky-950 p-1 rounded text-white">
                Select Genre
                <Select
                  req={true}
                  setChange={setGenre}
                  arrayMap={genres}
                  isShowTime={false}
                  currentValue={genre}
                />
              </label>
              <label className="flex flex-col w-full items-center justify-center bg-sky-950  p-1 rounded text-white">
                Select Release Year
                <Select
                  req={true}
                  setChange={setReleaseYear}
                  arrayMap={years}
                  isShowTime={false}
                  currentValue={releaseYear}
                />
              </label>
              <div className="flex flex-col w-full items-center justify-center bg-sky-950  p-1 rounded text-white">
                <h3 className="  self-center">Showtimes</h3>
                <div className=" grid grid-cols-3 gap-1 items-center justify-center">
                  <Select
                    req={true}
                    setChange={setShowTime1}
                    arrayMap={showTimes}
                    isShowTime={true}
                    currentValue={showTime1}
                  />
                  <Select
                    req={false}
                    setChange={setShowTime2}
                    arrayMap={showTimes}
                    isShowTime={true}
                    currentValue={showTime2}
                  />
                  <Select
                    req={false}
                    setChange={setShowTime3}
                    arrayMap={showTimes}
                    isShowTime={true}
                    currentValue={showTime3}
                  />
                  <Select
                    req={false}
                    setChange={setShowTime4}
                    arrayMap={showTimes}
                    isShowTime={true}
                    currentValue={showTime4}
                  />
                  <Select
                    req={false}
                    setChange={setShowTime5}
                    arrayMap={showTimes}
                    isShowTime={true}
                    currentValue={showTime5}
                  />
                  <Select
                    req={false}
                    setChange={setShowTime6}
                    arrayMap={showTimes}
                    isShowTime={true}
                    currentValue={showTime6}
                  />
                </div>
              </div>
             
                <button
                  className=" bg-sky-950  p-1 rounded text-white"
                  onClick={handleEdit}
                >
                  Edit Movie
                </button>
              
            </form>
            <button onClick={() => setIsDeleting(true)}>
              <MdOutlineDelete className="text-4xl text-red-600 " />
            </button>
          </div>
          {isDeleting && (
            <div className="bg-white border-2 h-56 w-96 border-sky-950 absolute m-auto left-0 right-0 top-1/4 rounded-2xl flex flex-col justify-center items-center gap-5 ">
              <h4 className="text-black">Are you sure?</h4>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-600 rounded h-fit p-2 m-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-sky-950 rounded h-fit p-2 m-2"
                  onClick={() => setIsDeleting(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditMovie;
