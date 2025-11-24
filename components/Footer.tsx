import { Github, Linkedin, Mail } from 'lucide-react';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex justify-center gap-6 mb-6 md:mb-0 md:order-2">
            <a href="mailto:dasuntharuka34@gmail.com" className="text-foreground/60 hover:text-blue-600 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://github.com/dasuntharuka34" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-blue-600 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/dasun-tharuka-2b1399298" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://wa.me/94701395508" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-blue-600 transition-colors">
              <WhatsappIcon size={24} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
          <div className="text-center text-sm text-foreground/80 md:order-1">
            <p>&copy; {new Date().getFullYear()} Dasun Tharuka. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
