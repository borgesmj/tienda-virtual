import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar/Navbar'
import ProductList from './Components/ProductsList/ProductList'
import Tecnologia from './Components/Pages/Tecnologia/Tecnologia'
import SaludyBelleza from './Components/Pages/SaludyBelleza/SaludyBelleza'
import Otros from './Components/Pages/Otros/Otros'
import Carrito from './Components/Pages/Carrito/Carrito'



function App() {
  

  return (
    <>
      <Navbar/>

      <Router>

      <ProductList/>

          <div className='main'>
            <Routes>
              <Route exact path='/' element={<Tecnologia/>}/>
              <Route path='/SaludyBelleza' element={<SaludyBelleza/>}/>
              <Route path='/Otros' element={<Otros/>}/>
              <Route path='/Carrito' element={<Carrito/>}/>
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App
