import { useEffect, useState } from "react";
import LatestMovies from "../components/latestMovies";

export default function Latest() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=year&&limit=20"
    );
    const json = await response.json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);
  return (
    <div className=" h-vh flex justify-center bg-black text-white p-3 ">
      {loading ? (
        <div className="h-dvh flex items-center bg-black text-center text-4xl font-bold">
          <p className="text-center text-4xl font-bold">Loading...🐧...</p>
        </div>
      ) : (
        <>
        

          <div className="  flex flex-wrap justify-center">
            {movies.map((m) => (
              <div
                key={m.id}
                className="shadow-lg shadow-gray-400 w-1/4 p-3 m-10 "
              >
                <LatestMovies
                  id={m.id}
                  title={m.title}
                  rating={m.rating}
                  runtime={m.runtime}
                  genres={m.genres}
                  img={m.medium_cover_image}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
