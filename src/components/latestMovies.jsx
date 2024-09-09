import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LatestMovies({
  id,
  title,
  rating,
  runtime,
  genres,
  img
}) {
  return (
    <>
     
      <img className="relative left-12 bottom-10" src={img} alt={title} />
      <p className="italic text-center font-bold text-2xl hover:underline ">
        <Link to={`/movie/${id}`}>{title}</Link>
      </p>
      <br />
      <p  className="text-center">
        rating: ⭐{rating} / 10 &emsp;&emsp;runtime: ⏳ {runtime} min
        
      </p>
      
      <p className="pl-8 flex flex-wrap">
        Genres:
        {genres.map((g) => (
          <span className="italic bg-red-700 rounded-xl m-0.5 pr-1 align-middle" key={g}>
            &nbsp; {g}&nbsp;
          </span>
        ))}
      </p>
    </>
  );
}
LatestMovies.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};
