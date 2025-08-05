import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav flex justify-around items-center py-2">
     <div className='border border-gray-200'>
         <img src="../public/img/logo.png" alt="" />
     </div>
     <div>
         <ul className='hidden sm:block md:flex gap-8 cursor-pointer'>
             <li className='font-bold text-black hover:text-lime-600'><NavLink to="/home">HOME</NavLink></li>
             <li className='font-bold text-black hover:text-lime-600'><NavLink  to="/shopdetails">SHOP</NavLink></li>
             <li className='font-bold text-black hover:text-lime-600'>PAGES</li>
             <li className='font-bold text-black hover:text-lime-600'><NavLink to="/blog">BLOG</NavLink></li>
             <li className='font-bold text-black hover:text-lime-600'><NavLink to="/contact">CONTACT</NavLink></li>
         </ul>
     </div>
     <div className='flex items-center gap-4'>
     <i class="fa-solid fa-heart"></i>
     <i class="fa-solid fa-cart-shopping"></i>
     <p>item: <span className='font-bold'>$150.00</span></p>
     </div>
    </div>
    </>
  )
}

export default Navbar