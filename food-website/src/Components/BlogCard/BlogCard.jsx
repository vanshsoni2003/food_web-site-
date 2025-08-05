import React from 'react'
import BlogCardOne from './BlogCardOne'
import BlogCardTwo from './BlogCardTwo'
import BlogCardThree from './BlogCardThree'

const BlogCard = () => {
  return (
    <>
    <div className="blog-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 gap-8 sm:gap-0">
    <div className="flex justify-center">
    <BlogCardOne/>
    </div>
    <div className="flex justify-center">
    <BlogCardTwo/>
    </div>
   <div className="flex justify-center">
   <BlogCardThree/>
   </div>
    </div>
    </>
  )
}

export default BlogCard