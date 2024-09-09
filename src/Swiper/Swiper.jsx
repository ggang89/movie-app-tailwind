import { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import SwiperCore,{ Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slides() {
  SwiperCore.use({ Navigation, Pagination });
  const [ratingMovies, setRatingMovies] = useState(
    Array.from({ length: 20 }).map((_, index) => `Slide ${index + 1}`)
  );
  const [loading, setLoading] = useState(true);
  //const [ratingMovies, setRatingMovies] = useState([]);
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


  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          scrollbar={{draggable:true}}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={50}
          pagination={{
            clickable:true
          }}
          navigation={true}
          virtual
        >
          {ratingMovies.map((m,index) => (
            <SwiperSlide key={index}>
              <div>
                <p>{m.title}</p>
                <img src={m.medium_cover_image} alt={m.title} />
              </div>
            </SwiperSlide>
          ))}
            {/* {children.map((child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))} */}
        </Swiper>
      )}
    </>
  );
}
