import PropTypes from "prop-types";

export default function Movies({
  title,
  rating,
  runtime,
  genres,
  img,
  year
}) {
  return (
    <>
      <p className="font-bold text-2xl">{title}</p>
      <img src={img} alt={title} />
      <p> year : {year}</p>
      <p> rating: ⭐{rating} / 10</p>
      <p> runtime: ⏳ {runtime} min</p>
      <p>
        Genres:
        {genres.map((g) => (
          <span className="italic"key={g}> {g}&nbsp;</span>
        ))}
      </p>
    </>
  );
}
Movies.propTypes = {
  year:PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};
