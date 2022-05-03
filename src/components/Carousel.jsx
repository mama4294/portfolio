import { useState } from "react";
import Swipe from "react-easy-swipe";


export const Carousel= ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };


  return (
    <div className="relative">
      <button
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
          <svg 
            className="h-8 w-8"
            viewBox="0 0 26.002 45.999"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z"/>
         </svg>
      </button>
      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <img
                    key={index}
                    className="bg-contain bg-center"
                    src={process.env.PUBLIC_URL + image.url}
                    alt={image.url}
                />
              );
            }
          })}
        </Swipe>
      </div>
      <button
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
          <svg 
            className="h-8 w-8"
            viewBox="0 0 26.002 45.999"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M1.004,40.094c-1.338,1.352-1.338,3.541,0,4.893c1.336,1.35,3.506,1.352,4.844,0l19.15-19.539  c1.338-1.352,1.338-3.543,0-4.895L5.848,1.014c-1.338-1.352-3.506-1.352-4.844,0s-1.338,3.541-0.002,4.893L16.707,23L1.004,40.094z"/>
         </svg>
      </button>

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel