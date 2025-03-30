import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const BlogCard = ({blogs,currentPage,selectedCategory,pageSize}) => {

    const filterBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8'>
       { filterBlogs.map((blog) => <Link key={blog.id} className='shadow-lg p-5 rounded cursor-pointer' to={`/blogs/${blog.id}`}>

        <div>
            <img src={blog.image} alt="" className='w-full' />
        </div>
        <h3 className='mt-4 mb-2  font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3> 
        <p className='mb-2 text-gray-600 '><FaUser className=' inline-flex items-center mr-2'/>{blog.author}</p>
        <p className='text-gray-600 text-sm'>Published : {blog.published_date}</p>

       </Link>) }

    </div>
  )
}

export default BlogCard