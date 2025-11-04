const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Welcome to <span className="text-primary font-semibold">YG Advisory</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At YG Advisory, we believe that strategic transformation is not just about change—it's about 
              evolution, growth, and realizing untapped potential. Our approach combines deep industry expertise 
              with innovative thinking to deliver solutions that drive meaningful results.
            </p>
            
            <p>
              We partner with organizations at critical junctures, providing the clarity, strategy, and 
              execution excellence needed to navigate complexity and achieve sustainable competitive advantage.
            </p>

            <p className="text-foreground font-medium text-xl pt-4">
              Your success is our mission. Let's build something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
