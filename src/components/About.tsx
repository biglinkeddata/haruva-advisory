import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import ParticleBackground from "./ParticleBackground";

const About = () => {
  const titleAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();
  const whyHaruvaAnimation = useScrollAnimation();
  
  // Track section view when it becomes visible
  useEffect(() => {
    if (titleAnimation.isVisible && window.gtag) {
      window.gtag('event', 'section_view', {
        event_category: 'engagement',
        event_label: 'About Haruva Advisory'
      });
    }
  }, [titleAnimation.isVisible]);
  
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--section-medium))' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-80" style={{ background: 'var(--gradient-subtle)' }} />
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[hsl(155,60%,50%)]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-[hsl(140,55%,45%)]/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary rounded-full animate-float-circular shadow-[0_0_30px_currentColor] blur-[1px]" style={{ opacity: 0.7 }} />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-[hsl(150,60%,55%)] rounded-full animate-float-diagonal shadow-[0_0_25px_currentColor] blur-[1px]" style={{ opacity: 0.8 }} />
      <div className="absolute bottom-1/4 right-1/4 w-7 h-7 bg-[hsl(140,65%,45%)] rounded-full animate-float-zigzag shadow-[0_0_28px_currentColor] blur-[1px]" style={{ opacity: 0.75 }} />
      <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-[hsl(170,60%,50%)] rounded-full animate-float shadow-[0_0_22px_currentColor] blur-[1px]" style={{ opacity: 0.7 }} />
      <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-[hsl(130,55%,60%)] rounded-full animate-float-slow shadow-[0_0_26px_currentColor] blur-[1px]" style={{ opacity: 0.8 }} />
      <div className="absolute top-2/3 right-1/5 w-7 h-7 bg-[hsl(145,58%,48%)] rounded-full animate-float-slower shadow-[0_0_28px_currentColor] blur-[1px]" style={{ opacity: 0.75 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div 
            ref={titleAnimation.elementRef}
            className={`text-center mb-12 transition-all duration-700 ${
              titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-normal mb-6">
              About <span className="text-primary font-medium">Haruva Advisory</span>
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
            } transition-delay-[300ms]`}>
              Haruva Advisory is a strategic partner to purpose-driven organisations across sustainability, wellness, 
              technology, and community-led sectors. We align purpose, strategy, and operations so performance becomes 
              predictable, grounded, and true to the organisation's identity.
            </p>
            
            <p className={`font-medium text-foreground transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } transition-delay-[350ms]`}>Our approach is steady and practical:</p>

            <ul className="space-y-3 pl-6">
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } transition-delay-[400ms]`}>
                We diagnose what's working - and what's getting in the way
              </li>
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } transition-delay-[500ms]`}>
                We design clear strategies, operating models, and commercial pathways
              </li>
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } transition-delay-[600ms]`}>
                We deliver early execution to build momentum
              </li>
              <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } transition-delay-[700ms]`}>
                We develop leadership alignment and organisational rhythms that make growth sustainable
              </li>
            </ul>

            <p className={`transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } transition-delay-[800ms]`}>
              We don't believe in scaling at any cost. We believe in scaling in alignment - where the way you 
              grow reflects what you stand for.
            </p>

            <p className={`text-foreground font-medium text-xl pt-4 transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } transition-delay-[900ms]`}>
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
              <h3 className="text-3xl md:text-4xl font-heading font-normal mb-6">
                Why <span className="text-primary font-medium">Haruva</span>
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 opacity-0" />
            </div>

            <div className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className={`text-foreground font-medium transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } transition-delay-[300ms]`}>
                Haruva is a name rooted in the natural way growth unfolds.
              </p>

              <div className={`space-y-4 pl-4 transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } transition-delay-[350ms]`}>
                <div>
                  <p className="font-semibold text-foreground">Haru (春 / Japanese)</p>
                  <p>
                    means spring - a season of renewal, emergence, and living growth.
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
              } transition-delay-[450ms]`}>
                Together, Haruva speaks to growth that is both true and alive - growth that emerges from alignment rather than force.
              </p>

              <p className={`font-medium text-foreground pt-4 transition-all duration-700 ${
                whyHaruvaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } transition-delay-[550ms]`}>
                At Haruva Advisory, we believe that organisations scale best when:
              </p>

              <ul className="space-y-2 pl-6">
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } transition-delay-[400ms]`}>
                  Their purpose is clear
                </li>
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } transition-delay-[500ms]`}>
                  Their strategy is coherent
                </li>
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } transition-delay-[600ms]`}>
                  Their systems support their values
                </li>
                <li className={`list-disc transition-all duration-500 hover:text-foreground hover:translate-x-1 cursor-default ${
                  whyHaruvaAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } transition-delay-[700ms]`}>
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
