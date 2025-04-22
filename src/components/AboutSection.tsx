
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-purple-600">Ravi</span>
          </h2>
          
          <div className="space-y-6 text-lg">
            <p>
              Hi, I'm <strong className="text-purple-600">Ravi Kiran K</strong>, currently pursuing my B.Tech in Computer Science at GITAM, Bangalore (Graduating: June 2026 📅).
            </p>
            
            <p>
              I love exploring the intersections of <strong>AI, software development, and education tech</strong>, and I believe technology becomes powerful when it's human-centered. From creating real-time cheating detection systems to personalized learning apps, I design and build with <em>impact in mind</em>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className={cn(
                "bg-gray-50 p-6 rounded-lg shadow-sm",
                "border border-gray-100",
                "transform transition-transform hover:scale-105"
              )}>
                <p className="flex items-center mb-2">
                  <span className="text-xl mr-2">📍</span>
                  <span className="font-medium">Location:</span>
                </p>
                <p>Based in Bangalore</p>
              </div>
              
              <div className={cn(
                "bg-gray-50 p-6 rounded-lg shadow-sm",
                "border border-gray-100",
                "transform transition-transform hover:scale-105"
              )}>
                <p className="flex items-center mb-2">
                  <span className="text-xl mr-2">📚</span>
                  <span className="font-medium">Academic:</span>
                </p>
                <p>GPA: 8.62</p>
              </div>
              
              <div className={cn(
                "bg-gray-50 p-6 rounded-lg shadow-sm",
                "border border-gray-100",
                "transform transition-transform hover:scale-105",
                "md:col-span-2"
              )}>
                <p className="flex items-center mb-2">
                  <span className="text-xl mr-2">❤️</span>
                  <span className="font-medium">Favorite Tech Stack:</span>
                </p>
                <p>Python + React + AI Models</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
