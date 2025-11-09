import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Haruva Advisory helped us move from ambition to execution. Their clarity on strategy and go-to-market was transformative. We're now scaling with confidence and integrity.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "GreenPath Solutions"
  },
  {
    quote: "The team brought structure to our growth without losing our soul. They understood what we stood for and helped us build systems that support, not suffocate, our mission.",
    author: "James Chen",
    role: "Founder",
    company: "Wellness Collective"
  },
  {
    quote: "We were struggling with leadership alignment and operational clarity. Haruva's approach was refreshingly practical - no jargon, just clear thinking and real results.",
    author: "Elena Rodriguez",
    role: "COO",
    company: "Impact Ventures"
  },
  {
    quote: "They helped us redesign our operating model and build partnerships that actually matter. Growth now feels sustainable, not chaotic.",
    author: "Michael Thompson",
    role: "Managing Director",
    company: "Sustainable Futures Group"
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
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            What Our <span className="text-primary font-semibold">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by purpose-driven organizations across sustainability, wellness, and technology sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
