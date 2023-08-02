import React, { useEffect } from 'react';
import './footer.css';
import { FaCartShopping } from "react-icons/fa6";
import { HiShoppingCart} from "react-icons/hi";

const Footer = () => {


  return (
    <footer>
        <ul>
          <li><a href="">Tienda</a></li>
          <li><a href="">Mas vendidos</a></li>
          <li><a href=""><svg width="512" height="512" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8b4513" d="M222.14 58.87A8 8 0 0 0 216 56H54.68l-4.89-26.86A16 16 0 0 0 34.05 16H16a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H83.17a8 8 0 0 1-7.87-6.57L72.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56ZM180 192a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm-96 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12Z"/>
              </svg></a></li>
        </ul>
    </footer>
    );
};

export default Footer;

