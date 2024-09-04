import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Detail() {
  const { id } = useParams();
  console.log(id)
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      console.log(json);
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  },[id])
  return (
    <>
      {loading ? (
        <p>Loading....🐧....🐧</p>
      ) : (
        <div
          className="bg-cover "
          style={{ backgroundImage: `url(${movie.background_image})` }}
        >
          <div className="bg-black bg-opacity-30	w-2/5 text-white p-10 m-auto flex flex-col">
            <p className="text-5xl font-extrabold text-center italic">{movie.title}</p>
            <br />
            <img src={movie.medium_cover_image} alt={movie.title} />
            <br />
            <p className=" font-semibold flex">▫ rating: {movie.rating} /10</p>
            <p className=" font-semibold flex">
              ▫ runtime: {movie.runtime} min
            </p>
            <p className=" font-semibold flex">▫ year: {movie.year}</p>
            <p className=" font-semibold flex">
              ▫ genres:
              {movie.genres.map((g) => (
                <span key={g}>&nbsp; {g}</span>
              ))}
            </p>
            <p className=" font-semibold flex">▫ Description</p>
            <p className="italic flex p-3">
              {movie.description_full ? (
                movie.description_full
              ) : (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  in, corrupti expedita quam id libero, nobis architecto,
                  officiis inventore dicta doloremque excepturi quod suscipit
                  incidunt temporibus obcaecati explicabo voluptatem aperiam.
                </p>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}