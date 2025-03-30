import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar';

const SingleBlog = () => {

    const data = useLoaderData()

    const {title,image,category,author,reading_time,content,tags,published_date} =data[0];

    
    console.log(data)
  return (
    <div>
    <div className='py-40 px-4 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl leading-sung font-bold mb-5'>Single Blog Page</h2>
    </div>

    <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
        <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />
        </div>
        <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
        <p className='mb-3 text-gray-600'><FaUser className=' inline-flex items-center mr-2'/>{author}||{published_date}</p>
        <p className='mb-3 text-gray-600'><FaClock className=' inline-flex items-center mr-2'/>{reading_time}</p>
        <p className='text-gray-500 text-base mb-6'>{content }</p>
        </div>
        <div className='lg:w-1/2'>
            <SideBar/>
        </div>
     
    </div>
        
  
</div>
  )
}

export default SingleBlog