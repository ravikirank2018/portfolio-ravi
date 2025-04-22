
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectCard = ({ 
  title, 
  emoji, 
  description, 
  techStack, 
  funFact, 
  projectLink, 
  demoLink 
}: { 
  title: string;
  emoji: string;
  description: string;
  techStack: string;
  funFact?: string;
  projectLink: string;
  demoLink?: string;
}) => {
  return (
    <Card className={cn(
      "overflow-hidden border-gray-200",
      "transition-all duration-300",
      "hover:shadow-lg hover:border-purple-200",
      "flex flex-col"
    )}>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-gray-100">
        <div className="text-3xl mb-3">{emoji}</div>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        <CardDescription>
          <div className="mt-2 text-xs font-mono text-gray-600">{techStack}</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <p className="text-gray-700 mb-4">{description}</p>
        {funFact && (
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 text-sm text-amber-800">
            <span className="font-medium">✨ Fun fact:</span> {funFact}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
        <Button variant="outline" size="sm" asChild>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
        {demoLink && (
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "CheatShield AI",
      emoji: "🚨",
      description: "An AI-based exam proctoring tool that detects cheating in real-time. It tracks hand movements, identifies mobile phones/books, and sends alerts.",
      techStack: "🔧 Python, OpenCV, YOLOv8, Tkinter",
      funFact: "Ravi trained YOLOv8 to spot suspicious activity with 85% accuracy!",
      projectLink: "https://github.com/ravikirank2018/CheatShield-AI"
    },
    {
      title: "Course Compass AI Paths",
      emoji: "🧭",
      description: "A smart learning path generator that recommends courses tailored to your goals. Built with Supabase backend and deployed on Vercel.",
      techStack: "🔧 React, TypeScript, Supabase, TailwindCSS",
      funFact: "The UI? Super clean. The logic? All Ravi.",
      projectLink: "https://github.com/ravikirank2018/course-compass-ai-paths-main",
      demoLink: "https://course-compass-ai-paths-main-9txb.vercel.app/"
    },
    {
      title: "CyHack",
      emoji: "🛡️",
      description: "Developed a system that monitors live cyber feeds and predicts threats using AI. Dashboards were interactive and security-centered.",
      techStack: "🔧 Python, Dash, AI Models",
      funFact: "Smart. Secure. Slick.",
      projectLink: "https://github.com/ravikirank2018/CYHACK"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projects <span className="text-purple-600">With AI-Powered Love 💕</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of Ravi's technical skills through projects that solve real-world problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
