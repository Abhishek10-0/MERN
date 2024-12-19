import React from 'react'

function App() {
  return (
    <div>
        <form className='px-4 py-4 bg-slate-300'>
            <input className='border-2 border-black px-5 py-3 rounded-xl' type="text" placeholder='Enter your name:'/>
            <button className='border-2 border-black px-7 py-2 rounded-full bg-red-400 forced-colors:hidden' >Submit</button>
        </form>
    </div>
  )
}

export default App