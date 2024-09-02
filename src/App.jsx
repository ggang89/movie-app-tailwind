import { useState, useEffect } from "react";
import Movies from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const reponse = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await reponse.json();
    console.log(json);
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
              <div key={m.id}>
                <Movies
                  title={m.title_long}
                  img={m.medium_cover_image}
                  rating={m.rating}
                  runtime={m.runtime}
                  genres={m.genres}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
