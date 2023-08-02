import React from 'react'
import './ProductList.css'
import BiCart from '../CartIcon'


const ProductList = () => {

  const navigation = [
      {name: 'Tecnología', href: '/tienda-virtual/', current: true},
      {name: 'Salud y Belleza', href: '/tienda-virtual/SaludyBelleza', current: false},
      {name: 'Otros', href: '/tienda-virtual/otros', current: false},
      {name: <BiCart/>, href: '/tienda-virtual/carrito', current: false},
  ]
  return (
    <div className='ProductList'>
        <ul>
            {navigation.map((enlace, index) => (
              <li key={index}><a href={enlace.href}>{enlace.name}</a></li>
            ))}
        </ul>

    </div>
  )
}

export default ProductList


