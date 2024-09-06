import { useState, useEffect } from "react";
import Movies from "../components/Movie";
import { Link } from "react-router-dom";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [top, setTop] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
   setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const getOneMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=1`
    );
    const json = await response.json();
    setTop(json.data.movies);
    console.log(json)
  };
  useEffect(() => {
    getOneMovie();
  })
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
                    <p className="text-5xl font-extrabold  italic pb-3 hover:underline ">
                      <Link to={`movie/${m.id}`}>{m.title}</Link>
                    </p>
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
            <div className="border h-80">
              <h1>최신순</h1>
            </div>
            <div className="border h-80 ">
              <h3 className="w-100 bg-slate-600 ">평점순</h3>

              {movies.map((m) => (
                <div
                  className=" shadow-lg shadow-gray-400 w-48 p-5 m-10 hover:bg-opacity-5 "
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
            </div>
          </div>
        )}
      </div>
      {/* 메뉴 밑에 보이는 화면  */}
    </>
  );
}
