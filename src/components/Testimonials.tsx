import { Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "An external perspective that cuts through complexity. Their strategic clarity and pragmatism helped us define our course for the future.",
    author: "Maria Flowers",
    role: "Chief Revenue Officer",
    company: "Joulen"
  },
  {
    quote: "Combines strategic thinking with operational excellence - a true catalyst for growth.",
    author: "Mark Hamilford",
    role: "Entrepreneur & Investor",
    company: ""
  },
  {
    quote: "Energising, fearless, and constantly learning - a transformative partner who brings both discipline and creativity.",
    author: "Dean Hopkins",
    role: "Operating Partner",
    company: "Business Builder"
  },
  {
    quote: "Helps organisations quickly evaluate strengths and weaknesses, improving operations, culture, and growth.",
    author: "Louise Altman",
    role: "CEO",
    company: "Clusters"
  },
  {
    quote: "Brings analytical sharpness and a human touch - a partner who makes ambition coherent and achievable.",
    author: "Chris Kemp",
    role: "Founder & CEO",
    company: "The Ingenuity Group"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={elementRef}
      className={`bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      <Quote className="text-primary mb-4 opacity-50" size={40} />
      <p className="text-foreground text-lg leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.author}</p>
        <p className="text-muted-foreground text-sm">
          {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  return (
    <section id="testimonials" className="py-24" style={{ backgroundColor: 'hsl(var(--section-medium))' }}>
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-normal mb-6">
            What Our <span className="text-primary font-medium">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 opacity-0" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by purpose-driven organizations across sustainability, wellness, and technology sectors
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden max-w-sm mx-auto relative">
          <Carousel 
            className="w-full" 
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              duration: 25,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard 
                    testimonial={testimonial}
                    index={index}
                  />
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 touch-manipulation ${
                    current === index 
                      ? 'w-8 h-3 bg-primary animate-pulse' 
                      : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 active:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
