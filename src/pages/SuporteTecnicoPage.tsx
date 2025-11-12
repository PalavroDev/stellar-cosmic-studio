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
      title: "Suporte 24/7",
      description: "Equipe especializada disponível 24 horas por dia, 7 dias por semana, para resolver suas questões técnicas."
    },
    {
      title: "Atendimento Multicanal",
      description: "Atendemos via telefone, chat, e-mail e WhatsApp para sua maior comodidade."
    },
    {
      title: "Equipe Terceirizada",
      description: "Contamos com uma equipe terceirizada altamente qualificada e treinada para oferecer o melhor suporte."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Tempo médio de resposta inferior a 30 minutos"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e experientes"
    },
    {
      icon: Shield,
      title: "Disponibilidade Total",
      description: "Suporte contínuo sem interrupções"
    },
    {
      icon: Zap,
      title: "Resolução Ágil",
      description: "95% dos casos resolvidos no primeiro contato"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Clara",
      description: "Atualizações constantes sobre o status"
    }
  ];

  const differentials = [
    "Equipe terceirizada com expertise comprovada",
    "Monitoramento proativo de sistemas",
    "Relatórios detalhados de atendimento",
    "SLA garantido em contrato",
    "Base de conhecimento sempre atualizada",
    "Escalonamento inteligente de chamados"
  ];

  const testimonials = [
    {
      quote: "O suporte técnico terceirizado da Stellar Syntec é excepcional. Sempre que precisamos, a equipe está pronta para ajudar.",
      author: "Carlos Mendes",
      company: "TechCorp Brasil"
    },
    {
      quote: "A disponibilidade 24/7 e a qualidade do atendimento fizeram toda a diferença para nossa operação. Altamente recomendado!",
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
            Suporte Técnico Especializado
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Terceirizamos uma equipe altamente qualificada para oferecer suporte técnico 
            de excelência 24/7 para o seu negócio
          </p>
          <Link to="/contato">
            <Button size="lg" variant="gradient" className="animate-fade-in">
              <Phone className="mr-2 h-5 w-5" />
              Contratar Suporte
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Nossos Serviços de Suporte
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
            Benefícios do Nosso Suporte
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Resultados reais de empresas que confiaram em nosso suporte técnico
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
            Pronto Para Ter Suporte 24/7?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como nossa equipe terceirizada pode ajudar seu negócio
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
