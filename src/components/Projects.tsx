import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Andrômeda",
    description:
      "Desenvolvimento de software ponta a ponta, projetado para levar sua ideia do conceito inicial ao lançamento final.",
    technologies: ["Mobile", "Web"],
    image: "src/assets/projeto1.jpg",
    link: "/automacoes",
  },

  {
    title: "Lupus",
    description:
      "Planejamento e implementação de arquiteturas de TI eficientes, projetadas para oferecer escalabilidade sob demandA.",
    technologies: ["Redes", "Servidores"],
    image: "src/assets/projeto2.jpg",
    link: "/infra",
  },

  {
    title: "Orion",
    description:
      "Otimização e automação de fluxos de workflows, transformando tarefas manuais e repetitivas em processos digitais eficientes.",
    technologies: ["CRM", "Kanban"],
    image: "src/assets/projeto3.jpeg",
    link: "/desenvolvimento",
  },

  {
    title: "Virgo",
    description:
      "Terceirize a gestão de TI da sua empresa com uma equipe de especialistas dedicada.",
    technologies: ["Help Desk", "Suporte TI", "Outsourcing"],
    image: "src/assets/projeto4.jpg",
    link: "/suporte",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-background/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Pacotes <span className="text-gradient">Sob Medida</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e
            inovação
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
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
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
              <Link
                key={index}
                to={project.link}
                onClick={() => window.scrollTo(0, 0)}
              >
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
