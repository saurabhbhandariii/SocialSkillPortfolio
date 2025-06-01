import { Download, Github, Linkedin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about technology and innovation, I specialize in creating scalable solutions and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern technology background with code" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Building the Future with Code</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently pursuing Bachelor of Technology in Computer Science at Graphic Era Hill University 
              with a CGPA of 8.5/10. My journey in technology spans full-stack development, cloud architecture, 
              and artificial intelligence.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Education</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  B.Tech Computer Science<br />
                  Graphic Era Hill University<br />
                  CGPA: 8.5/10 (2022-2026)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Current Role</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cloud Architect Intern<br />
                  Linky<br />
                  May 2025 - Present
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume_2025.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/saurabhbhandari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/saurabhbhandariii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
