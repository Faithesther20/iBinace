import React from 'react'


import { CashIcon, HomeIcon, CollectionIcon, PresentationChartLineIcon } from '@heroicons/react/outline'

const WeDo = () => {
  return (
    <div className=' w-full bg-blue-50 mt-9 h-[41rem] md:h-[22rem] rounded-lg pt-3'>
      
      <div className='text-center m-10  '>
        <h2 className='text-3xl md:2xl font-normal md:text-3xl '>We Offer</h2>
        <h1 className='text-3xl md:3xl font-semibold md:text-4xl'>Services that Leaves our Clients with a Smile</h1>
      </div>
      <div className='  bg-white w-[60%] h-[3rem]  my-7 border-r-4 border-blue-500  rounded-r-md drop-shadow-xl'>
        <h1 className='text-right font-semibold text-2xl pt-1 pr-1 md:hover:my-spacing '>15 Years Experience</h1>
      </div>
      <div className='grid  bg-white  grid-col-1 gap-8 mx-[3rem] rounded-xl md:grid-cols-2 py-[2rem] border-blue-500 drop-shadow-2xl border-2'>
        <div className=' bg-blue-100 py-7 px-9 h-fit rounded-xl flex gap-5 hover:drop-shadow hover:outtl'>
          <div className='rounded-full px-1 py-1 '>
          <PresentationChartLineIcon className='rounded-full w-[2rem] '/>
          </div>
          <div className='content'>
           <h5 className='font-semibold text-xl'> Forex and Private Funding </h5>
           <p>Story of how we work with forex, story, story , story </p>
          </div>
        </div>
        <div className=' bg-blue-100 py-7 px-9 h-fit rounded-xl flex gap-5 hover:drop-shadow'>
          <div className='rounded-full px-1 py-1 '>
          <CashIcon className='rounded-full w-[2rem] '/>
          </div>
          <div className='content'>
           <h5 className='font-semibold text-xl'>Crypto Spaces and Blockchain Technology</h5>
           <p>Story of how we work with Crypto and Blockchain, story, story , story </p>
          </div>
        </div>
        <div className=' bg-blue-100 py-7 px-9 h-fit rounded-xl flex gap-5 hover:drop-shadow'>
          <div className='rounded-full px-1 py-1 '>
          <CollectionIcon className='rounded-full w-[2rem] '/>
          </div>
          <div className='content'>
           <h5 className='font-semibold text-xl'>Stocks</h5>
           <p>Story of how we work with Stocks, story, story , story </p>
          </div>
        </div>
        <div className=' bg-blue-100 py-7 px-9 h-fit rounded-xl flex gap-5 hover:drop-shadow'>
          <div className='rounded-full px-1 py-1 '>
          <HomeIcon className='rounded-full w-[2rem] '/>
          </div>
          <div className='content'>
           <h5 className='font-semibold text-xl'>Real Estate</h5>
           <p>Story of how we work with Real Estate, story, story , story </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default WeDo