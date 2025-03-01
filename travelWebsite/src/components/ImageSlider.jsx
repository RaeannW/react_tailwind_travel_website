import seashell from "../assets/seashell.jpg";
import coupleBeach from "../assets/coupleBeach.jpg";
import resortPool from "../assets/resortPool.jpg";
import sunsetPalmTrees from "../assets/sunsetPalmTrees.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import {RxDotFilled} from "react-icons/rx"

export const ImageSlider = () => {
  const slides = [
    {
      url: seashell,
      title: "Beaches",
    },
    {
      url: coupleBeach,
      title: "Vacations",
    },
    {
      url: resortPool,
      title: "Hotels",
    },
    {
      url: sunsetPalmTrees,
      title: "Attractions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
//function to show progress dots at bottom of slides
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <>
    <div className="max-w-[100%] w-full h-[750px] m-auto py-16 relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="absolute top-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft size={30} onClick={prevSlide}/>
      </div>
      <div className="absolute top-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactRight size={30} onClick={nextSlide}/>
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
            <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled />
            </div>
    ))}
      </div>

    </div>
    </>
  );
};
