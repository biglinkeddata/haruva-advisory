const AuroraWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Wave Layers - Subtle Effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, hsl(150, 70%, 55%) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 50%, hsl(140, 65%, 45%) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 20% 50%, hsl(160, 60%, 50%) 0%, transparent 50%)
          `,
          animation: 'aurora-shift 22s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 30% 80%, hsl(145, 68%, 48%) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 70% 20%, hsl(135, 55%, 52%) 0%, transparent 50%)
          `,
          animation: 'aurora-shift 25s ease-in-out infinite reverse',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-18"
        style={{
          background: `
            radial-gradient(ellipse 50% 80% at 60% 50%, hsl(155, 60%, 50%) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 40% 50%, hsl(130, 58%, 55%) 0%, transparent 60%)
          `,
          animation: 'aurora-wave 20s ease-in-out infinite',
        }}
      />

      {/* Flowing lines overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, hsl(150, 70%, 50%) 50%, transparent 100%)
          `,
          animation: 'aurora-flow 18s linear infinite',
        }}
      />
    </div>
  );
};

export default AuroraWaves;