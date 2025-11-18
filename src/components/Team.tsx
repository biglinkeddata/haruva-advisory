import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { Linkedin } from "lucide-react";
import yossiPhoto from "@/assets/yossi-goldsmith.jpg";

const Team = () => {
  const titleAnimation = useScrollAnimation();
  const photoAnimation = useScrollAnimation();
  const bioAnimation = useScrollAnimation();
  const metricsAnimation = useScrollAnimation();

  const yearsCount = useCounterAnimation({ end: 20, duration: 2500, isVisible: metricsAnimation.isVisible });
  const venturesCount = useCounterAnimation({ end: 15, duration: 2500, isVisible: metricsAnimation.isVisible });
  const sectorsCount = useCounterAnimation({ end: 5, duration: 2500, isVisible: metricsAnimation.isVisible });

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div 
            ref={titleAnimation.elementRef}
            className={`text-center mb-16 transition-all duration-700 ${
              titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className={`section-heading-underline ${titleAnimation.isVisible ? 'animate-underline' : ''}`}>
                Meet the <span className="text-primary font-semibold">Team</span>
              </span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto opacity-0" />
          </div>

          {/* Team Member */}
          <div className="bg-card rounded-lg overflow-hidden border border-border group">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Photo */}
              <div 
                ref={photoAnimation.elementRef}
                className={`flex-shrink-0 transition-all duration-700 delay-200 ${
                  photoAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="relative group/photo">
                  {/* Gradient backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-2xl scale-110 transition-all duration-700 group-hover/photo:from-primary/20 group-hover/photo:via-primary/10 group-hover/photo:scale-125 animate-rotate-gradient" />
                  {/* Photo */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-border shadow-lg hover:shadow-xl transition-shadow duration-500">
                    <img 
                      src={yossiPhoto}
                      alt="Yossi Goldsmith - Strategist, Operator, Transformation Partner"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out group-hover/photo:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div 
                ref={bioAnimation.elementRef}
                className={`flex-1 p-8 md:py-12 md:pr-12 md:pl-0 transition-all duration-700 delay-400 ${
                  bioAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-3xl font-semibold text-foreground mb-2">
                    Yossi Goldsmith
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    Strategist · Operator · Transformation Partner
                  </p>
                  <a
                    href="https://www.linkedin.com/in/yossigoldsmith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    aria-label="Connect with Yossi Goldsmith on LinkedIn"
                  >
                    <Linkedin size={20} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className={`transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[500ms]`}>
                    I'm a strategist and operator with over twenty years of experience building and scaling ventures across sustainability, wellness, technology, leadership, and community innovation.
                  </p>

                  <p className={`transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[600ms]`}>
                    My work sits at the intersection of purpose, performance, and transformation - helping founders and leadership teams translate vision into action and action into measurable growth.
                  </p>

                  <p className={`transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[700ms]`}>
                    Throughout my career, I've led organisations through phases of accelerated expansion - designing strategies, operating models, and leadership systems that keep growth coherent as it scales.
                  </p>

                  <p className={`transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[800ms]`}>
                    I founded Haruva to bring together what I've learned from years of working inside and alongside purpose-driven ventures: <span className="font-medium text-foreground">that true speed comes from alignment.</span>
                  </p>

                  <p className={`transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[900ms]`}>
                    When clarity, systems, and leadership move as one, teams advance faster, decisions land cleaner, and growth compounds naturally.
                  </p>

                  <p className={`italic transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[1000ms]`}>
                    Because growth without alignment is chaos.<br />
                    And alignment without momentum is stagnation.
                  </p>

                  <p className={`font-medium text-foreground text-lg pt-2 transition-all duration-500 ${
                    bioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-delay-[1100ms]`}>
                    Haruva is where the two meet - where growth becomes grounded, coherent, and alive.
                  </p>

                  {/* Metrics */}
                  <div 
                    ref={metricsAnimation.elementRef}
                    className={`grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-border transition-all duration-700 ${
                      metricsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {yearsCount}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years of Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {venturesCount}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ventures Scaled
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {sectorsCount}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Key Sectors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
