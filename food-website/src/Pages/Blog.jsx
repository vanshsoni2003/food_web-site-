import React from 'react'
import BlogPageCard from '../Components/BlogCard/BlogPageCard'

const Blog = () => {
  return (
    <>
    <div className="banner-img text-center text-white flex flex-col justify-center">
      <div><p className='font-black  text-5xl'>Blog</p>
      <p className='font-extrabold'>Home -<span className='font-normal'>Blog</span></p></div>
    </div>

    {/* Blog */}

    <div className="grid grid-cols-12 px-5 md:px-20">
        {/* Blog Left */}
        <div className='grid col-span-12 md:col-span-4'>
            {/* input */}
            <div className='border border-gray-200 py-2 px-3 rounded-full flex justify-between items-center my-5'>
                <input type="text" placeholder='Search...'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* Categories */}
            <div className='my-5'>
                <h2 className='font-black text-2xl'>Categories</h2>
                <ul className='my-5'>
                    <li className='mt-4'>All</li>
                    <li className='mt-4'>Beauty(20)</li>
                    <li className='mt-4'>Food (5)</li>
                    <li className='mt-4'>ife Style (9)</li>
                    <li className='mt-4'>Travel (10)</li>
                </ul>
            </div>

            {/* Recent News */}
            <div className='flex flex-col gap-3 my-5'>
            <h2 className='font-black text-2xl'>Recent News</h2>
            <div className='flex gap-3 items-center my-5'>
                <div><img src="./public/img/blog/sidebar/sr-1.jpg" alt="" /></div>
                <div className='flex flex-col gap-2'>
                    <p className='font-extrabold'>09 Kinds of vegetables <br /> protect the Liver</p>
                    <p className='text-sm text-gray-500'>MAR 05, 2019</p>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <div><img src="./public/img/blog/sidebar/sr-2.jpg" alt="" /></div>
                <div className='flex flex-col gap-2'>
                    <p className='font-extrabold'>09 Kinds of vegetables <br /> protect the Liver</p>
                    <p className='text-sm text-gray-500'>MAR 05, 2019</p>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <div><img src="./public/img/blog/sidebar/sr-3.jpg" alt="" /></div>
                <div className='flex flex-col gap-2'>
                    <p className='font-extrabold'>09 Kinds of vegetables <br /> protect the Liver</p>
                    <p className='text-sm text-gray-500'>MAR 05, 2019</p>
                </div>
            </div>
            </div>

            {/* Search By */}
            <div className='my-5'>
            <h2 className='font-black text-2xl'>Search By</h2>
            <div className="flex flex-col gap-2 my-5">
                <div className="flex gap-2">
                    <p className='bg-gray-200 px-7 py-2'>Apple</p>
                    <p className='bg-gray-200 px-7 py-2'>Beauty</p>
                    <p className='bg-gray-200 px-7 py-2'>Vegetables</p>
                </div>
                <div className="flex gap-2">
                <p className='bg-gray-200 px-7 py-2'>Food</p>
                    <p className='bg-gray-200 px-7 py-2'>Healthy Food</p>
                    <p className='bg-gray-200 px-7 py-2'>LifeStyle</p>
                </div>
            </div>
            </div>
        </div>


        {/* Blog Right */}
        <div className='col-span-12 md:col-span-8'>
            <BlogPageCard/>
        </div>
    </div>
    </>
  )
}

export default Blog