'use client';
import React, { useState, useEffect } from 'react';
import { FaTerminal } from 'react-icons/fa';

const About = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const codeLines = [
        { text: 'const developer = {', indent: 0, color: 'text-purple-400' },
        { text: 'name: "Naveed Latif",', indent: 1, color: 'text-yellow-300' },
        { text: 'role: "Full-Stack Developer",', indent: 1, color: 'text-yellow-300' },
        { text: 'skills: [', indent: 1, color: 'text-purple-400' },
        { text: '"MERN Stack",', indent: 2, color: 'text-green-400' },
        { text: '"DevOps",', indent: 2, color: 'text-green-400' },
        { text: '"Database Administrator",', indent: 2, color: 'text-green-400' },
        { text: '],', indent: 1, color: 'text-purple-400' },
        { text: 'passion: "Building Products ✨",', indent: 1, color: 'text-yellow-300' },
        { text: 'available: true', indent: 1, color: 'text-blue-400' },
        { text: '};', indent: 0, color: 'text-purple-400' },
    ]

    const scrollToContact = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLine((prev) => {
                if (prev >= codeLines.length) {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        setCurrentLine(0); 
                    }, 2000);
                    return prev;
                }
                return prev + 1;
            });
        }, 250);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id='about' className='min-h-screen w-full relative bg-black z-999 overflow-hidden py-16 md:py-20 flex items-center'>
           <div className='absolute top-20 sm:top-40 right-10 sm:right-20 w-32 h-32 sm:w-52 sm:h-52 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-32 h-32 sm:w-52 sm:h-52 bg-gradient-to-br from-green-400/30 to-teal-500/30 rounded-full blur-3xl animate-pulse'></div>

            <div className='relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full'>
                
                <div className='text-center mb-8 md:mb-12'>
                    <h2 className='text-green-400 text-lg sm:text-xl font-semibold mb-2 font-roboto'>Get to know</h2>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins'>About Me</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    
                    <div className='flex justify-center'>
                        <div className='w-full max-w-lg relative group'>
                            <div className='absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000'></div>
                            
                            <div className='relative bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-2xl overflow-hidden shadow-2xl'>
                                <div className='bg-gradient-to-r from-gray-800/90 to-gray-900/90 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-green-500/20'>
                                    <div className='flex items-center gap-2 sm:gap-3'>
                                        <div className='flex gap-1.5 sm:gap-2'>
                                            <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500'></div>
                                            <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500'></div>
                                            <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500'></div>
                                        </div>
                                        <FaTerminal className='text-green-400 ml-1 sm:ml-2' size={12} />
                                        <span className='text-gray-400 text-xs font-mono'>developer.js</span>
                                    </div>
                                    <div className='flex gap-1.5 sm:gap-2 items-center'>
                                        <div className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></div>
                                        <span className='text-green-400 text-xs font-mono hidden sm:inline'>running</span>
                                    </div>
                                </div>
                                
                                <div className='p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm bg-gradient-to-br from-gray-900/50 to-black/50 max-h-[350px] sm:max-h-[400px] overflow-hidden'>
                                    {codeLines.map((line, index) => (
                                        <div
                                            key={index}
                                            className={`transition-all duration-500 flex items-start mb-1 ${
                                                index < currentLine 
                                                    ? 'opacity-100 translate-x-0' 
                                                    : 'opacity-0 -translate-x-4'
                                            }`}
                                            style={{ 
                                                paddingLeft: `${line.indent * 16}px`,
                                                transitionDelay: `${index * 50}ms`
                                            }}
                                        >
                                            <span className='text-gray-600 mr-2 sm:mr-3 select-none min-w-[16px] sm:min-w-[20px] text-right text-[10px] sm:text-xs'>
                                                {index + 1}
                                            </span>
                                            <span className={`${line.color} hover:text-white transition-colors break-all`}>
                                                {line.text}
                                            </span>
                                            {index === currentLine - 1 && isTyping && (
                                                <span className='inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-green-400 ml-1 animate-pulse'></span>
                                            )}
                                        </div>
                                    ))}
                                    
                                    {currentLine >= codeLines.length && (
                                        <div className='mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-green-500/20'>
                                            <div className='flex items-center gap-2 text-green-400 text-xs sm:text-sm'>
                                                <span className='text-gray-500'>›</span>
                                                <span className='animate-pulse'>Let's build! 🚀</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className='bg-gradient-to-r from-green-500/10 to-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 border-t border-green-500/20 flex justify-between items-center'>
                                    <div className='flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-400'>
                                        <span className='flex items-center gap-1'>
                                            <div className='w-1.5 h-1.5 rounded-full bg-green-400'></div>
                                            <span>JavaScript</span>
                                        </span>
                                    </div>
                                    <span className='text-[10px] sm:text-xs text-gray-400'>Ln {currentLine}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-4 sm:space-y-6'>
                        <div className='space-y-3 sm:space-y-4 text-gray-300 font-roboto text-sm sm:text-base md:text-lg leading-relaxed'>
                            <p>
                                I'm a passionate <span className='text-green-400 font-semibold'>Full-Stack Developer</span> with expertise in building modern web applications. I specialize in the MERN stack and have a strong foundation in DevOps practices.
                            </p>
                            <p>
                                My journey in tech started with a curiosity for how things work, and it has evolved into a career where I get to build amazing digital experiences every day.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or sharing my knowledge with the developer community.
                            </p>
                        </div>

                        <div className='pt-2 sm:pt-4'>
                            <button 
                                onClick={scrollToContact}
                                className='relative cursor-pointer px-6 sm:px-8 py-2.5 sm:py-3 bg-white rounded-3xl font-roboto text-sm sm:text-base overflow-hidden group border-none'
                            >
                                <span className='relative z-10 text-black'>Let's Talk</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About