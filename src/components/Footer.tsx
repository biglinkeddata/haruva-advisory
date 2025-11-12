import { Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Haruva Advisory. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/haruva-advisory/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <Separator orientation="vertical" className="h-6" />
              <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
