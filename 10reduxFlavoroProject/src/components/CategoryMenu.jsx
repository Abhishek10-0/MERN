import React from 'react'

function CategoryMenu() {
  return (
   <div className='mx-6'>
    <h3 className='text-xl '>Find the best food</h3>
    <div className='my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
        <button className='px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
        <button className='px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>BreakFast</button>
        <button className='px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
        <button className='px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Snacks</button>

    </div>
   </div>
  )
}

export default CategoryMenu