import React,{useState} from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count+1);

  }

  const handleDecrement = () =>{
    setCount(count -1);
  }

  return (
   <div className='bg-gray-300 border flex flex-col items-center justify-center h-screen'>
   

   <button onClick={handleIncrement} className='bg-gray-500 p-4 border-2 rounded-2xl'>
    Increment
   </button>
   <p>{count}</p>
   <button onClick={handleDecrement} className='bg-gray-500 p-4 border-2 rounded-2xl'>
    Decrement
   </button>

   </div>
  )
}

export default App