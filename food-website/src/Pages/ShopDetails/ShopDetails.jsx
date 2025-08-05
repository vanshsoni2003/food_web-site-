import React from 'react'
import "./ShopDetails.css"
import ProductDetails from '../../Components/ProductDetais/ProductDetails'

const ShopDetails = () => {
  return (
    <>
    <div className="banner-img text-center text-white flex flex-col justify-center">
      <div><p className='font-black  text-5xl'>Vegetable’s Package</p>
      <p className='font-extrabold'>Home Vegitables <span className='font-normal'> Vegetabl's Package</span></p></div>
    </div>

    <ProductDetails/>
    </>
  )
}

export default ShopDetails