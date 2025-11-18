import strategyCommercial from "@/assets/strategy-commercial.jpg";
import operationalTransformation from "@/assets/operational-transformation.jpg";
import brandPartnership from "@/assets/brand-partnership.jpg";
import leadershipAlignment from "@/assets/leadership-alignment.jpg";
import transformationIntegration from "@/assets/transformation-integration.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={elementRef}
      className={`group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {service.subtitle}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {service.description}
      </p>
      {service.focusAreas && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">Focus Areas:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {service.focusAreas.map((area: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="pt-4 border-t border-border">
        <p className="text-sm font-semibold text-primary mb-1">Outcome:</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.outcome}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      image: strategyCommercial,
      title: "Strategy & Commercial Readiness",
      subtitle: "From clarity to commercial traction.",
      description: "We help you articulate your value, define your offer architecture, sharpen your market position, and build a go-to-market plan that feels true and performs.",
      focusAreas: [
        "Market & positioning clarity",
        "Pricing and revenue architecture",
        "Go-to-market design & partnership pathways",
        "Investor narrative & strategic storytelling"
      ],
      outcome: "Clear, compelling, investable direction that people can understand, buy, and rally behind."
    },
    {
      image: operationalTransformation,
      title: "Operational Transformation & Organisational Design",
      subtitle: "Systems and structures that enable scale.",
      description: "We build the internal architecture that allows your organisation to grow without fragmentation, burnout, or drift.",
      focusAreas: [
        "Operating model and team structure",
        "Process and workflow design",
        "KPI and accountability systems",
        "Leadership rhythm & decision cadence"
      ],
      outcome: "A business that runs smoothly - with clarity, simplicity, and shared ownership."
    },
    {
      image: brandPartnership,
      title: "Brand & Partnership Alignment",
      subtitle: "Authentic growth ecosystems.",
      description: "Your brand is not your logo - it is how your purpose is expressed in the market and in relationships. We design the narrative, messaging, and partnerships that extend your impact with integrity.",
      focusAreas: [
        "Narrative and messaging strategy",
        "Partnership and community ecosystem design",
        "Strategic communications alignment",
        "Pitch & presentation architecture"
      ],
      outcome: "Growth that comes from resonance - not force."
    },
    {
      image: leadershipAlignment,
      title: "Leadership Alignment & Culture",
      subtitle: "Coherence that drives performance.",
      description: "Transformation happens when leadership, culture, and strategy are in conversation. We facilitate the alignment needed for clarity, trust, and decisive progress.",
      focusAreas: [
        "Executive team alignment",
        "Vision & values frameworks",
        "Leadership presence and relational dynamics",
        "Offsites, strategic retreats, and decision frameworks"
      ],
      outcome: "A leadership team that moves as one."
    },
    {
      image: transformationIntegration,
      title: "Transformation Integration",
      subtitle: "Embedding change that lasts.",
      description: "This is where the new way of working becomes part of the organisation's identity - where habits shift, behaviour aligns, and the culture holds the growth without constant effort or external push.",
      focusAreas: [
        "Cultural anchoring & behavioural integration",
        "Leadership modelling & communication practices",
        "Rituals, rhythms, and reinforcement structures",
        "Identity narrative alignment (internal / external)",
        "Capability and capacity building"
      ],
      outcome: "Sustainable transformation - where growth feels natural, embodied, and self-renewing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-normal mb-6">
            Our <span className="text-primary font-medium">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 opacity-0" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions designed to address your unique challenges and accelerate growth
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel 
            className="w-full group/carousel cursor-grab active:cursor-grabbing" 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
          >
            <CarouselContent className="group-hover/carousel:translate-x-[-8px] transition-transform duration-500">
              {services.map((service, index) => (
                <CarouselItem key={index} className="group-hover/carousel:scale-[0.98] transition-transform duration-500">
                  <ServiceCard service={service} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination Dots with Swipe Hint */}
          <div className="flex flex-col items-center gap-3 mt-6">
            <p className="text-xs text-muted-foreground animate-pulse">
              Swipe to explore →
            </p>
            <div className="flex justify-center gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 touch-manipulation ${
                    current === index 
                      ? 'w-8 h-3 bg-primary animate-pulse' 
                      : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 active:scale-110'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
