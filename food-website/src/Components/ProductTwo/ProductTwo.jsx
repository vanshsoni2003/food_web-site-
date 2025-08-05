import React from 'react'
import "./ProductTwo.css"

const ProductTwo = () => {
  return (
    <>
   <div className="product text-center w-38 sm:w-72 my-5 gap-2">
        <div className="top flex-col justify-center">
            <div>
            <img src="./public/img/featured/feature-1.jpg" alt="" />
            </div>
            <div className="icons flex justify-center gap-4 hidden">
            <i class="fa-solid fa-heart bg-white border border-gray-300 p-4 rounded-full"></i>
            <i class="fa-solid fa-recycle bg-white border border-gray-300 p-4 rounded-full"></i>
            <i class="fa-solid fa-cart-shopping bg-white border border-gray-300 p-4 rounded-full"></i>
            </div>
        </div>
        <div className="btm">
            <div className="tt1">
                <p>Crab Pool Security</p>
                <p className='font-black text-1xl'>$30.00</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductTwo