import { Building2, Users, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import heroBackground from '@/assets/hero-background.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Compromisso com a qualidade e superação de expectativas em cada projeto.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Busca constante por soluções criativas e tecnologias de ponta.',
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Relacionamento próximo e transparente com nossos clientes.',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Padrões elevados em todos os processos e entregas.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Fundação da Stellar Syntec' },
    { year: '2021', event: 'Primeiros projetos de automação entregues' },
    { year: '2022', event: 'Expansão da equipe e novos serviços' },
    { year: '2023', event: 'Certificações em infraestrutura e segurança' },
    { year: '2024', event: 'Reconhecimento como parceiro estratégico de tecnologia' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Sobre a <span className="text-primary">Stellar Syntec</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Somos uma empresa especializada em transformar desafios tecnológicos em soluções 
              inovadoras que impulsionam o crescimento dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Nossa Missão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções tecnológicas de excelência que automatizam processos, 
                  otimizam operações e capacitam empresas a alcançar seus objetivos de negócio 
                  com eficiência e inovação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Nossa Visão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como referência em transformação digital, desenvolvendo 
                  parcerias duradouras e sendo o parceiro tecnológico preferido de empresas 
                  que buscam crescimento sustentável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação da Stellar Syntec
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossa História
              </h2>
              <p className="text-lg text-muted-foreground">
                Uma jornada de crescimento e inovação contínua
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="font-heading text-lg font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <p className="text-foreground font-medium">
                          {milestone.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por Que Escolher a Stellar Syntec?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Expertise Técnica
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Equipe altamente qualificada com experiência em diversas tecnologias e setores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Cada projeto é único e recebe atenção dedicada às necessidades específicas do cliente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Suporte Contínuo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Acompanhamento pós-implantação e equipe disponível para suporte técnico.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Resultados Mensuráveis
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Foco em entregar valor real com métricas claras de sucesso e ROI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;