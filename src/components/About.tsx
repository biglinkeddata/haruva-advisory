const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Welcome to <span className="text-primary font-semibold">Haruva Advisory</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Haruva Advisory is a strategic partner to purpose-driven organisations across sustainability, wellness, 
              technology, and leadership sectors. We align purpose, strategy, and operations so performance becomes 
              predictable, grounded, and true to the organisation's identity.
            </p>
            
            <p className="font-medium text-foreground">Our approach is steady and practical:</p>

            <ul className="space-y-3 pl-6">
              <li className="list-disc">We diagnose what's working — and what's getting in the way</li>
              <li className="list-disc">We design clear strategies, operating models, and commercial pathways</li>
              <li className="list-disc">We deliver early execution to build momentum</li>
              <li className="list-disc">We develop leadership alignment and organisational rhythms that make growth sustainable</li>
            </ul>

            <p>
              We don't believe in scaling at any cost. We believe in scaling in alignment — where the way you 
              grow reflects what you stand for.
            </p>

            <p className="text-foreground font-medium text-xl pt-4">
              Growth becomes coherent, human, and sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
