import { useState, useEffect } from "react";
import { Autoplay, Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";
import Movies from "./Movie";
//import autoprefixer from "autoprefixer";

export default function LatestSlides() {
  const [loading, setLoading] = useState(true);
  const [ratingMovies, setRatingMovies] = useState([]);
  const getRatingMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=year&&limit=20"
    );
    const json = await response.json();
    setRatingMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getRatingMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
          <Swiper
            width={800}
          modules={[Autoplay, Virtual, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
          observer={true}
          centeredSlides={true}
          spaceBetween={20}
          navigation={true}
          virtual
          className="mySwiper"
          style={{ paddingTop: "30px", paddingBottom: "80px" }}
        >
          {ratingMovies.map((m) => (
            <SwiperSlide
              className="shadow-md shadow-gray-100 h-72 flex justify-center"
              key={m.id}
            >
              <div className="w-[150px] h-64 flex flex-wrap justify-center ">
                <Movies
                  id={m.id}
                  title={m.title}
                  img={m.medium_cover_image}
                  rating={m.rating}
                  runtime={m.runtime}
                  genres={m.genres}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
