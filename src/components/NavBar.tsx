
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "experience", "skills", "achievements", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="font-bold text-xl text-primary">Ravi Kiran K</div>
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-1">
            {["Hero", "About", "Projects", "Experience", "Skills", "Achievements", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    activeSection === item.toLowerCase() 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground"
            onClick={() => {
              // Mobile navigation not implemented in this simplified version
              alert("Mobile navigation would open here");
            }}
          >
            Menu
          </Button>
        </div>
        
        <div className="hidden md:block">
          <Button 
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
