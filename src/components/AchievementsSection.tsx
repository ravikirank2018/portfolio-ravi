
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AchievementCard = ({ 
  title, 
  items 
}: { 
  title: string; 
  items: Array<{ icon: string; text: string; link?: string }>;
}) => {
  return (
    <Card className="overflow-hidden border-gray-200">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <CardContent className="p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 hover:underline"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const AchievementsSection = () => {
  const achievements = {
    title: "Achievements",
    items: [
      { 
        icon: "🎖️", 
        text: "Gold Badge in Problem Solving – HackerRank"
      },
      { 
        icon: "🥇", 
        text: "Top 20 out of 150 teams – Internal Hackathon"
      },
      { 
        icon: "📣", 
        text: "Campus Ambassador – RineX, Gitam University"
      }
    ]
  };
  
  const certifications = {
    title: "Certifications",
    items: [
      { 
        icon: "✅", 
        text: "ServiceNow Certified System Administrator (CSA) — Certified by ServiceNow", 
        link: "https://drive.google.com/file/d/1bBiBZPOFfkEOOhPe7Uov9KAgbqMbyKOh/view"
      },
      { 
        icon: "✅", 
        text: "DSA – HackerRank", 
        link: "https://www.hackerrank.com/certificates/57f67e2ac4e3"
      },
      { 
        icon: "✅", 
        text: "Java – HackerRank", 
        link: "https://www.hackerrank.com/certificates/ea93c5c08be4"
      },
      { 
        icon: "✅", 
        text: "Welcome to ServiceNow – ServiceNow"
      },
      { 
        icon: "✅", 
        text: "Flow Designer – ServiceNow"
      }
    ]
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Achievements & Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AchievementCard title={achievements.title} items={achievements.items} />
          <AchievementCard title={certifications.title} items={certifications.items} />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
