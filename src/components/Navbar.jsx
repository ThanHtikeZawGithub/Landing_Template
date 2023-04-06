import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex justify-between items-center text-white max-w-[1240px] mx-auto px-4 h-24'>
        <h1 className='text-3xl font-bold text-[#0adf9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer'>HOME</li>
            <li className='p-4 cursor-pointer'>COMPANY</li>
            <li className='p-4 cursor-pointer'>RESOURCES</li>
            <li className='p-4 cursor-pointer'>ABOUT</li>
            <li className='p-4 cursor-pointer'>CONTACT</li>
        </ul>
        <div onClick={()=>setIsOpen(!isOpen)} className='block md:hidden cursor-pointer' >
            {!isOpen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!isOpen ? 'fixed md:hidden left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold text-[#0adf9a]'>REACT.</h1>
            <ul className='p-4'>
            <li className='p-4 cursor-pointer border-b border-gray-600'>HOME</li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>COMPANY</li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>RESOURCES</li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>ABOUT</li>
            <li className='p-4 cursor-pointer'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;