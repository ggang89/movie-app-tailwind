import { useState, useEffect } from "react";
import Movies from "../components/Movie";
import { Link } from "react-router-dom";
import Slides from "../components/Ratingslides";
import RatingSlides from "../components/Ratingslides";
import LatestSlides from "../components/latestSlides";
// import { Virtual, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState([]);
  const [ratingMovies, setRatingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const getRatingMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setRatingMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getRatingMovies();
  }, []);

  const getOneMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=1`
    );
    const json = await response.json();
    setTop(json.data.movies);
    console.log(json);
  };
  useEffect(() => {
    getOneMovie();
  });
  const getLatestMovie = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=year&&limit=20"
    );
    const json = await response.json();
    setLatestMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getLatestMovie();
  });

  return (
    <>
      <div className=" h-vh flex flex-wrap justify-center bg-black text-white p-3">
        {loading ? (
          <div className="h-dvh flex items-center  bg-black text-center text-4xl font-bold">
            <h1 className="text-center text-4xl font-bold">
              ..🐧...🐧...Loading ..🐧...🐧..
            </h1>
          </div>
        ) : (
          <div className="flex-wrap ">
            <div>
              {top.map((m) => (
                <div
                  key={m.id}
                  className="bg-cover w-screen h-dvh relative
                  bg-[url('./image/bluey.jpg')]"
                >
                  <div className="absolute bottom-0 w-2/4 h-2/5 bg-black opacity-70 leading-7 p-5  text-white">
                    <h1 className="text-5xl font-bold italic pb-3 hover:underline flex">
                      <img
                        className="pr-4"
                        src={m.small_cover_image}
                        alt={m.title}
                      />
                      <Link to={`movie/${m.id}`}>{m.title}</Link>
                    </h1>

                    <p className=" font-semibold text-xl flex">
                      💥{m.year} &nbsp;⭐{m.rating}
                    </p>
                    <p className=" flex">
                      &nbsp;
                      {m.genres.map((g) => (
                        <span
                          key={g}
                          className="bg-red-700 rounded-xl m-0.5 pr-1.5"
                        >
                          &nbsp; {g}&nbsp;
                        </span>
                      ))}
                    </p>
                    <p className="  flex italic">{m.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="m-1 h-96">
              <h1 className="ml-2 text-center w-16 border rounded-full">
                최신순
              </h1>
              <LatestSlides />
              {/* <div className=" ">
                {latestMovies.map((m) => (
                  <div
                    className=" shadow-lg shadow-gray-400 w-40 p-3 m-5  "
                    key={m.id}
                  >
                    <Movies
                      id={m.id}
                      title={m.title}
                      img={m.medium_cover_image}
                      rating={m.rating}
                      runtime={m.runtime}
                      genres={m.genres}
                      year={m.year}
                    />
                  </div>
                ))}
              </div> */}
            </div>

            <div className="border h-80 ">
              <h3 className="ml-2 text-center w-16 border rounded-full">
                평점순
              </h3>

              <RatingSlides />
              {/* <>
                {ratingMovies.map((m) => (
                  <div
                    className=" shadow-lg shadow-gray-400 w-40 p-5 m-10 hover:bg-opacity-5 "
                    key={m.id}
                  >
                    <Movies
                      id={m.id}
                      title={m.title}
                      img={m.medium_cover_image}
                      rating={m.rating}
                      runtime={m.runtime}
                      genres={m.genres}
                      year={m.year}
                    />
                  </div>
                ))}
              </> */}
            </div>
          </div>
        )}
      </div>
      {/* 메뉴 밑에 보이는 화면  */}
    </>
  );
}
