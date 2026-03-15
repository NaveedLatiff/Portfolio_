'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import OverlayMenu from './OverlayMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIconPosition, setMenuIconPosition] = useState({ x: 0, y: 0 });
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuIconPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (menuButtonRef.current) {
        const rect = menuButtonRef.current.getBoundingClientRect();
        setMenuIconPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className='fixed top-0 left-0 w-full  z-100'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12 py-3'>
          <div className='flex justify-between items-center'>
            
           
            <Link href="/" className='text-2xl font-bold text-white italic font-poppins'>
              NAVEED LATIF
            </Link>

            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className='flex items-center justify-center w-12 h-12 rounded-full cursor-pointer text-white hover:bg-gray-800 transition-all duration-300'
            >
              <HiMenu size={24} />
            </button>

            <Link href="/contact" className='hidden md:block'>
              <button className='gradient-button relative overflow-hiddn px-6 py-2.5 rounded-full font-medium cursor-pointer bg-linear-to-r from bg-pink-500 to to-blue-500 text-white bg-black'>
                <span className='relative z-10'>Reach Out</span>
              </button>
            </Link>

          </div>
        </div>
      </nav>

      <OverlayMenu 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        menuIconPosition={menuIconPosition}
      />
    </>
  );
};

export default Navbar;