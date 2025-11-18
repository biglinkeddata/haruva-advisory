import { useEffect, useRef } from 'react';

const PerlinNoiseFlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Simplified Perlin noise approximation
    const noise = (x: number, y: number) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      const u = fade(x);
      const v = fade(y);
      return lerp(v,
        lerp(u, grad(X, Y), grad(X + 1, Y)),
        lerp(u, grad(X, Y + 1), grad(X + 1, Y + 1))
      );
    };

    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t: number, a: number, b: number) => a + t * (b - a);
    const grad = (x: number, y: number) => {
      const h = (x * 127 + y * 311) & 255;
      return Math.sin(h * 0.1) * Math.cos(h * 0.05);
    };

    const animate = () => {
      time += 0.002;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 30;
      const scale = 0.01;
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          const n = noise((x + time * 50) * scale, (y + time * 30) * scale);
          const angle = n * Math.PI * 2;
          const length = Math.abs(n) * 15;
          
          const endX = x + Math.cos(angle) * length;
          const endY = y + Math.sin(angle) * length;
          
          // Green color variations using HSL
          const hue = 150 + n * 20;
          const saturation = 60 + Math.abs(n) * 20;
          const lightness = 45 + Math.abs(n) * 15;
          const alpha = 0.3 + Math.abs(n) * 0.4;
          
          ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default PerlinNoiseFlow;
