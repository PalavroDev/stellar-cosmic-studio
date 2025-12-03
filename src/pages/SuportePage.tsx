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
      title: "Equipe Alocada",
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
            Suporte Técnico Especializado
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Terceirizamos uma equipe altamente qualificada para oferecer suporte técnico 
            de excelência para o seu negócio
          </p>
          <Link to="/contato">
            <Button size="lg" variant="gradient" className="animate-fade-in">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
           Como podemos atender sua<span className="text-gradient"> Empresa</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Soluções completas de suporte técnico terceirizado para manter sua operação sempre funcionando
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
            Como podemos atender sua<span className="text-gradient"> Empresa</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Vantagens que garantem a continuidade do seu negócio
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
