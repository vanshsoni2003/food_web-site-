import React from 'react'
// import Product from '../Components/Product/Product'
import "./Carousel.css"
import Product from '../Product/Product'

const Carousel = () => {
  return (
    <>
    <div className='cro my-12 px-5 sm:px-20'>
    <div className="carousel rounded-box w-full gap-3 sm:gap-5">
      <div className="carousel-item">
        <Product/>
      </div>
      <div className="carousel-item">
        <Product/>
      </div>
      <div className="carousel-item">
        <Product/>
      </div>
      <div className="carousel-item">
        <Product/>
      </div>
      <div className="carousel-item">
        <Product/>
      </div>
      <div className="carousel-item">
        <Product/>
      </div>
      <div className="carousel-item">
        <Product/>
      </div>
</div>

</div>

    </>
  )
}

export default Carousel