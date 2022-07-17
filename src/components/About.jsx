import React from 'react';
import team from "../assets/team.jpg";
const About = () => {
  return (
    <div className="relative w-full bg-purple-300 h-[55rem] md:h-[35rem] mt-[26rem] mb-3  md:mt-[20rem] ">
      <div className=" w-full h-fit grid gap-3 grid-cols-1 md:grid-cols-2 bg-purple-200 p-8 ">
        <div className="'bg-pink-50">
          <img className="w-full h-fit" src={team} />
        </div>
        <div className="'bg-pink-50 w-full h-[100%]">
          <div className='bg-pink-50 p-4 md:grid grid-col-1 md:p-8'>
            <div className='pt-5'>
              <h1 className='text-4xl text-left  md:text-4xl font-bold'>About Us</h1>
            </div>
            <div className='mt-5 grid  gap-[2rem] pr-[25%] '>
              <div className=''>
                <h1 className='text-xl text-left  md:text-2xl font-semibold'>Why we started</h1>
                <p>Traditional investment opportunites are generally very expensive and require huge capital investment. ZenStreet was created with the low income earner in mind.</p>
              </div>
              <div>
                <h1 className='text-xl text-left  md:text-2xl font-semibold'>What we do</h1>
                <p>We offer simple, and affordable investment solutions by providing you with highly affordable financial opportunities, a chance to pool resources with others and collectively provide liquid to capital intensive projects. Make and split the profit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;