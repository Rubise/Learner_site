import React from 'react';
import { Link } from 'react-router-dom';
import {Images} from '../assets/assets'
import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="p-2 sticky top-0 z-50 bg-[#f2f2f2]" >
      <div className='container mx-auto p-3 flex justify-between items-center relative' style={{width:"90%", margin: "0, auto"}}>
        <div className="flex items-center space-x-2">
          <img src={Images.logo} alt="" className='w-10 h-10'/>
        </div>
        <div className='hidden md:flex items-center space-x-8 text-lg font-medium'>
          <Link to="/" className='hover:text-gray-600 transition duration-150'>Home</Link>
          <Link to="/about" className='hover:text-gray-600 transition duration-150'>Courses</Link>
          <Link to="/pricing" className='hover:text-gray-600 transition duration-150'>Contact</Link>
          <Link to="/tokens" className='hover:text-gray-600 transition duration-150'>More</Link>
          <div className='space-x-6 flex ml-4'> 
            <Link to="/signIn" className='rounded-lg px-3 py-1.5 border-black border-solid border flex items-center space-x-2 hover:bg-gray-100 transition duration-150'>
              <LogIn size={18} />
              <span>Sign In</span>
            </Link>
            <Link to="/start" className='bg-[#CCE0F4] text-white rounded-lg px-6 py-1.5 border border-solid border-black hover:bg-gray-800 transition duration-150'>Start</Link>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>


        <div
          id="mobile-menu"
          className={`
            ${isOpen ? "block" : "hidden"}
            absolute top-full right-0 mt-2 w-full 
            bg-white shadow-lg p-4 
            flex flex-col space-y-3 
            md:hidden 
            border border-gray-100
            z-40
          `}
        >
          
          <Link to="/" className='p-2 hover:bg-gray-100 rounded-md' onClick={toggleMenu}>Home</Link>
          <Link to="/about" className='p-2 hover:bg-gray-100 rounded-md' onClick={toggleMenu}>Courses</Link>
          <Link to="/pricing" className='p-2 hover:bg-gray-100 rounded-md' onClick={toggleMenu}>Contact</Link>
          <Link to="/tokens" className='p-2 hover:bg-gray-100 rounded-md mb-2' onClick={toggleMenu}>More</Link>

          
          <div className='flex flex-col space-y-3 pt-3 border-t border-gray-200'>
            <Link to="/signIn" className='rounded-lg px-3 py-1.5 border-black border-solid border flex items-center justify-center space-x-2 hover:bg-gray-100' onClick={toggleMenu}>
              <LogIn size={18} />
              <span>Sign In</span>
            </Link>
            <Link to="/start" className='bg-[#CCE0F4] text-white rounded-lg px-6 py-1.5 border border-solid border-black text-center hover:bg-gray-800' onClick={toggleMenu}>Start</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;