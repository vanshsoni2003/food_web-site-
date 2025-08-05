import React from 'react'
import "./Contact.css"
import Navbar from '../../Components/Navbar/Navbar'
import NavbarTwo from '../../Components/NavbarTwo/NavbarTwo'
import Footer from '../../Components/Footer'

const Contact = () => {
  return (
    <>
    {/* <Navbar/> */}
    {/* <NavbarTwo/> */}
     <div className="banner-img text-center text-white flex flex-col justify-center">
      <div><p className='font-black  text-5xl'>Contact Us</p>
      <p className='font-extrabold'>Home -<span className='font-normal'> Contact-us</span></p></div>
    </div>

    <div className="li-items grid grid-cols-2 sm:grid-cols-4">
        <div className='flex flex-col items-center gap-2'>
        <i class="fa-solid fa-phone text-4xl text-lime-600"></i>
        <p className='font-extrabold text-2xl'>Phone</p>
        <p>+01-3-8888-6868</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
        <i class="fa-solid fa-location-dot text-4xl text-lime-600"></i>
        <p className='font-extrabold text-2xl'>Address</p>
        <p>60-49 Road 11378 New York

</p>
        </div>
        
        <div className='flex flex-col items-center gap-2'>
        <i class="fa-regular fa-clock text-4xl text-lime-600"></i>
        <p className='font-extrabold text-2xl'>Open time
        </p>
        <p>10:00 am to 23:00 pm</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
        <i class="fa-regular fa-envelope text-4xl text-lime-600"></i>
        <p className='font-extrabold text-2xl'>Email</p>
        <p>hello@colorlib.com

</p>
        </div>
    </div>

    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1836.3318110872094!2d72.5068859064682!3d22.99939379375753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742987144832!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="form text-center">
        <h1 className='text-4xl font-extrabold text-center'>Leave Message</h1>

        <div className='flex flex-col gap-6'>
          <div className='grid grid-rows-1 grid-cols-2 gap-6'>
          <input className='border border-gray-300' type="text" placeholder='Your name' />
          <input className='border border-gray-300' type="text" placeholder='Your Email' />
          </div>
          <div className='grid grid-cols-1'>
          <textarea className='border border-gray-300' placeholder='Your Message'></textarea>
          </div>
        </div>

        <button type='submit' className='submit bg-lime-600 text-white font-bold text-xl'>Send Message</button>
 
    </div>
    <Footer/>

    </>
  )
}

export default Contact