'use client';
import React, { useEffect, useState } from 'react'; 
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const OverlayMenu = ({ isOpen, toggleMenu, menuIconPosition }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      if (typeof window !== 'undefined') {
        setCoords({
          x: (menuIconPosition.x / window.innerWidth) * 100,
          y: (menuIconPosition.y / window.innerHeight) * 100,
        });
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, menuIconPosition]);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu();
  };

  const overlayVariants = {
    hidden: {
      clipPath: `circle(0% at ${coords.x}% ${coords.y}%)`,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    visible: {
      clipPath: `circle(150% at ${coords.x}% ${coords.y}%)`,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className='fixed inset-0 z-[9999]'
          style={{
            background: 'rgba(0,0,0,0.95)',
          }}
        >
          <div className='absolute top-0 left-0 w-full'>
            <div className='container mx-auto px-4 md:px-8 lg:px-12 py-3 flex justify-between items-center'>
              
              <button 
                onClick={() => handleScroll('home')} 
                className='text-2xl font-bold text-white italic font-poppins bg-transparent border-none cursor-pointer'
              >
                NAVEED LATIF
              </button>

              <button
                onClick={toggleMenu}
                className='flex items-center justify-center w-12 h-12 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer'
              >
                <IoClose size={28} />
              </button>
            </div>
          </div>

          <div className='h-full flex items-center justify-center'>
            <div className='text-center space-y-4'>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <button
                    onClick={() => handleScroll(item.id)}
                    className='block w-full bg-transparent border-none cursor-pointer text-2xl md:text-3xl font-poppins text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all duration-300'
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu