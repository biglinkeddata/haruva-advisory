const ParticleBackground = () => {
  const colors = [
    'bg-primary',
    'bg-[hsl(150,60%,55%)]',
    'bg-[hsl(140,65%,45%)]',
    'bg-[hsl(170,60%,50%)]',
    'bg-[hsl(130,55%,60%)]',
    'bg-[hsl(145,58%,48%)]',
  ];

  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    left: Math.random() * 100,
    animationDuration: Math.random() * 15 + 8,
    animationDelay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} shadow-lg blur-[1px]`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '-10px',
            opacity: particle.opacity,
            animation: `floatProminent ${particle.animationDuration}s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s`,
            boxShadow: '0 0 20px currentColor',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
