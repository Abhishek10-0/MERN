import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py- mx-6 mb-10'>
        <div >
        {/* new Date().toUTCString().slice(0,16)   :- Ye line Date ke liye use kar rhe hai Date.now() se value sahi form mai
        nhi aarha tha isliye ye Syntax use kiye hai   */}
            <h3 className='text-xl font-bold text-gray-600'
            >{new Date().toUTCString().slice(0,16)}</h3>   
            <h1 className='text-2xl font-bold'>Flaboro Food's</h1>
        </div>

        <div>
            <input type="search" 
            name='search'
            id=''
            placeholder='Search Here'
            autoComplete='off'
            className='  border border-gray-600 p-3 text-sm rounded-3xl w-full lg:width-25vw'
            />
        
        </div>
    </nav>
  )
}

export default Navbar