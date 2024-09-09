import  {  useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Movies from "./Movie";

export default function RatingSlides() {
  //const [swiperRef, setSwiperRef] = useState(null);
  // const appendNumber = useRef(500);
  // const prependNumber = useRef(1);
  // Create array with 500 slides
  // const [ratingMovies, setRatingMovies] = useState(
  //   Array.from({ length: 20 }).map((_, index) => `Slide ${index + 1}`)
  // );
  const [loading, setLoading] = useState(true);
  const [ratingMovies, setRatingMovies] = useState([]);
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
        <h1>loading...</h1>
      ) : (
        <Swiper
          width={600}
          modules={[Virtual, Navigation, Pagination]}
          scrollbar={{ draggable: true }}
          slidesPerView={5}
          autoplay:true
          centeredSlides={true}
          spaceBetween={20}
          navigation={true}
          loop={true}
          virtual
        >
          {ratingMovies.map((m) => (
            <SwiperSlide key={m.id}>
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
                year={m.year}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
