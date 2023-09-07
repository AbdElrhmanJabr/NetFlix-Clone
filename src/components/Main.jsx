import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(requests.requestPopular);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularMovies();
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <>
      <div>
        <div className="w-full h-[550px]">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black z-10 "></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={`${movie?.title}`}
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="text-white absolute top-40 z-10 p-4">
          <h1 className="text-lg font-bold">{movie?.title}</h1>
          <div className="flex items-center gap-2 my-2">
            <button className="border border-gray-300 px-4 py-4 bg-white text-black  font-bold">
              Play
            </button>
            <button className="border border-gray-300 px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 font-bold">
              Watch Later
            </button>
          </div>
          <p className=" text-gray-400 text-sm">{movie?.release_date}</p>
          <p className="w-full xl:max-w-[40%] md:max-w-[50%] lg:max-w-[40%]">
            {movie?.overview}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
