import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Sistema de Gestão Empresarial',
    description: 'Plataforma completa para gerenciamento de recursos, finanças e operações.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    link: '/automacoes',
  },
  {
    title: 'E-commerce Inteligente',
    description: 'Solução de vendas online com recomendações personalizadas por IA.',
    technologies: ['Next.js', 'Python', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Visualização de dados em tempo real com insights automatizados.',
    technologies: ['Vue.js', 'FastAPI', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  },
  {
    title: 'App de Automação Industrial',
    description: 'Controle e monitoramento de processos industriais via IoT.',
    technologies: ['React Native', 'MQTT', 'AWS IoT'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e inovação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectCard = (
              <div
                key={index}
                className="cosmic-card rounded-lg overflow-hidden group cursor-pointer transition-smooth hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <div
                    className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return project.link ? (
              <Link key={index} to={project.link} onClick={() => window.scrollTo(0, 0)}>
                {ProjectCard}
              </Link>
            ) : (
              ProjectCard
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
