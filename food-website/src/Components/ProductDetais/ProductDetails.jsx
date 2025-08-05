import React from 'react'
import "./ProductDetails.css"

const ProductDetails = () => {
  return (
   <>
   <div className="details grid grid-cols-1 sm:grid-cols-2">
    <div className="dt-left">
        <img src="./public/img/product/details/product-details-1.jpg" alt="" />
        <div className='carousel'></div>
    </div>
    <div className="dt-right">
        <p className='font-black text-2xl'>Vetgetable’s Package</p>
        <p className='text-red-500'>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-11" className="rating-hidden" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="0.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="1.5 star" defaultChecked />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="2 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="2.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="3 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="3.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="4 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="4.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="5 star" />
</div>
            (18 reviews)</p>
        <p className='text-3xl text-red-500'>$50.00</p>
        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
        <div className="dt-btns">
            <div></div>
            <div className='bg-lime-600 text-white inline-block '>ADD TO CART</div>
            <div></div>
        </div>

        <hr className='text-gray-200'/>

        <div className='font-semibold flex gap-16'>
            <div>
            <p>Availability</p>
            <p>Shipping</p>
            <p>Weight</p>
            <p>Share on</p>
            </div>
            <div className='font-normal'>
                <p>In Stock</p>
                <p>01 day shipping. <span className='text-red-500'>Free pickup today</span></p>
                <p>0.5 kg</p>
                <div className='flex gap-4 items-center'>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            </div>
            </div>
        </div>
    </div>

   </div>

   
   </>
  )
}

export default ProductDetails