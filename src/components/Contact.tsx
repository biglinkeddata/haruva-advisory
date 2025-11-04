import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Let's <span className="text-primary font-semibold">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Get in touch to discuss how we can help you achieve your strategic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
              <a 
                href="mailto:contact@ygadvisory.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                contact@ygadvisory.com
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground">
                Global Advisory Services
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onClick={() => window.location.href = 'mailto:contact@ygadvisory.com'}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
