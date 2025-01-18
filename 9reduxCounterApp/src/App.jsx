import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement} from './features/counter/counterSlice'

function App() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
   dispatch(decrement())
  }
  return (
    <>
      <h1>Redux Counter App</h1>

      <button onClick={handleIncrement}>
        Increment
      </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </>
  )
}

export default App