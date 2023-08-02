import React from 'react';
import './ProductList.css';
import BiCart from '../CartIcon';
import Tecnologia from '../Pages/Tecnologia/Tecnologia';
import SaludyBelleza from '../Pages/SaludyBelleza/SaludyBelleza';
import Otros from '../Pages/Otros/Otros';
import Carrito from '../Pages/Carrito/Carrito';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const ProductList = () => {
  const navigation = [
    { name: 'Tecnología', href: '/tienda-virtual/', current: true },
    { name: 'Salud y Belleza', href: '/tienda-virtual/SaludyBelleza', current: false },
    { name: 'Otros', href: '/tienda-virtual/otros', current: false },
    { name: <BiCart />, href: '/tienda-virtual/carrito', current: false },
  ];

  return (
    <BrowserRouter className='ProductList'>
      <ul className='listaNavegacion'>
        {navigation.map((enlace, index) => (
          <li key={index}>
            <Link to={enlace.href}>{enlace.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path='/tienda-virtual/' element={<Tecnologia />} />
        <Route path='/tienda-virtual/SaludyBelleza' element={<SaludyBelleza />} />
        <Route path='/tienda-virtual/otros' element={<Otros />} />
        <Route path='/tienda-virtual/carrito' element={<Carrito />} />
      </Routes> 
    </BrowserRouter>
  );
};

export default ProductList;
