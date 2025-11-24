const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal mb-8 leading-tight tracking-tight">
          <span className="inline-block animate-fade-in text-foreground drop-shadow-lg" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            Where{' '}
          </span>
          <span className="inline-block animate-fade-in text-purpose drop-shadow-lg font-medium" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            Purpose
          </span>
          <span className="inline-block animate-fade-in text-foreground drop-shadow-lg" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            {' '}becomes{' '}
          </span>
          <span className="inline-block animate-fade-in text-primary font-medium drop-shadow-lg animate-pulse-glow" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
            Performance
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}>
          Helping purpose-driven ventures transform vision into strategy, strategy into systems, and systems into sustainable growth
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
