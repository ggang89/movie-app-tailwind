import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RatingSlides from "../components/Ratingslides";
import LatestSlides2 from "../components/LatestSlides2";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState([]);

  const getOneMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=1`
    );
    const json = await response.json();
    setTop(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getOneMovie();
  });

  return (
    <>
      <div className=" h-vh flex flex-wrap justify-center bg-black text-white ">
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
                  className="bg-cover w-svw h-dvh relative "
                  style={{ backgroundImage: `url(${m.background_image})` }}
                >
                  <div className="absolute left-3 bottom-1 w-2/4 h-[200px] bg-black opacity-80 leading-7 py-5 px-10 text-white">
                    <h1 className="text-5xl font-bold italic pb-3 hover:underline flex">
                      <img
                        className="pr-4 h-[80px] "
                        src={m.small_cover_image}
                        alt={m.title}
                      />
                      <Link to={`movie/${m.id}`}>{m.title}</Link>
                    </h1>
                    <br />
                    <div className=" font-semibold text-xl flex pl-16">
                      💥{m.year} &nbsp;⭐{m.rating} &nbsp;
                      {m.genres.map((g) => (
                        <span
                          key={g}
                          className="bg-red-700 rounded-xl m-0.5 pr-1.5 h-5 text-xs"
                        >
                          &nbsp; {g}&nbsp;
                        </span>
                      ))}
                    </div>
                  </div>
                  <img
                    className="w-2/5 h-[600px] absolute right-10 bottom-5"
                    src={m.large_cover_image}
                    alt={m.title}
                  />
                </div>
              ))}
            </div>

            <div className="m-3 h-96">
              <h1 className="ml-5 mb-3 text-center w-[160px] border rounded-full">
                <Link to="/latest">최신순 more ▶</Link>
              </h1>
              <LatestSlides2 />
            </div>

            <div className=" m-3  h-96">
              <h3 className="ml-5 mb-3 text-center w-[160px] border rounded-full">
                <Link to="/latest">평점순 more ▶</Link>
              </h3>

              <RatingSlides />
            </div>
          </div>
        )}
      </div>
      {/* 메뉴 밑에 보이는 화면  */}
    </>
  );
}
