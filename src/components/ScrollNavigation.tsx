import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-15% 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        
        const currentIndex = sections.findIndex(s => s.id === activeSection);
        let nextIndex: number;
        
        if (e.key === "ArrowUp") {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
        } else {
          nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : currentIndex;
        }
        
        scrollToSection(sections[nextIndex].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              aria-label={`Navigate to ${section.label}`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary border-primary scale-125"
                    : "bg-transparent border-muted-foreground/30 hover:border-primary/50"
                }`}
              />
              <span className="absolute right-6 bg-card px-3 py-1 rounded text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollNavigation;
