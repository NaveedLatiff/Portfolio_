"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import model from "../assests/3d.png";
import gta from "../assests/gta-5.png";
import jobify from "../assests/jobify.png";
import ca from "../assests/k27.png";
import pingly from "../assests/pingly.png";
import shopwise from "../assests/shopwise.png";
import workstudio from "../assests/workstudio.png";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectData = [
    {
      id: 1,
      title: "Jobify",
      category: "Full Stack",
      demo: "http://54.144.102.15/",
      github: "http://54.144.102.15/posted-jobs",
      image: jobify,
      tags: ["Nextjs", "Nodejs", "PostgreSql"],
    },
    {
      id: 2,
      title: "Pingly",
      category: "Full Stack",
      demo: "http://54.242.80.240:3000/",
      github: "https://github.com/NaveedLatiff/Pingly",
      image: pingly,
      tags: ["Nextjs", "Nodejs", "MongoDB", "Socket.IO"],
    },
    {
      id: 3,
      title: "ShopWise",
      category: "Frontend",
      demo: "https://shopwise-naveed.netlify.app/",
      github: "https://github.com/NaveedLatiff/ShopWise",
      image: shopwise,
      tags: ["React", "Tailwind", "Redux"],
    },
    {
      id: 4,
      title: "Works.Studio",
      category: "Frontend",
      demo: "https://workstudionaveed.netlify.app/",
      github: "https://github.com/NaveedLatiff/Works.Studio",
      image: workstudio,
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    },
    {
      id: 5,
      title: "K27.Ca",
      category: "Frontend",
      demo: "https://k72ca.netlify.app/",
      github: "https://github.com/NaveedLatiff/K27.ca",
      image: ca,
      tags: ["Next.js", "Tailwind", "GSAP"],
    },
    {
      id: 6,
      title: "GTA VI",
      category: "Frontend",
      demo: "https://naveed-gta.netlify.app/",
      github: "https://github.com/NaveedLatiff/GTA-VI-Website",
      image: gta,
      tags: ["React", "Tailwind", "GSAP"],
    },
    {
      id: 7,
      title: "3D model",
      category: "Frontend",
      demo: "https://naveed-three.netlify.app/",
      github: "https://github.com/NaveedLatiff/Project-Using-Three.js",
      image: model,
      tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen w-full bg-black z-999 py-20 px-4 md:px-12 relative overflow-hidden">
      <div className="text-center mb-6 md:mb-9 relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-poppins">
          My Projects
        </h1>
      </div>

      <div className="flex justify-center gap-2 sm:gap-4 mb-10 md:mb-16 relative z-20">
        {["All", "Full Stack", "Frontend"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
        px-4 sm:px-8 py-2 rounded-full text-[10px] sm:text-sm 
        font-roboto cursor-pointer transition-all duration-300 border 
        ${
          filter === cat
            ? "bg-green-500 border-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            : "border-zinc-800 text-zinc-400 hover:text-white"
        }
      `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container mx-auto max-w-4xl font-roboto relative z-20 ">
        <Swiper
          key={filter}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={filteredProjects.length >= 2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-20 project-swiper"
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id} className="h-full pb-2 select-none">
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative bg-[#0a0a0a] border border-zinc-900 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 h-full flex flex-col"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="relative h-72 w-full overflow-hidden bg-zinc-900 block cursor-pointer group/img"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaExternalLinkAlt className="text-green-500" size={30} />
                  </div>
                </a>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-500 text-xs font-mono tracking-tighter px-3 py-1 bg-green-500/10 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-poppins text-white mb-4 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded-lg border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-sm text-zinc-300 hover:text-white transition-all duration-300 cursor-pointer group/code"
                  >
                    <FaGithub
                      size={18}
                      className="text-zinc-500 group-hover/code:text-green-500 transition-colors"
                    />
                    <span>View Source Code</span>
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .project-swiper {
          padding-bottom: 50px !important;
        }
        .project-swiper .swiper-pagination {
          bottom: 0px !important;
        }
        .project-swiper .swiper-pagination-bullet {
          background: #27272a;
          opacity: 1;
          margin: 0 6px !important;
        }
        .project-swiper .swiper-pagination-bullet-active {
          background: #22c55e !important;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: #22c55e;
          transform: scale(0.5);
          top: 40%;
        }
      `}</style>
    </section>
  );
};

export default Projects;
