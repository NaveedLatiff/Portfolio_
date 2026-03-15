'use client'
import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler)
  }, []);

  return (
    <div 
      className='pointer-events-none fixed top-0 left-0 z-50'
      style={{ transform: `translate(${position.x - 40}px, ${position.y - 40}px)` }} // Fixed comma
    >
      <div className='w-17 h-17 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80' />
    </div>
  )
}

export default CustomCursor