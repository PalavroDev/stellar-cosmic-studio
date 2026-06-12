import { Globe, Eye, Rocket, DollarSign, Lightbulb, Layers, Battery, MessageSquare } from 'lucide-react';

const CompanyQualities = () => {
  const qualities = [
    {
      icon: Globe,
      title: "Hub de Soluções Integradas",
      description: "Conectamos todas as suas necessidades tecnológicas em um único ecossistema"
    },
    {
      icon: Eye,
      title: "Soluções Sob Medida e Personalizadas",
      description: "Cada projeto é único e adaptado perfeitamente ao seu negócio"
    },
    {
      icon: Rocket,
      title: "Eficiência Operacional Elevada",
      description: "Otimizamos processos para máxima produtividade"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Investimento inteligente com retorno garantido"
    },
    {
      icon: Lightbulb,
      title: "Tecnologia de Ponta",
      description: "Sempre na vanguarda das tecnologias mais recentes"
    },
    {
      icon: Layers,
      title: "Modularidade, Escalabilidade e Flexibilidade",
      description: "Soluções que crescem junto com seu negócio"
    },
    {
      icon: Battery,
      title: "Expertise e Melhores Práticas do Mercado",
      description: "Anos de experiência aplicados em cada projeto"
    },
    {
      icon: MessageSquare,
      title: "Parceria Estratégica e Atendimento Consultivo",
      description: "Mais que fornecedores, somos uma extensão da sua equipe, focados no seu sucesso de longo prazo."
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Diferencial</span> da Stellar Syntec
          </h2>
        </div>

        {/* Grid of quality cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div
                key={index}
                className="cosmic-card p-6 rounded-lg hover:scale-105 transition-smooth group cursor-pointer"
              >
                <Icon className= "h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {quality.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyQualities;