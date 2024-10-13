import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movies({id,
  title,
  rating,
  runtime,
  img,
  
}) {
  return (
    <div className=" ">
      <img className="pb-1 h-48 justify-center" src={img} alt={title} />
      <p className="text-center font-bold text-xl hover:underline ">
        <Link to={`movie/${id}`}>{title}</Link>
      </p>

      <p className="text-xs text-center">
        ⭐{rating} ⏳ {runtime} min
      </p>
      
    </div>
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
