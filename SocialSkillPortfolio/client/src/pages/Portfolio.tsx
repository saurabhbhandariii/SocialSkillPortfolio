import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-dark text-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Saurabh Bhandari. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Built with passion for technology and innovation.</p>
        </div>
      </footer>
    </div>
  );
}
