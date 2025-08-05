import React from 'react'
import "./BlogCard.css"

const BlogCard = () => {
  return (
    <>
    <div className='w-[370px]'>
      <img src="./public/img/blog/blog-1.jpg" alt="" />

      <div className='blog-dt flex items-center gap-6 text-gray-400'>

      <div className='flex items-center gap-2'>
      <i class="fa-regular fa-calendar"></i>
        <p>May 4,2019</p>
      </div>

      <div className='flex items-center gap-2'>
      <i class="fa-regular fa-comment"></i>
      <p>5</p></div>

      </div>
      <p className='blog-tt font-black text-xl'>Cooking tips make cooking simple</p>
      <p className='w-full text-gray-500'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
    </div>
    </>
  )
}

export default BlogCard