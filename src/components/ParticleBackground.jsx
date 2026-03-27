'use client';
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.baseSpeedX = Math.random() * 0.2 - 0.1;
        this.baseSpeedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.vx = 0;
        this.vy = 0;
      }

      update(mouseX, mouseY) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        // Mouse Repulsion Logic
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          this.vx += Math.cos(angle) * force * 0.1;
          this.vy += Math.sin(angle) * force * 0.1;
        }

        // Apply velocities
        this.x += this.vx + this.baseSpeedX;
        this.y += this.vy + this.baseSpeedY;

        // Friction / Dampening
        this.vx *= 0.95;
        this.vy *= 0.95;

        const margin = 10;
        
        // Edge Collision Logic with "Anti-Stick" nudge
        if (this.x >= canvas.width - margin) {
          this.x = canvas.width - margin;
          this.vx = -Math.abs(this.vx) * 0.8 - 0.1; // Reverse and nudge left
        } else if (this.x <= margin) {
          this.x = margin;
          this.vx = Math.abs(this.vx) * 0.8 + 0.1; // Reverse and nudge right
        }
        
        if (this.y >= canvas.height - margin) {
          this.y = canvas.height - margin;
          this.vy = -Math.abs(this.vy) * 0.8 - 0.1; // Reverse and nudge up
        } else if (this.y <= margin) {
          this.y = margin;
          this.vy = Math.abs(this.vy) * 0.8 + 0.1; // Reverse and nudge down
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255,255,255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      const particleCount = 60;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(mousePos.current.x, mousePos.current.y);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full pointer-events-none z-99 bg-black text-white'
    />
  );
};

export default ParticleBackground;