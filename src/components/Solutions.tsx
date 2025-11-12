import { Code, Cog, BarChart3, Palette, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Code,
    title: 'Desenvolvimento de Software',
    description: 'Soluções personalizadas e escaláveis para transformar suas ideias em produtos digitais de alta performance.',
    link: '/desenvolvimento',
  },
  {
    icon: Cog,
    title: 'Automação de Processos',
    description: 'Otimize sua operação com sistemas inteligentes que automatizam tarefas repetitivas e aumentam a produtividade.',
    link: '/automacoes',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Transforme dados em insights valiosos com dashboards interativos e análises preditivas avançadas.',
    link: '#',
  },
  {
    icon: Palette,
    title: 'Design UX/UI',
    description: 'Experiências digitais memoráveis com interfaces intuitivas que encantam e convertem usuários.',
    link: '#',
  },
  {
    icon: Headset,
    title: 'Suporte Técnico',
    description: 'Equipe terceirizada especializada disponível 24/7 para garantir a continuidade do seu negócio.',
    link: '/suporte-tecnico',
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Nossas Soluções</span> Tecnológicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços para acelerar sua transformação digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const CardContent = (
              <>
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth glow-cyan">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
              </>
            );

            if (solution.link && solution.link !== '#') {
              return (
                <Link
                  key={index}
                  to={solution.link}
                  className="cosmic-card p-6 rounded-lg hover:scale-105 transition-smooth group cursor-pointer block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="cosmic-card p-6 rounded-lg hover:scale-105 transition-smooth group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
