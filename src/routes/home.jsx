import { useState, useEffect } from "react";
import Movies from "../components/Movie";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
   setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h1 className=" bg-black text-red-700 text-3xl font-bold p-2">
        📽 MOVIES
        <Link to="/">
          <span className="text-slate-300 text-lg p-3  hover:text-yellow-300">
            HOME
          </span>
        </Link>
        <Link to="/latest">
          <span className="text-slate-300 text-lg p-3 pl-0 hover:text-yellow-300">
            최신순
          </span>
        </Link>
        <span className="text-slate-300 text-lg p-3 pl-0  hover:text-yellow-300">
          평점순
        </span>
      </h1>
      <div>
        
      </div>
      <div className=" h-vh flex flex-wrap justify-center bg-black text-white p-3">
        {loading ? (
          <div className="h-dvh flex items-center  bg-black text-center text-4xl font-bold">
            <h1 className="text-center text-4xl font-bold">
              ..🐧...🐧...Loading ..🐧...🐧..
            </h1>
          </div>
        ) : (
          <>
            {movies.map((m) => (
              <div
                className=" shadow-lg shadow-gray-400 w-96 p-5 m-10 hover:bg-opacity-5"
                key={m.id}
              >
                <Movies
                  id={m.id}
                  title={m.title}
                  img={m.medium_cover_image}
                  rating={m.rating}
                  runtime={m.runtime}
                  genres={m.genres}
                  year={m.year}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
