import React, { useState } from 'react';
import { images } from "../helpers/CaroselData";
import {  ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/outline"
const Carosel = () => {
  const [currentImg, setCurrImg] = useState(0);
 

return(
    <div className=' w-full bg-sky-100 mt-9 h-[35rem] md:h-[20rem] rounded-lg pt-3'>
      
    <div className='text-center m-10  '>
      <h2 className='text-3xl md:2xl font-normal md:text-3xl '>See</h2>
      <h1 className='text-3xl md:3xl font-semibold md:text-4xl'>What Our Clients have to Say </h1>
    </div>
    {/* <div className='  bg-white w-[60%] h-[3rem]  my-7 border-r-4 border-blue-500  rounded-r-md drop-shadow-xl'>
      <h1 className='text-right font-semibold text-2xl pt-1 pr-1 md:hover:my-spacing '>15 Years Experience</h1>
    </div> */}
    <div className='carosel   bg-white h-[20rem] grid-col-1 gap-8 mx-[3rem] md:mx-[17rem] rounded-xl md:grid-cols-2  border-blue-500 drop-shadow-2xl border-2'>
        <div className='carosel-inner w-[100%] h-[100%] m-0 flex flex-row rounded-xl'>
         <div className='left  w-[7%] md:w-[5%] grid place-items-center bg-sky-100 rounded-l-xl' 
          onClick={()=>{currentImg >0 && setCurrImg(currentImg - 1 )}}>
         <ArrowLeftIcon className='w-5 md:w-7'/>
          </div> 
         <div className='center w-[86%] md:w-[90%] bg-white grid place-items-center'>
          <img className='rounded-full w-[6rem]' src={images[currentImg].img} />
            <div className='text-xl text-center pt-0'>
            <h5 className=' font-normal'>{images[currentImg].name}</h5>
            <h2 className='font-semibold'>"{images[currentImg].comment}"</h2>
            </div>
          </div> 
         <div className='right w-[7%] md:w-[5%] grid place-items-center bg-sky-100 rounded-r-xl'
         onClick={()=>{ currentImg < (images.length - 1 )&& setCurrImg(currentImg + 1 )}}>
         <ArrowRightIcon className='w-5 md:w-7'/>
          </div> 
        </div>
    </div>
  

  </div>
)
}

export default Carosel;