import PropTypes from "prop-types";

export default function Movies({
  title,
  title_long,
  rating,
  runtime,
  genres,
  img,
}) {
  return (
    <>
      <h3 className="font-bold text-2xl">{title_long}</h3>
      <img src={img} alt={title} />
      {/* <p> year : {m.year}</p> */}
      <p> rating: ⭐{rating} / 10</p>
      <p> runtime: ⏳ {runtime} min</p>
      <ul>
        Genres:
        {genres.map((g) => (
          <li key={g}>&nbsp;{g}</li>
        ))}
      </ul>
    </>
  );
}
Movies.propTypes = {
  title: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
