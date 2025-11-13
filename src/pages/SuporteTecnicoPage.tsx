import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  Headset, 
  Clock, 
  Users, 
  Shield, 
  CheckCircle2,
  Target,
  Award,
  Star,
  Phone,
  MessageSquare,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/suporte-hero.jpg';

const SuporteTecnicoPage = () => {
  const services = [
    {
      title: "Equipe Alocada In-loco",
      description: "Profissionais especializados integrados à sua equipe, trabalhando presencialmente em sua empresa."
    },
    {
      title: "Suporte Dedicado",
      description: "Técnicos exclusivos focados nas necessidades e demandas específicas do seu negócio."
    },
    {
      title: "Integração Total",
      description: "Nossa equipe se torna parte da sua operação, alinhada à cultura e processos da sua empresa."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Disponibilidade Imediata",
      description: "Equipe presente na sua empresa durante o horário comercial ou personalizado"
    },
    {
      icon: Users,
      title: "Profissionais Qualificados",
      description: "Técnicos certificados e com vasta experiência em suporte"
    },
    {
      icon: Shield,
      title: "Redução de Custos",
      description: "Elimine gastos com contratação, treinamento e encargos trabalhistas"
    },
    {
      icon: Zap,
      title: "Atendimento Presencial",
      description: "Resolução rápida de problemas com presença física na sua empresa"
    },
    {
      icon: MessageSquare,
      title: "Alinhamento com sua Cultura",
      description: "Equipe integrada e adaptada aos processos da sua organização"
    }
  ];

  const differentials = [
    "Profissionais alocados exclusivamente para sua empresa",
    "Gestão completa da equipe por nossa conta",
    "Substituição imediata em casos de ausência",
    "Treinamento contínuo dos profissionais alocados",
    "Flexibilidade para aumentar ou reduzir a equipe",
    "Relatórios mensais de performance e atendimentos"
  ];

  const testimonials = [
    {
      quote: "A equipe alocada pela Stellar Syntec se integrou perfeitamente ao nosso time. É como se fossem funcionários da casa!",
      author: "Carlos Mendes",
      company: "TechCorp Brasil"
    },
    {
      quote: "Conseguimos reduzir custos e aumentar a qualidade do suporte. Os profissionais são extremamente competentes e dedicados.",
      author: "Ana Oliveira",
      company: "Digital Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
            Equipe de Suporte Técnico Alocada
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Disponibilizamos profissionais qualificados para integrar a equipe de TI da sua empresa, 
            oferecendo suporte técnico especializado e dedicado
          </p>
          <Link to="/contato">
            <Button size="lg" variant="gradient" className="animate-fade-in">
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Equipe
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Como Funciona Nossa Alocação
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Disponibilizamos profissionais qualificados para trabalhar na sua empresa como parte da sua equipe de TI
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="cosmic-card hover:scale-105 transition-smooth">
                <CardHeader>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Vantagens da Alocação de Equipe
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Benefícios de ter profissionais dedicados trabalhando na sua empresa
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Por Que Escolher a Stellar Syntec?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/20 transition-smooth">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Empresas que escolheram ter nossa equipe trabalhando em suas instalações
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="cosmic-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Pronto Para Ter Nossa Equipe na Sua Empresa?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como nossos profissionais podem integrar sua equipe de TI
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Target className="mr-2 h-5 w-5" />
              Fale Com Especialista
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SuporteTecnicoPage;
