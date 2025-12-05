import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import haruvaLogo from "@/assets/haruva-logo.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
        rootMargin: "-10% 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const getNavButtonClass = (id: string) => {
    const isActive = activeSection === id;
    return `relative font-medium text-sm transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
      isActive 
        ? "text-primary after:w-full" 
        : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
    }`;
  };

  const getMobileNavButtonClass = (id: string) => {
    const isActive = activeSection === id;
    return `transition-all duration-300 text-center py-3 rounded-md font-medium transform hover:scale-105 ${
      isActive 
        ? "text-primary bg-primary/10" 
        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
    }`;
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getNavButtonClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-md md:hidden z-[-1] animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 flex flex-col gap-2 animate-slide-in-top">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getMobileNavButtonClass(item.id)}
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
