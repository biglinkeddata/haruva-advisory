import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "An external perspective that cuts through complexity. Their strategic clarity and pragmatism helped us define our course for the future.",
    author: "Maria Flowers",
    role: "Chief Revenue Officer",
    company: "Joulen"
  },
  {
    quote: "Combines strategic thinking with operational excellence — a true catalyst for growth.",
    author: "Mark Hamilford",
    role: "Entrepreneur & Investor",
    company: ""
  },
  {
    quote: "Energising, fearless, and constantly learning — a transformative partner who brings both discipline and creativity.",
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
    quote: "Brings analytical sharpness and a human touch — a partner who makes ambition coherent and achievable.",
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
