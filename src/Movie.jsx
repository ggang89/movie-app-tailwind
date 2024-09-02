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
  console.log(id)
  return (
    <>
      <p className="font-bold text-2xl">
        <Link to={`movie/${id}`}>{title}</Link>
        
      </p>
      <img src={img} alt={title} />
      <p> year : {year}</p>
      <p> rating: ⭐{rating} / 10</p>
      <p> runtime: ⏳ {runtime} min</p>
      <p>
        Genres:
        {genres.map((g) => (
          <span className="italic" key={g}>
            
            {g}&nbsp;
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
