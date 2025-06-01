import { Github, ExternalLink, TrendingUp, Database, Newspaper } from 'lucide-react';
import { useGitHub } from '@/hooks/useGitHub';
import { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'SocialPulseRanker',
    description: 'NLP-based social media content curator that ranks and curates 1000+ news articles daily using Python and SpaCy with automated scheduled social posting.',
    tech: ['Python', 'NLP', 'SpaCy', 'Buffer API', 'Cron Jobs'],
    github: 'https://github.com/saurabhbhandariii/SocialPulseRanker',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    stats: 'Processes 1000+ articles daily',
  },
  {
    title: 'CommunityConnect',
    description: 'A comprehensive platform designed to connect communities and facilitate meaningful interactions through modern web technologies and social features.',
    tech: ['React', 'Node.js', 'Community Building', 'Real-time'],
    github: 'https://github.com/saurabhbhandariii/CommunityConnect',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
  },
  {
    title: 'SkillSynergy',
    description: 'A skill-matching and learning platform that connects individuals with complementary skills for collaborative growth and professional development.',
    tech: ['Full-Stack', 'Machine Learning', 'Matching Algorithm', 'Learning Platform'],
    github: 'https://github.com/saurabhbhandariii/SkillSynergy',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
  },
  {
    title: 'LifePulse - AI Health Alert System',
    description: 'Real-time AI health monitoring system with React dashboard, WebSockets, and FastAPI. Features automated Twilio SMS alerts with GPS location via Mapbox for emergency services.',
    tech: ['React', 'FastAPI', 'AI/ML', 'WebSockets', 'Twilio', 'Mapbox'],
    github: '#',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    stats: '95% accuracy in health anomaly detection',
  },
  {
    title: 'Serverless Data Dashboard + Automation Engine',
    description: 'Scalable serverless dashboard using AWS Lambda and DynamoDB processing over 10K data points/sec with n8n automation flows and RBAC via AWS Cognito.',
    tech: ['AWS Lambda', 'DynamoDB', 'AWS Cognito', 'AWS SNS/SES', 'n8n'],
    github: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    stats: 'Processes 10K+ data points/sec',
  },
];

const techColors: Record<string, string> = {
  Python: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  NLP: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  SpaCy: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Buffer API': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Cron Jobs': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  React: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Node.js': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Community Building': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Real-time': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Full-Stack': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'Machine Learning': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'Matching Algorithm': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'Learning Platform': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  FastAPI: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'AI/ML': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  WebSockets: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  Twilio: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  Mapbox: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'AWS Lambda': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  DynamoDB: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'AWS Cognito': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'AWS SNS/SES': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  n8n: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
};

const statsIcons: Record<string, React.ReactNode> = {
  'accuracy': <TrendingUp className="w-4 h-4 mr-2" />,
  'data points': <Database className="w-4 h-4 mr-2" />,
  'articles': <Newspaper className="w-4 h-4 mr-2" />,
};

export function Projects() {
  const githubRepos = ['SocialPulseRanker', 'CommunityConnect', 'SkillSynergy'];
  const { repositories, loading } = useGitHub(githubRepos);

  const getStatsIcon = (stats: string) => {
    if (stats.includes('accuracy')) return statsIcons.accuracy;
    if (stats.includes('data points')) return statsIcons['data points'];
    if (stats.includes('articles')) return statsIcons.articles;
    return <TrendingUp className="w-4 h-4 mr-2" />;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, AI/ML, and cloud architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-white dark:bg-dark-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs ${techColors[tech] || 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.stats && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {getStatsIcon(project.stats)}
                    {project.stats}
                  </div>
                )}
                
                <div className="flex space-x-3">
                  {project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
