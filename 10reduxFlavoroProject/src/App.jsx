import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Succes from './pages/Success'
import Error from './pages/Error'



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path = '/' element= {<Home/>} />
    <Route path = '/succes' element= {<Succes/>} />
    <Route path='/*' element= {<Error />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App