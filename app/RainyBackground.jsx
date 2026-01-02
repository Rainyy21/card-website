'use client';
import { useEffect, useRef } from 'react';
import './css/main.css';


export default function RainyBackground({ children, intensity = 150 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();

    const raindrops = [];

    class Raindrop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 3 + 4;
        this.opacity = Math.random() * 0.3 + 0.3;
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    for (let i = 0; i < intensity; i++) {
      raindrops.push(new Raindrop());
    }

    let animationId;

    function animate() {
      ctx.fillStyle = 'rgba(30, 41, 59, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      raindrops.forEach(drop => {
        drop.fall();
        drop.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasDimensions();
      raindrops.forEach(drop => drop.reset());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);

  // the return of the background 
  return (
    <div className="relative w-full min-h-screen id='BG' ">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}