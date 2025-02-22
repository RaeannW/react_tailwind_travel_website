import beachHero from '../assets/beachHero.jpg';

export const Hero = () => {
  return (
    <div className="w-full h-screen">
        <img className="top-0 left-0 w-full h-screen object-cover" src={beachHero} alt="beach resort"/>
        {/* overlay that takes up entire parent container*/}
        <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          {/* anything above medium breakpoint will be left 10% */}
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-8'>
            <p>All Inclusive</p>
            <h1 className='headingTop'>Private Beaches & Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aperiam ea, at voluptatibus quod saepe aliquid numquam ab eligendi provident voluptates!
            </p>
            <button className='bg-white text-black hover:shadow-xl'>Reserve Now</button>
          </div>
        </div>

    </div>
  )
}
