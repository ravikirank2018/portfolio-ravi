
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">Ravi Kiran K</h3>
            <p className="text-sm">Computer Science Student | AI Enthusiast</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm mb-2">© {new Date().getFullYear()} Ravi Kiran K. All rights reserved.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/ravikiran-k-54940125b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/ravikirank2018" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:rkiran@gitam.in" 
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
