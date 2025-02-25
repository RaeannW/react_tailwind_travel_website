import seashell from "../assets/seashell.jpg";
import coupleBeach from "../assets/coupleBeach.jpg";
import resortPool from "../assets/resortPool.jpg";
import sunsetPalmTrees from "../assets/sunsetPalmTrees.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const ImageSlider = () => {
  const slides = [
    {
      url: { seashell },
      title: "Beaches",
    },
    {
      url: { coupleBeach },
      title: "Vacations",
    },
    {
      url: { resortPool },
      title: "Hotels",
    },
    {
      url: { sunsetPalmTrees },
      title: "Attractions",
    },
  ];
  return (
    <>
    <div className="max-w-[100%] w-full h-[750px] m-auto py-16 relative">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[0].url})` }}
      ></div>

      <div className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft size={30}/>
      </div>
      <div className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactRight size={30}/>
      </div>

    </div>
    </>
  );
};
