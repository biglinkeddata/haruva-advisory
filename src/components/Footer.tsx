import { Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Haruva Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <nav aria-label="Social media links">
              <a 
                href="https://www.linkedin.com/company/haruva-advisory/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                aria-label="Visit Haruva Advisory on LinkedIn (opens in new tab)"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </nav>
            <Separator orientation="vertical" className="h-6" aria-hidden="true" />
            <nav className="flex items-center gap-6" aria-label="Legal links">
              <a 
                href="/privacy-policy" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              >
                Privacy Policy
              </a>
              <Separator orientation="vertical" className="h-6" aria-hidden="true" />
              <a 
                href="/terms-of-service" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
