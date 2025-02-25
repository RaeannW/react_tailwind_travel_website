import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

export const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[100%] bg-[#f4ece4] mx-auto my-20 pt-16 pb-16 px-8 grid lg:grid-cols-3 gap4">
    <div className="lg:top-20 relative lg:col-span-1 col-span-2 md:m-8">
      <h3 className="text-3xl font-bold">Fine Interior Rooms</h3>
      <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quos nulla excepturi recusandae et iure repudiandae doloremque ab odit ea rem voluptas ducimus asperiores, provident officiis illum, quibusdam illo ipsum, fugiat voluptatum accusamus. Dolorem sed nesciunt tempora eum libero officiis!</p>
    </div>

    <div className="grid grid-cols-2 col-span-2 gap-2">
    <img className="object-cover w-full h-full"src={room2}></img>
    <img className="row-span-2 object-cover w-full h-full"src={room3}></img>
    <img className="object-cover w-full h-full"src={room1}></img>
    </div>
    </div>
  )
}