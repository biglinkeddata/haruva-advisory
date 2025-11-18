import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ParticleBackground from "./ParticleBackground";

const About = () => {
  const titleAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();
  const whyHaruvaAnimation = useScrollAnimation();
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-80" style={{ background: 'var(--gradient-subtle)' }} />
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/50 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-primary/40 rounded-full animate-float-slower" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div 
            ref={titleAnimation.elementRef}
            className={`text-center mb-12 transition-all duration-700 ${
              titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className={`section-heading-underline ${titleAnimation.isVisible ? 'animate-underline' : ''}`}>
                About <span className="text-primary font-semibold">Haruva Advisory</span>
              </span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 opacity-0" />
          </div>

          <div 
            ref={contentAnimation.elementRef}
            className={`space-y-6 text-lg text-muted-foreground leading-relaxed mb-20 transition-all duration-700 delay-200 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className={`transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } delay-[300ms]`}>
              Haruva Advisory is a strategic partner to purpose-driven organisations across sustainability, wellness, 
              technology, and community-led sectors. We align purpose, strategy, and operations so performance becomes 
              predictable, grounded, and true to the organisation's identity.
            </p>
            
            <p className={`font-medium text-foreground transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } delay-[350ms]`}>Our approach is steady and practical:</p>

            <ul className="space-y-3 pl-6">
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } delay-[400ms]`}>
                We diagnose what's working — and what's getting in the way
              </li>
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } delay-[500ms]`}>
                We design clear strategies, operating models, and commercial pathways
              </li>
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } delay-[600ms]`}>
                We deliver early execution to build momentum
              </li>
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } delay-[700ms]`}>
                We develop leadership alignment and organisational rhythms that make growth sustainable
              </li>
            </ul>

            <p className={`transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } delay-[800ms]`}>
              We don't believe in scaling at any cost. We believe in scaling in alignment — where the way you 
              grow reflects what you stand for.
            </p>

            <p className={`text-foreground font-medium text-xl pt-4 transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } delay-[900ms]`}>
              Growth becomes coherent, human, and sustainable.
            </p>
          </div>

          {/* Why Haruva Section */}
          <div className="border-t border-border pt-16">
            <div 
              ref={whyHaruvaAnimation.elementRef}
              className={`text-center mb-12 transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                <span className={`section-heading-underline ${whyHaruvaAnimation.isVisible ? 'animate-underline' : ''}`}>
                  Why <span className="text-primary font-semibold">Haruva</span>
                </span>
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 opacity-0" />
            </div>

            <div className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className={`text-foreground font-medium transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } delay-[300ms]`}>
                Haruva is a name rooted in the natural way growth unfolds.
              </p>

              <div className={`space-y-4 pl-4 transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } delay-[350ms]`}>
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

              <p className={`italic transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } delay-[450ms]`}>
                Together, Haruva speaks to growth that is both true and alive — growth that emerges from alignment rather than force.
              </p>

              <p className={`font-medium text-foreground pt-4 transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } delay-[550ms]`}>
                At Haruva Advisory, we believe that organisations scale best when:
              </p>

              <ul className="space-y-2 pl-6">
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } delay-[400ms]`}>
                  Their purpose is clear
                </li>
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } delay-[500ms]`}>
                  Their strategy is coherent
                </li>
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } delay-[600ms]`}>
                  Their systems support their values
                </li>
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } delay-[700ms]`}>
                  Their leaders are aligned in intention and action
                </li>
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
