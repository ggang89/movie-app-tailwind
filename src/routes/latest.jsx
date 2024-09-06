import { useEffect, useState } from "react";
import LatestMovies from "../components/latestMovies";

export default function Latest() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=year&&limit=10"
    );
    const json = await response.json();
    console.log(json.data.movies);
    setMovies(json.data.movies);//왜 안나와
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);
  return (
    <>
      {loading ? (
        <div>
          <p>Loading...🐧...</p>
        </div>
      ) : (
        <>
          {movies.map((m) => (
            <div key={m.id}>
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
        </>
      )}
    </>
  );
}
