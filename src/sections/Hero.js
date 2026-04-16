'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si';
import Image from 'next/image';
import img from '../assests/hero-image.png'

const Hero = () => {
    const scrollToProjects = (e) => {
        e.preventDefault();
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className='min-h-screen w-full relative bg-transparent z-999 overflow-hidden'>
            <div className='absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-52 sm:h-52 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-3xl blink-1'></div>
            <div className='absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-52 sm:h-52 bg-gradient-to-br from-green-400/40 to-teal-500/40 rounded-full blur-3xl blink-2'></div>

            <div className='relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex items-center py-20 lg:py-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full'>

                    <div className='flex flex-col justify-center space-y-4 sm:space-y-1 order-2 lg:order-1'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-poppins pt-4'>
                            Hello, I'm <span className='text-green-400'>Naveed Latif</span>
                        </h1>

                        <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-roboto'>
                            I'm a passionate full-stack developer specializing in building exceptional digital experiences.
                            Currently focused on creating responsive web applications and scalable cloud solutions.
                        </p>

                        <div className='flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4'>
                            <motion.button
                                onClick={scrollToProjects}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.6)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className='font-roboto px-6 sm:px-8 py-2.5 sm:py-3 cursor-pointer bg-gradient-to-r from-green-700 to-blue-500 text-white rounded-3xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base whitespace-nowrap relative overflow-hidden group'
                            >
                                <span className="absolute inset-0 w-full h-full bg-white/10 group-hover:left-full transition-all duration-500 -left-full skew-x-12"></span>
                                <span className="relative z-10">View My Projects</span>
                            </motion.button>
                            <a
                                href="/NaveedLatifResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                locale={false} 
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='font-roboto px-4 sm:px-8 py-2.5 sm:py-3 cursor-pointer bg-white text-black rounded-3xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base whitespace-nowrap'

                                >
                                    My Resume
                                </motion.button>
                            </a>
                        </div>

                        <div className='flex gap-3 sm:gap-4 md:gap-5 text-xl sm:text-2xl md:text-3xl font-medium text-green-400 font-roboto py-5'>
                            <div className='group relative cursor-pointer'>
                                <SiMongodb size={35} className='sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110' style={{ color: '#47A248' }} />
                                <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>MongoDB</span>
                            </div>
                            <div className='group relative cursor-pointer'>
                                <SiExpress size={35} className='sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110' style={{ color: '#FFFFFF' }} />
                                <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Express</span>
                            </div>
                            <div className='group relative cursor-pointer'>
                                <FaReact size={35} className='sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110' style={{ color: '#61DAFB' }} />
                                <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>React</span>
                            </div>
                            <div className='group relative cursor-pointer'>
                                <FaNodeJs size={35} className='sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110' style={{ color: '#339933' }} />
                                <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Node.js</span>
                            </div>
                        </div>

                        <div className='flex gap-4 sm:gap-6 pt-2 sm:pt-4 px-2'>
                            <Link href="https://www.linkedin.com/in/naveed-latif-9702b3287/" target='_blank' className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaLinkedin size={24} className='sm:w-7 sm:h-7' />
                            </Link>
                            <Link href="https://github.com/NaveedLatiff" target='_blank' className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaGithub size={24} className='sm:w-7 sm:h-7' />
                            </Link>
                            <Link href="https://www.instagram.com/_.naveed._69" target='_blank' className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaInstagram size={24} className='sm:w-7 sm:h-7' />
                            </Link>
                            <Link href="https://www.facebook.com/naveed.bhai.900" target='_blank' className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
                                <FaFacebook size={24} className='sm:w-7 sm:h-7' />
                            </Link>
                        </div>
                    </div>

                    <div className='select-none flex flex-col justify-center items-center order-1 lg:order-2'>
                        <div className='relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-md aspect-square robot-float'>
                            <Image
                                src={img}
                                alt="Naveed Latif - Robot"
                                fill
                                className=' object-contain drop-shadow-[0_0_50px_rgba(34,197,94,0.6)]'
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero