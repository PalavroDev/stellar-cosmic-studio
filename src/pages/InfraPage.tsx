import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  Server, 
  Shield, 
  Zap, 
  Cloud, 
  HardDrive, 
  Network,
  CheckCircle2,
  Target,
  Award,
  Star,
  Lock,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/infraestrutura-hero.jpg';

const InfraPage = () => {
  const services = [
    {
      title: "Servidores e Storage",
      description: "Servidores de alta performance e soluções de armazenamento escaláveis para seus dados críticos."
    },
    {
      title: "Segurança de Rede",
      description: "Firewalls, sistemas de detecção de intrusão e proteção contra ameaças cibernéticas."
    },
    {
      title: "Redes e Conectividade",
      description: "Switches, roteadores e soluções wireless para conectividade rápida e confiável."
    }
  ];

  const benefits = [
    {
      icon: Server,
      title: "Alta Disponibilidade",
      description: "99.9% de uptime garantido"
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Proteção multicamadas"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Cresce com seu negócio"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Integração com nuvem híbrida"
    },
    {
      icon: Network,
      title: "Suporte 24/7",
      description: "Equipe sempre disponível"
    }
  ];

  const differentials = [
    "Equipamentos de última geração",
    "Manutenção preventiva contínua",
    "Consultoria especializada",
    "Redundância e backup automático",
    "Monitoramento em tempo real",
    "SLA garantido com penalidades"
  ];

  const testimonials = [
    {
      quote: "A infraestrutura fornecida pela Stellar Syntec transformou nossa operação. Zero downtime desde a implementação.",
      author: "Carlos Mendes",
      company: "Tech Solutions"
    },
    {
      quote: "Excelente suporte técnico e equipamentos de primeira linha. Nossa rede nunca esteve tão estável.",
      author: "Mariana Costa",
      company: "Inovação Corp"
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
            Infraestrutura de TI Robusta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Equipamentos e soluções de infraestrutura para manter seu negócio 
            sempre conectado, seguro e escalável
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
            O que podemos arquitetar para sua<span className="text-gradient"> Empresa</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fornecemos equipamentos e serviços completos para sua infraestrutura de TI
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
            Benefícios da Nossa Infraestrutura
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Vantagens que fazem a diferença no seu negócio
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
            Pronto Para Modernizar Sua Infraestrutura?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos fortalecer sua base tecnológica
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

export default InfraPage;
