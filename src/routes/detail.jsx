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
      {loading ? <p>Loading....🐧</p> : (<>{ movie.title}</>)}
    </>
  )
}