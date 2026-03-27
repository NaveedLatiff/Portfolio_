'use client'
import React from 'react';
import { motion } from 'framer-motion';

import {
  FaGitAlt, FaPython, FaAws, FaHtml5, FaCss3Alt, FaJs,
  FaReact, FaNodeJs, FaDocker, FaLinux, FaNpm
} from 'react-icons/fa';
import {
  SiMysql, SiPostgresql, SiRedis, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiExpress, SiTypescript, SiKubernetes,
  SiJenkins, SiNodemon, SiThreedotjs, SiFramer, SiGreensock
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Postgres', icon: <SiPostgresql /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JS', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'GSAP', icon: <SiGreensock /> },
    { name: 'Framer', icon: <SiFramer /> },
    { name: 'Three.js', icon: <SiThreedotjs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'NPM', icon: <FaNpm /> },
    { name: 'Nodemon', icon: <SiNodemon /> },
    { name: 'TS', icon: <SiTypescript /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'K8s', icon: <SiKubernetes /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'Linux', icon: <FaLinux /> },
  ];

 const row1 = skills.slice(0, 8);
  const row2 = skills.slice(8, 16);
  const row3 = skills.slice(16);

  const SliderRow = ({ items, reverse = false, duration = 30 }) => (
    <div className="flex overflow-hidden py-2">
      <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center min-w-[120px]  sm:min-w-[140px] px-6 py-5 mx-3 bg-[#0a0a0a] border border-[#22c55e]/40 sm:border-[#1a1a1a] rounded-xl transition-all duration-300 hover:border-[#22c55e]/40"
          >
            <div className="text-4xl text-400 text-green-300 sm:text-gray-500 sm:group-hover:text-400 transition-colors duration-300">
              {skill.icon}
            </div>
            <span className="mt-3 text-[10px] font-mono tracking-[0.2em] uppercase text-gray-600 sm:group-hover:text-gray-200 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-black relative min-h-screen py-20 z-999 w-full overflow-hidden">
      <div className='text-center mb-8 md:mb-12'>
        <h2 className='text-green-400 text-lg sm:text-xl font-semibold mb-2 font-roboto'>Expertise</h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins'>Skills & Technologies</h1>
      </div>

     <div className="relative flex flex-col gap-4">
        {/* Side Fades for that clean edge look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <SliderRow items={row1} duration={25} />
        <SliderRow items={row2} reverse duration={35} />
        <SliderRow items={row3} duration={30} />
      </div>
    </section>
  );
};

export default Skills