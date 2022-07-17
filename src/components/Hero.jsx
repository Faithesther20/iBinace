import React from 'react'
import profman from "../assets/proffessional-man2.jpeg"
const Hero = () => {
  return (
    <div className='w-full h-fit  flex flex-col justify-between'>
      <div className='grid  md:grid-cols-2   mt-20 px-16 md:px-40 drop-shadow-2xl'>
        <div className='flex flex-col bg-sky-50  gap-2  px-5 rounded-3xl max-height[391px] md:gap-0 justify-between '>
          <div className='w-full text-center md:text-left mt-7'>
            <h2 className='text-3xl  font-medium  first-letter md:text-4xl md:mt-[7rem]'>We are a team of </h2>
            <h1 className='text-4xl font-bold'>Highly <span className='underline decoration-blue-500'>Skilled</span> Experts</h1>
          </div>
          <div className='text-center md:w-[80%] md:text-justify mb-3 no-wrap md:mb-[7rem]'>
          <p className='text-[1.1rem] '>ZenStreet is built on the back of an established
            team of experts  with the aim of creating a safe and robust crowdlending enviroment for our contributors.
         </p>
          <h4 className='font-bold mt-3 text-md text-lg text-blue-500'>Yes! That Is What We Do Best</h4>
        </div>
        <div className='flex justify-center md:justify-start '>
          <button className='md:mt-0'>Begin your Journey</button>
        </div>
      </div>
      <div className='w-full h-full rounded-b-3xl md:rounded-r-3xl'>
        <img className='w-full h-full rounded-b-3xl md:rounded-r-3xl' src={profman} alt="proffessional man"/>
      </div>
      </div>
    </div>
  )
}

export default Hero