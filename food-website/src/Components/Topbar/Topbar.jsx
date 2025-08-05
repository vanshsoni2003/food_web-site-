import React from 'react'

const Topbar = () => {
  return (
    <>
     <div className="main flex items-center sm:flex justify-around ps-3 pe-3 bg-[#F3F4F5] h-12 hidden sm:block">
        <div className="left gap-8 flex">
            <div className='flex items-center gap-2'>
            <i className="fa-solid fa-envelope"></i>
            <p>nayan@developer.com</p>
            </div>
            |
            <div>
                <p>Free Shipping for all Order of $99
                </p>
                
            </div>
        </div>

        <div className="right flex items-center gap-3">
            <div className='flex gap-4 items-center'>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            </div>
            |
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-5' src="../public/img/language.png" alt="" />
                <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="">English</div>
  <ul tabIndex={0} className="dropdown-content menu  rounded-box z-1 p-2 shadow-sm">
    <li><a className=''>Hindi</a></li>
    <li><a>English</a></li>
  </ul>
</div>
            </div>
            <div>
                {/* Drop down pending */}
            </div>
            <div className='flex items-center gap-2'>
            <i className="fa-solid fa-user"></i>
            <p>login</p>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Topbar