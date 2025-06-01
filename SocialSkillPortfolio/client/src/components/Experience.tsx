import { ExperienceItem, Certification } from '@/types';

const experiences: ExperienceItem[] = [
  {
    title: 'Cloud Architect Intern',
    company: 'Linky',
    period: 'May 2025 – Present',
    description: [
      'Designed and deployed scalable cloud infrastructures using Azure',
      'Assisted in migration of legacy apps to microservice architecture',
      'Automated CI/CD pipelines improving deployment efficiency by 30%',
    ],
    type: 'work',
  },
  {
    title: 'Bachelor of Technology',
    company: 'Computer Science',
    period: 'Graphic Era Hill University • Aug 2022 – 2026',
    description: [
      'CGPA: 8.5/10',
      'Relevant Coursework: Data Structures, Machine Learning, Cloud Computing',
    ],
    type: 'education',
  },
];

const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    organization: 'Microsoft',
    status: 'Completed',
    icon: 'microsoft',
  },
  {
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    status: 'In Progress',
    icon: 'aws',
  },
  {
    title: 'TensorFlow Developer Certificate',
    organization: 'Google',
    status: 'Expected July 2025',
    icon: 'tensorflow',
  },
  {
    title: 'Introduction to Front-End Development',
    organization: 'Coursera - Meta',
    status: 'Completed',
    icon: 'meta',
  },
];

const iconMap: Record<string, string> = {
  microsoft: 'fab fa-microsoft',
  aws: 'fab fa-aws',
  tensorflow: 'fas fa-brain',
  meta: 'fab fa-meta',
};

const iconColors: Record<string, string> = {
  microsoft: 'text-blue-600',
  aws: 'text-orange-600',
  tensorflow: 'text-green-600',
  meta: 'text-blue-700',
};

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in technology, from academic excellence to professional experience.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between mb-8">
              {exp.type === 'work' ? (
                <>
                  <div className="w-5/12">
                    <div className="bg-white dark:bg-dark-secondary rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {exp.description.map((desc, i) => (
                          <li key={i}>• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-dark"></div>
                  <div className="w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-dark"></div>
                  <div className="w-5/12">
                    <div className="bg-white dark:bg-dark-secondary rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{exp.title}</h3>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-sm text-gray-600 dark:text-gray-400">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-dark-secondary rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <i className={`${iconMap[cert.icon]} text-2xl ${iconColors[cert.icon]} mr-3`}></i>
                  <h4 className="font-semibold">{cert.title}</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.organization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
