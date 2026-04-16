'use client';
import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import OverlayMenu from './OverlayMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIconPosition, setMenuIconPosition] = useState({ x: 0, y: 0 });
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollThreshold = 15;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (menuButtonRef.current) {
        const rect = menuButtonRef.current.getBoundingClientRect();
        setMenuIconPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

      setIsScrolled(currentScrollY > 20);

      if (scrollDiff > scrollThreshold) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-9999 transition-all duration-500 transform ${
          showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isScrolled
            ? 'bg-white/[0.03] backdrop-blur-xl border-b border-white/[0.08]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-3">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white italic font-poppins bg-transparent border-none cursor-pointer"
            >
              NAVEED LATIF
            </button>

            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer text-white hover:bg-white/10 transition-all duration-300"
            >
              <HiMenu size={24} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="relative hidden md:block overflow-hidden px-6 py-2.5 rounded-full font-medium cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 text-white"
            >
              <span className="relative z-10 font-roboto">Reach Out</span>
            </button>
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