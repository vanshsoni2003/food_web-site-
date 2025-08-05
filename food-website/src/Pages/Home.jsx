import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import NavbarTwo from '../Components/NavbarTwo/NavbarTwo'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Product from '../Components/Product/Product'
import ProductTwo from '../Components/ProductTwo/ProductTwo'
import "../index.css"
import Carousel from '../Components/Carousel/Carousel'
import Blog from '../Components/Blog'
import FeaturedProducts from '../Components/Featured/FeaturedProducts'
import BlogCard from '../Components/BlogCard/BlogCard'
import Contact from "../Pages/Contact/Contact"
import Test from './Test/Test'

const Home = () => {
  return (
    <>
    <div className='home'>
    {/* <Topbar/> */}
    {/* <Navbar/> */}
    <NavbarTwo/>
    <Carousel/>
    <FeaturedProducts/>
    <Banner/>
    <Blog/>
    <BlogCard/>
    <Footer/>
    {/* <Contact/> */}
    {/* <Test/> */}
    </div>
    </>
  )
}

export default Home