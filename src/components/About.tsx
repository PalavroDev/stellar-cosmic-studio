import { Target, Eye, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Transformar negócios através da tecnologia, criando soluções inovadoras que geram valor real para nossos clientes.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser referência em desenvolvimento de software e inovação tecnológica, reconhecidos pela excelência e compromisso.',
  },
  {
    icon: Award,
    title: 'Valores',
    description: 'Inovação contínua, qualidade sem compromissos, parceria com o cliente e transparência em todas as relações.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Sobre <span className="text-gradient">Nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a Stellar Syntec e nossa jornada em tecnologia e inovação
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="cosmic-card p-8 sm:p-12 rounded-lg text-center">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              A <span className="text-primary font-semibold">Stellar Syntec</span> nasceu da paixão por tecnologia e do desejo de transformar 
              ideias em soluções digitais que fazem a diferença. Nossa equipe combina expertise técnica 
              com visão de negócio para entregar projetos que superam expectativas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que a tecnologia deve ser acessível, eficiente e impactante. Por isso, 
              trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e criando 
              soluções personalizadas que impulsionam seus negócios para o futuro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="cosmic-card p-6 rounded-lg text-center hover:scale-105 transition-smooth group"
              >
                <div className="mb-4 inline-block p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-smooth glow-purple">
                  <Icon className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground group-hover:text-secondary transition-smooth">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
