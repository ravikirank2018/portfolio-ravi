
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className={cn(
            "relative p-8 bg-white rounded-lg shadow-sm",
            "border border-gray-100",
            "before:content-[''] before:absolute before:top-0 before:left-0",
            "before:w-1 before:h-full before:bg-gradient-to-b before:from-purple-400 before:to-indigo-500",
            "before:rounded-tl-lg before:rounded-bl-lg"
          )}>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                AI-ML Intern <span className="text-purple-500">@</span> Eduskills
              </h3>
              <p className="text-gray-500 font-medium">Sept–Nov 2023</p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Worked on real-world projects in AI and ML, building models, cleaning datasets, and improving predictions.
              </p>
              <p>
                Attended webinars and workshops that shaped Ravi's understanding of neural networks, Python, and the magic of machine learning.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">🛠️ Key Skills Gained:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-400 mr-2"></span>
                    Neural Networks
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-400 mr-2"></span>
                    AI Algorithm Implementation
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-400 mr-2"></span>
                    Data Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-400 mr-2"></span>
                    Teamwork & Communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
