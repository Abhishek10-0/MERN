import React, {useState} from 'react'


function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}} >
       
       <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-20'> 

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 bg-red-500 border border-black rounded-3xl'> Red </button>
          <button 
          onClick={() => setColor("green")}
          className='outline-none px-4 bg-green-500 border border-black rounded-3xl'>Green</button>
          <button 
          onClick={() => setColor("blue")}
          className='outline-none px-4 bg-blue-500 border border-black rounded-3xl'>Blue</button>

        </div>
       </div>
    </div>
  )
}

export default App