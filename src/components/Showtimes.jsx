import React from "react";

const Showtimes = ({ movie }) => {
  return (
    <div className="grid grid-cols-3 rounded p-2 w-full items-center justify-center gap-2 ">
      <div className="flex items-center justify-center bg-sky-950 p-1 rounded text-white h-full">
        {movie.showTime1}
      </div>
      {movie.showTime2 && (
        <div className="flex items-center justify-center bg-sky-950 p-1 rounded text-white h-full">
          {movie.showTime2}
        </div>
      )}
      {movie.showTime3 && (
        <div className="flex items-center justify-center bg-sky-950 p-1 rounded text-white h-full">
          {movie.showTime3}
        </div>
      )}
      {movie.showTime4 && (
        <div className="flex items-center justify-center bg-sky-950 p-1 rounded text-white h-full">
          {movie.showTime4}
        </div>
      )}
      {movie.showTime5 && (
        <div className="flex items-center justify-center bg-sky-950 p-1 rounded text-white h-full">
          {movie.showTime5}
        </div>
      )}
      {movie.showTime6 && (
        <div className="flex items-center justify-center bg-sky-950 p-1 rounded text-white h-full">
          {movie.showTime6}
        </div>
      )}
    </div>
  );
};

export default Showtimes;
