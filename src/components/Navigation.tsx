import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import haruvaLogo from "@/assets/haruva-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={haruvaLogo} 
              alt="Haruva Advisory" 
              className="h-10 md:h-12 w-auto"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 flex flex-col gap-2 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center py-3 rounded-md font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center py-3 rounded-md font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center py-3 rounded-md font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center py-3 rounded-md font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center py-3 rounded-md font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
