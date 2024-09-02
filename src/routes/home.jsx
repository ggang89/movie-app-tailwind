import { useState, useEffect } from "react";
import Movies from "../Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const reponse = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await reponse.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h1 className="text-red-600 text-3xl font-bold">Movies</h1>
      <div>
        {loading ? (
          <h1>Loading ..🐧...🐧..</h1>
        ) : (
          <>
            {movies.map((m) => (
              <div className="border w-fit" key={m.id}>
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


