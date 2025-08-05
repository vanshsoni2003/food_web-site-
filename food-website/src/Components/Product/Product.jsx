import React from 'react'
import "./Product.css"

const Product = () => {
  return (
    <>
    <div className='pr-img w-36 sm:w-72 flex justify-center'>
        <img src="./public/img/categories/cat-1.jpg" alt="" />
        <h3 className='pr-tt font-bold text-xs sm:text-2xl px-4 py-1 sm:px-8 text-center bg-white w-auto inline-block'>Fresh Fruit</h3>
    </div>
    </>
  )
}

export default Product