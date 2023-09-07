import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, endPoint, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(endPoint);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularMovies();
  }, [endPoint]);

  const scrollLeft = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const scrollRight = () => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div>
        <h3 className="text-white text-xl p-4 font-bold">{title}</h3>
        <div className="group flex items-center">
          <MdChevronLeft
            className="bg-white rounded-full absolute left-1 z-10 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer hidden group-hover:block "
            size={40}
            onClick={scrollLeft}
          />
          <div
            id={`slider ${rowId}`}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
          >
            {movies.map((item, i) => {
              return <Movie key={i} item={item} />;
            })}
          </div>
          <MdChevronRight
            className="bg-white rounded-full absolute right-1 z-10 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer hidden group-hover:block "
            size={40}
            onClick={scrollRight}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
