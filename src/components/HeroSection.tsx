
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  imageSrc?: string;
}

const HeroSection = ({ imageSrc }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-7/12 space-y-6">
            <div className="bg-purple-100 text-purple-800 font-medium px-4 py-2 rounded-full inline-block text-sm">
              👋 Hey there, I'm Ravi's AI Buddy
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your friendly guide to <span className="text-purple-600">Ravi's world</span> of code, creativity, and curiosity!
            </h1>
            
            <p className="text-xl text-gray-700">
              Welcome to the digital portfolio of <strong>Ravi Kiran K</strong>, a passionate Computer Science undergrad from GITAM who blends AI wizardry with a heart for impactful tech.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">🧠 AI/ML</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">🌐 Web Development</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">👨‍💻 Software Engineering</span>
              </div>
              
              <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-700">
                "Every line of Ravi's code isn't just functional — it's thoughtful."
              </blockquote>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-purple-600 hover:bg-purple-700"
              >
                View Projects
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 100,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Contact Ravi
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center">
            <div className={cn(
              "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden", 
              "border-4 border-white shadow-xl",
              "bg-gradient-to-br from-purple-500 to-indigo-600"
            )}>
              {imageSrc ? (
                <Avatar className="w-full h-full">
                  <AvatarImage src={imageSrc} alt="Ravi Kiran K" className="object-cover" />
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                    RK
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className="flex items-center justify-center h-full text-5xl font-bold text-white">
                  RK
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
