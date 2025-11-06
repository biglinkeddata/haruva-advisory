import strategyIcon from "@/assets/strategy-icon.png";
import transformationIcon from "@/assets/transformation-icon.png";
import advisoryIcon from "@/assets/advisory-icon.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
      <div className="mb-6 flex justify-center">
        <img 
          src={service.icon} 
          alt={service.title}
          className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: strategyIcon,
      title: "Strategic Planning",
      description: "Comprehensive strategic frameworks that align vision with execution, ensuring your organization is positioned for long-term success."
    },
    {
      icon: transformationIcon,
      title: "Business Transformation",
      description: "End-to-end transformation programs that reshape operations, culture, and capabilities to meet evolving market demands."
    },
    {
      icon: advisoryIcon,
      title: "Executive Advisory",
      description: "Trusted advisory services for C-suite executives navigating complex decisions and driving organizational excellence."
    }
  ];

  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="text-primary font-semibold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions designed to address your unique challenges and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
