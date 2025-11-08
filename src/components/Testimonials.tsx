import { Quote } from "lucide-react";

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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
