import React from 'react'
import Fire2 from './Fire2'
import Fire3 from './Fire3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const Apple = () => {
  
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
        <Route path='/' element={<Fire2/>}></Route>
        <Route path='/:id' element={<Fire2/>}></Route>
        <Route path='/display' element={<Fire3/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Apple