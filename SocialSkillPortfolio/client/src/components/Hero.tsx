import { ArrowRight, ChevronDown, Mail, User } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional developer workspace" 
          className="w-full h-full object-cover opacity-5 dark:opacity-10" 
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="animate-slide-up">
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <User className="w-16 h-16 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Saurabh Bhandari
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full-Stack Developer & Cloud Architect
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Computer Science student with expertise in React, Node.js, AWS, and AI/ML. 
            Currently working as a Cloud Architect Intern, passionate about building scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
              <Mail className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
