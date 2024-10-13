import { useState, useEffect } from "react";
import Movies from "./Movie";

export default function RatingSlides() {
  const [loading, setLoading] = useState(true);
  const [ratingMovies, setRatingMovies] = useState([]);
  const getRatingMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&&limit=7"
    );
    const json = await response.json();
    setRatingMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getRatingMovies();
  }, []);

  return (
    <div className="h-[250px] flex px-7">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {ratingMovies.map((m) => (
            <div
              key={m.id}
              className="shadow-md shadow-gray-100  flex justify-center  mx-4"
            >
              <div className="w-[150px] h-[300px] flex flex-wrap justify-center ">
                <Movies
                  title={m.title}
                  img={m.medium_cover_image}
                  rating={m.rating}
                  runtime={m.runtime}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
