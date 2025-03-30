import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars, FaFacebook, FaInstagram, FaSnapchat, FaXmark } from "react-icons/fa6";
import Modal from './Modal';
// react Icons
 const Navbar = () => {


  const [isMenuOpen,setIsMenuOpen ] = useState(false)
  const [isModalOpen,setIsModelOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


    const navItems = [
        {path: "/", link:"Home"},
        {path: "/about", link:"About"},
        {path: "/blogs", link:"Blogs"},
        {path: "/contact", link:"Contact"},
        {path: "/services", link:"Services"}
        
        ]

        const openModal = () => {
          setIsModelOpen(true)
        }

        const closeModal = () =>{
          setIsMenuOpen(false)
        }

  return (
    <header className='bg-black text-white top-0 left-0 right-0 z-50'>
        <nav className='px-4 py-4 flex items-center justify-between  mx-auto'>
          <a href="/" className='text-xl font-bold text-white'>Logo<span className='text-orange-600'>AK</span></a>
            <ul className='md:flex gap-12 text-lg hidden'>
               {
               navItems.map(({path, link}) => <li className='text-white' key={path}> <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to={path}>{link}</NavLink></li>)
                } 
            </ul>
            <div className='text-white lg:flex gap-4 items-center hidden'>
              <a href="" className='hover:text-orange-500 text-2xl'><FaFacebook/></a>
              <a href="" className='hover:text-orange-500 text-2xl'><FaSnapchat/></a>
              <a href="" className='hover:text-orange-500 text-2xl'><FaInstagram/></a>
              <button onClick={openModal} className='bg-orange-600 px-4 py-2 rounded hover:bg-white hover:text-orange-500 tr ansition-all duration-300 ease'>Login</button>

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}/>

            {/* mobile menu */}

            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                  {
                    isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                  }
                  </button>
            </div>

           
        </nav>

         {/* menu items only for mobile */}
         <div >
         
         <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white  ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all duration-150 ease-out' : 'hidden'}`}>
             {navItems.map(({path, link}) => <li className='text-black' key={path}> <NavLink onClick={toggleMenu} to={path}>{link}</NavLink></li>)}
         </ul>


  
          </div>

    </header>
  )
}
   

export default Navbar