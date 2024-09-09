import { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Movies from "./Movie";

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
          width={600}
          //height={800}
          modules={[Virtual, Navigation, Pagination]}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
          autoplay:true
          centeredSlides={true}
          spaceBetween={20}
          navigation={true}
          loop={true}
          virtual
        >
          {ratingMovies.map((m) => (
            <SwiperSlide
              className="shadow-lg shadow-gray-700 w-1/4 p-3"
              key={m.id}
            >
              {/* <div>
                <p>{m.title}</p>
                <img src={m.medium_cover_image} alt={m.title} />
              </div> */}
              <Movies
                id={m.id}
                title={m.title}
                img={m.medium_cover_image}
                rating={m.rating}
                runtime={m.runtime}
                genres={m.genres}
             
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
