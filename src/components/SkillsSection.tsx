
import { cn } from "@/lib/utils";

const SkillCategory = ({ 
  title, 
  icon, 
  skills 
}: { 
  title: string; 
  icon: string; 
  skills: string[];
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-sm",
      "border border-gray-100",
      "hover:shadow-md transition-shadow"
    )}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-400"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Python", "Java", "C", "SQL", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: "🌐",
      skills: ["React.js", "HTML", "CSS", "Bootstrap", "TailwindCSS"]
    },
    {
      title: "Backend & Tools",
      icon: "🧰",
      skills: ["Supabase", "OpenCV", "YOLOv8", "MySQL"]
    },
    {
      title: "AI/ML",
      icon: "🧠",
      skills: ["Deep Learning", "Generative AI", "Data Structures", "Neural Networks"]
    },
    {
      title: "Cloud & Concepts",
      icon: "☁️",
      skills: ["Google Cloud AI", "Agile", "OS", "DBMS", "OOP", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              icon={category.icon} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
