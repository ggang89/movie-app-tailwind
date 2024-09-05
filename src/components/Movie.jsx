import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movies({id,
  title,
  rating,
  runtime,
  genres,
  img,
  year
}) {
  return (
    <>
      <img className="relative left-12 bottom-10" src={img} alt={title} />
      <p className="text-center font-bold text-2xl hover:underline ">
        <Link to={`movie/${id}`}>{title}</Link>
      </p>
    <br/>
      <p> year : {year}</p>
      <p> rating: ⭐{rating} / 10</p>
      <p> runtime: ⏳ {runtime} min</p>
      <p>
        Genres:
        {genres.map((g) => (
          <span className="italic" key={g}>
            &nbsp; {g}&nbsp;
          </span>
        ))}
      </p>
    </>
  );
}
Movies.propTypes = {
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};
