import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movies({id,
  title,
  rating,
  runtime,
  genres,
  img,
  
}) {
  return (
    <>
      <img className="pb-1" src={img} alt={title} />
      <p className="text-center font-bold text-xl hover:underline ">
        <Link to={`movie/${id}`}>{title}</Link>
      </p>
      {/* <p className="text-sm text-center"> year : {year}</p> */}
      
      <p className="text-sm text-center">
        ⭐{rating} ⏳ {runtime} min
      </p>
      <>
        {genres.map((g) => (
          <span
            className="italic text-xs align-middle bg-red-500 rounded-xl m-0.5 pr-1.5"
            key={g}
          >
            &nbsp; {g}&nbsp;
          </span>
        ))}
      </>
    </>
  );
}
Movies.propTypes = {
  id:PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};
