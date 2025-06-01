import { Code, Palette, Server, Cloud, Brain, Wrench } from 'lucide-react';
import { SkillCategory } from '@/types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python', color: 'blue' },
      { name: 'JavaScript', color: 'blue' },
      { name: 'SQL', color: 'blue' },
      { name: 'Java', color: 'blue' },
      { name: 'C++', color: 'blue' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'palette',
    skills: [
      { name: 'React', color: 'green' },
      { name: 'Tailwind CSS', color: 'green' },
      { name: 'WebSockets', color: 'green' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', color: 'purple' },
      { name: 'FastAPI', color: 'purple' },
      { name: 'REST APIs', color: 'purple' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'AWS Lambda', color: 'orange' },
      { name: 'DynamoDB', color: 'orange' },
      { name: 'AWS Cognito', color: 'orange' },
      { name: 'AWS SNS/SES', color: 'orange' },
      { name: 'Azure', color: 'orange' },
      { name: 'CI/CD', color: 'orange' },
      { name: 'Docker', color: 'orange' },
      { name: 'GitHub Actions', color: 'orange' },
      { name: 'n8n', color: 'orange' },
    ],
  },
  {
    title: 'AI/ML',
    icon: 'brain',
    skills: [
      { name: 'Anomaly Detection', color: 'red' },
      { name: 'NLP', color: 'red' },
      { name: 'Time-Series Analysis', color: 'red' },
      { name: 'Scikit-learn', color: 'red' },
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git', color: 'gray' },
      { name: 'Twilio', color: 'gray' },
      { name: 'Mapbox', color: 'gray' },
    ],
  },
];

const iconMap = {
  code: Code,
  palette: Palette,
  server: Server,
  cloud: Cloud,
  brain: Brain,
  wrench: Wrench,
};

const colorClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  gray: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
};

const iconColors = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
  red: 'text-red-600',
  gray: 'text-gray-600',
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const iconColor = iconColors[category.skills[0]?.color as keyof typeof iconColors] || 'text-gray-600';
            
            return (
              <div key={category.title} className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className={`w-6 h-6 ${iconColor} mr-3`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-full text-sm ${colorClasses[skill.color as keyof typeof colorClasses]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
