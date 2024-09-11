import  {  useState, useEffect } from "react";
import { Autoplay, Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
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
          width={800}
         
          modules={[Autoplay, Virtual, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
          observer={true}
          centeredSlides={true}
          spaceBetween={20}
          navigation={true}
        
          virtual
          style={{ paddingTop: "30px", paddingBottom: "80px" }}
        >
          {ratingMovies.map((m) => (
            <SwiperSlide
              key={m.id}
              className="shadow-md shadow-gray-100  flex justify-center"
            >
              <div className="w-[150px] h-[300px] flex flex-wrap justify-center ">
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
