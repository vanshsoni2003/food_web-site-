import React from 'react'
import './Test.css'

const Test = () => {
  return (
    <>
     {/* <div className="product-1 w-68 flex justify-center p-2  rounded-lg mt-5   ">
        <img className='h-60 p-1-img rounded-lg' src="./public/img/categories/cat-1.jpg " alt="" />
        <h2 className='p-1-title text-center text-2xl font-bold '>VEGETABELS</h2>
        
     </div> */}
     <div className="carousel rounded-box ">
  <div className="carousel-item relative w-72 flex justify-center p-2  rounded-lg mt-5">
  
        <img className='h-60 p-1-img rounded-lg' src="./public/img/categories/cat-1.jpg " alt="" />
        <h2 className='absolute bottom-10 left-5 bg-red-400 text-center text-2xl font-bold inline-block '>VEGETABELS</h2>
        
    
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Burger" />
  </div>
</div>
    
    </>
  )
}

export default Test