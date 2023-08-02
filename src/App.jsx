import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar/Navbar'
import ProductList from './Components/ProductsList/ProductList'




function App() {
  

  return (
    <>
      <Navbar/>

      <ProductList/>
    </>
  )
}

export default App
