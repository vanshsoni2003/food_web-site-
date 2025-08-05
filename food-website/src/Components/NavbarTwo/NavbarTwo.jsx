import React from 'react'
import "./NavbarTwo.css"

const NavbarTwo = () => {
  return (
    <>
    <div className="grid grid-cols-12 cursor-pointer md:px-20">

        {/* first left */}
        <div className='col-span-12 md:col-span-3 my-5'>
        <div className='bg-lime-600 block sm:inline-block'>
        <details className="dropdown w-full">
  <summary className="bg-lime-600 block"> 
  <div className='flex items-center justify-between gap-6 font-bold text-white department w-full'>
        <i class="fa-solid fa-bars"></i>
        <p>All department</p>
        <i class="fa-solid fa-angle-down "></i>
        </div>
    </summary>
  <ul className="menu dropdown-content w-full bg-white z-0 border-1 border-solid border-gray-200 ">
    <li className='py-2'><a>Item 1</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>
    <li className='py-2'><a>Item 2</a></li>

  </ul>
</details>
</div>
</div>

{/* second right */}
<div className='col-span-12 md:col-span-9'>

    <div className="top">

<div className='flex flex-col sm:flex-row md:gap-12 justify-between'>

      {/* search */}
        <div className=' md:border md:border-gray-200 flex justify-between md:items-center my-5 w-full px-5 sm:px-0 grow-4'>
            <div className='hidden md:block '>
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="">
    <div className='flex gap-2 items-center'><p className='font-bold w-[130px] ps-3'>All Categories</p><i class="fa-solid fa-angle-down"></i></div>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-full p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
            </div>
            <p className='text-gray-300 mx-2 hidden md:block'>|</p>
            <div className='flex items-center w-full'>
                <input className='ps-3 border border-gray-200 w-full h-full sm:border-none sm:text-xl outline-none' type="text" placeholder='What DO You Need ?'/>
            </div>
            <div className='bg-lime-600  text-white px-7 py-4'>Search</div>
        </div>

{/* contact */}
        <div className='flex items-center my-5 sm:my-0 gap-6 px-5 sm:px-0 md:w-[340px] grow-1'>
            <div>
                <i class="fa-solid fa-phone text-lime-600 bg-gray-200 call"></i>
                </div>
            <div>
                <div className='font-extrabold'>+65 11.188.888</div>
                <div className='font-normal'>support 24/7 time</div>
            </div>
        </div>

    </div>
    </div>

    <div className="sm:my-0 relative px-5 md:px-0"> 
        <img className='w-full' src="../public/img/hero/banner.jpg" alt="" />
        <div className=' absolute top-4 left-8 sm:top-20 sm:left-10'>
            <h5 className='text-lime-600 font-bold'>FRUIT FRESH</h5>
            <h1 className='text-2xl sm:text-5xl font-black my-1 sm:my-5'>Vegetable <br />
            100% Organic</h1>
            <p className='text-sm sm:text-xl'>Free Pickup and Delivery Available</p>
            <button className='bg-lime-600 text-white px-6 font-bold py-2 my-3 sm:my-5'>Shop Now</button>
            </div>
    </div>

    </div>

    </div>
    </>
  )
}

export default NavbarTwo