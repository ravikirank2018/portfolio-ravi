
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ContactLink = ({
  icon,
  label,
  href,
  username
}: {
  icon: string;
  label: string;
  href: string;
  username: string;
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-4 p-4 rounded-lg",
        "bg-white border border-gray-100 shadow-sm",
        "transition-all duration-300",
        "hover:shadow-md hover:border-purple-200 hover:translate-y-[-2px]"
      )}
    >
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">{username}</p>
      </div>
    </a>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Me
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Thanks for stopping by! Whether you want to collaborate, hire Ravi, or just geek out over AI — he'd love to chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ContactLink 
              icon="📧" 
              label="Email" 
              href="mailto:rkiran@gitam.in" 
              username="rkiran@gitam.in" 
            />
            <ContactLink 
              icon="💼" 
              label="LinkedIn" 
              href="https://www.linkedin.com/in/ravikiran-k-54940125b/" 
              username="ravikiran-k" 
            />
            <ContactLink 
              icon="👨‍💻" 
              label="GitHub" 
              href="https://github.com/ravikirank2018" 
              username="ravikirank2018" 
            />
            <ContactLink 
              icon="🧩" 
              label="LeetCode" 
              href="https://leetcode.com/u/0UUxyfxQ4G/" 
              username="0UUxyfxQ4G" 
            />
          </div>
          
          <blockquote className="border-l-4 border-purple-400 pl-4 text-left text-gray-700 italic mx-auto max-w-xl bg-white p-6 rounded-lg shadow-sm">
            <p>
              "From your AI buddy: I'll be here to narrate the journey and keep things cool. Let's build something amazing together!"
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
