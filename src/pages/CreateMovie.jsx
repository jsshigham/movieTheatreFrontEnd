import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Select from "../components/Select";
import {genres, showTimes, years } from '../components/Data'

const CreateMovie = () => {
  

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [showTime1, setShowTime1] = useState("");
  const [showTime2, setShowTime2] = useState("");
  const [showTime3, setShowTime3] = useState("");
  const [showTime4, setShowTime4] = useState("");
  const [showTime5, setShowTime5] = useState("");
  const [showTime6, setShowTime6] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSave = () => {
    const data = {
      title,
      genre,
      releaseYear,
      showTime1,
      showTime2,
      showTime3,
      showTime4,
      showTime5,
      showTime6
    };
    setLoading(true);
    axios
      .post("https://movietheatrebackend.onrender.com/movies", data)
      .then((response) => {
        setLoading(false);
        
      })
      .catch((error) => {
        setLoading(false);
        alert("Not added. Check console for error");
        console.log(error);
      });
      
  };
  return (
    <div className="flex flex-col bg-slate-900 rounded p-2 h-screen w-full items-center justify-start gap-2">
      <BackButton />

      {loading ? <Spinner /> : ""}
      <div className="  text-white w-fit mx-auto">
      <h3 className=" text-xl mx-auto w-fit p-2">Add a New Movie</h3>
      <p className=" mx-auto w-fit ">
        List the Title, Genre, Release Year and at least one Show Time
      </p>
      </div>


      <form
        className=" flex flex-col border-2 border-sky-950 justify-start items-start mx-auto rounded-xl w-fit gap-4 p-4"
        action=""
      >
        <input
          required
          onChange={(e) => setTitle(e.target.value)}
          className="flex flex-col w-full items-center justify-center bg-sky-950 p-1 rounded text-white"
          type="text"
          placeholder="Title"
        />
        <label className="flex flex-col w-full items-center justify-center bg-sky-950 p-1 rounded text-white">
          Select Genre
          <Select
            req={true}
            setChange={setGenre}
            arrayMap={genres}
            isShowTime={false}
          />
        </label>
        <label className="flex flex-col w-full items-center justify-center bg-sky-950  p-1 rounded text-white">
          Select Release Year
          <Select
            req={true}
            setChange={setReleaseYear}
            arrayMap={years}
            isShowTime={false}
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
            />
            <Select
              req={false}
              setChange={setShowTime2}
              arrayMap={showTimes}
              isShowTime={true}
            />
            <Select
              req={false}
              setChange={setShowTime3}
              arrayMap={showTimes}
              isShowTime={true}
            />
            <Select
              req={false}
              setChange={setShowTime4}
              arrayMap={showTimes}
              isShowTime={true}
            />
            <Select
              req={false}
              setChange={setShowTime5}
              arrayMap={showTimes}
              isShowTime={true}
            />
            <Select
              req={false}
              setChange={setShowTime6}
              arrayMap={showTimes}
              isShowTime={true}
            />
          </div>
        </div>
        <button
          className=" bg-sky-950  p-1 rounded text-white self-center"
          onClick={handleSave}
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default CreateMovie;
