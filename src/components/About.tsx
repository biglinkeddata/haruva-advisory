const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              About <span className="text-primary font-semibold">Haruva Advisory</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-20">
            <p>
              Haruva Advisory is a strategic partner to purpose-driven organisations across sustainability, wellness, 
              technology, and community-led sectors. We align purpose, strategy, and operations so performance becomes 
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

          {/* Why Haruva Section */}
          <div className="border-t border-border pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Why <span className="text-primary font-semibold">Haruva</span>
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">
                Haruva is a name rooted in the natural way growth unfolds.
              </p>

              <div className="space-y-4 pl-4">
                <div>
                  <p className="font-semibold text-foreground">Haru (春 / Japanese)</p>
                  <p>
                    means spring — a season of renewal, emergence, and living growth.
                    Not growth through pressure, but growth that comes when the conditions are right.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Va / Vah</p>
                  <p>
                    is a grounding sound found across Hebrew and Sanskrit language families.
                    It suggests presence, breath, sincerity, and truthfulness of being.
                  </p>
                </div>
              </div>

              <p className="italic">
                Together, Haruva speaks to growth that is both true and alive — growth that emerges from alignment rather than force.
              </p>

              <p className="font-medium text-foreground pt-4">
                At Haruva Advisory, we believe that organisations scale best when:
              </p>

              <ul className="space-y-2 pl-6">
                <li className="list-disc">Their purpose is clear</li>
                <li className="list-disc">Their strategy is coherent</li>
                <li className="list-disc">Their systems support their values</li>
                <li className="list-disc">Their leaders are aligned in intention and action</li>
              </ul>

              <div className="space-y-4 pt-6">
                <p>Growth is not something we push. It's something we cultivate.</p>
                
                <p>
                  When purpose, structure, and leadership are aligned, performance becomes natural, grounded, and sustainable.
                </p>

                <p className="text-foreground font-semibold text-xl pt-4">
                  Haruva means: growth that feels true.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
