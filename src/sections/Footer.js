'use client';
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className='w-full relative bg-black z-999 border-t border-green-500/20 overflow-hidden'>
            <div className='absolute top-20 right-20 w-52 h-52 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 left-20 w-52 h-52 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse'></div>

            <div className='relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12'>

                    <div className='space-y-4'>
                        <h3 className='text-2xl font-bold text-white font-poppins'>
                            NAVEED <span className='text-green-400'>LATIF</span>
                        </h3>
                        <p className='text-gray-400 text-sm leading-relaxed font-roboto'>
                            Full-Stack Developer passionate about building exceptional digital experiences with modern technologies.
                        </p>
                        <div className='flex gap-4 pt-2'>
                            <a href="https://www.linkedin.com/in/naveed-latif-9702b3287/" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/NaveedLatiff" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.instagram.com/_.naveed._69" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/naveed.bhai.900" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-lg font-semibold text-white font-poppins'>Quick Links</h4>
                        <ul className='space-y-2'>
                            <li>
                                <button onClick={(e) => scrollToSection(e, 'home')} className='text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-roboto bg-transparent border-none cursor-pointer p-0'>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => scrollToSection(e, 'about')} className='text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-roboto bg-transparent border-none cursor-pointer p-0'>
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => scrollToSection(e, 'skills')} className='text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-roboto bg-transparent border-none cursor-pointer p-0'>
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => scrollToSection(e, 'projects')} className='text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-roboto bg-transparent border-none cursor-pointer p-0'>
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => scrollToSection(e, 'contact')} className='text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-roboto bg-transparent border-none cursor-pointer p-0'>
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-lg font-semibold text-white font-poppins'>Services</h4>
                        <ul className='space-y-2'>
                            <li className='text-gray-400 text-sm font-roboto'>Full-Stack Development</li>
                            <li className='text-gray-400 text-sm font-roboto'>DevOps</li>
                            <li className='text-gray-400 text-sm font-roboto'>Database Administrator</li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-lg font-semibold text-white font-poppins'>Get In Touch</h4>
                        <ul className='space-y-3'>
                            <li className='flex items-start gap-3 text-gray-400 text-sm font-roboto'>
                                <HiMail className='text-green-400 mt-1 flex-shrink-0' size={18} />
                                <p className='text-gray-400 text-sm font-roboto'>naveedlatif526@gmail.com</p>
                            </li>
                            <li className='flex items-start gap-3 text-gray-400 text-sm font-roboto'>
                                <HiPhone className='text-green-400 mt-1 flex-shrink-0' size={18} />
                                <p className='text-gray-400 text-sm font-roboto'>+923102331695</p>

                            </li>
                            <li className='flex items-start gap-3 text-gray-400 text-sm font-roboto'>
                                <HiLocationMarker className='text-green-400 mt-1 flex-shrink-0' size={18} />
                                <span>Karachi, Pakistan</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='border-t border-green-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-400 text-sm font-roboto text-center md:text-left'>
                        © {currentYear} Naveed Latif. All rights reserved.
                    </p>
                    <p className='text-gray-400 text-sm font-roboto flex items-center gap-1'>
                        Made with <FaHeart className='text-red-500' size={14} /> by Naveed Latif
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;