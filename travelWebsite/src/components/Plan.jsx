import beachChairs from "../assets/beachChairs.jpg";
import palmTrees from "../assets/palmTrees.jpg";
import flowersRed from "../assets/flowersRed.jpg";
import surfer from "../assets/surfer.jpg";
import water from "../assets/water.jpg";

export const Plan = () => {
  return (
    // anything above large breakpoint, display as grid w 2 columns
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side -- 2 columns & 8 rows*/}
      <div className="grid grid-cols-2 grid-rows-9 h-[80vh]">
        <img className="row-span-5 object-cover w-full h-full p-2" src={beachChairs}></img>
        <img className="row-span-3 object-cover w-full h-full p-2" src={palmTrees}></img>
        <img className="row-span-4 object-cover w-full h-full p-2" src={surfer}></img>
        <img className="row-span-4 object-cover w-full h-full p-2" src={water}></img>
        <img className="row-span-2 object-cover w-full h-full p-2" src={flowersRed}></img>
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          repudiandae?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repudiandae, repellendus dignissimos nostrum accusantium fuga, dicta
          distinctio ipsa veritatis, at expedita voluptates suscipit temporibus
          porro. Neque cum voluptatibus sapiente autem.
        </p>
        <div>
        <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
        <button className="bg-black text-white mr-4 hover:shadow-xl">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};
