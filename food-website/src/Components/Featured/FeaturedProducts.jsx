import React from 'react'
import "./FeaturedProducts.css"
import ProductTwo from '../ProductTwo/ProductTwo'

const FeaturedProducts = () => {
  return (
    <>
    <div className="pr-two px-5 sm:px-16">
    <div className=" flex-col sm:flex-row items-center">
    <div className='featured'>
    <div className='flex items-center flex-col gap-3'>
    <h1 className='text-4xl font-black'>Featured Products</h1>
    <div className='border-b-4 w-24 border-lime-600'></div>
    </div>

    <div className="container">
      <div className="row">
      </div>
    </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        <div className='flex justify-center'>
        <ProductTwo/>
        </div>
        
    </div>
    </div>
    </div>
    </>
  )
}

export default FeaturedProducts