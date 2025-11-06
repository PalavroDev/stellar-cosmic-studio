import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Rocket, 
  Shield, 
  Zap,
  CheckCircle2,
  Target,
  Award,
  Star,
  Layers,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/desenvolvimento-hero.jpg';

const DesenvolvimentoPage = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas, responsivas e escaláveis com as melhores tecnologias do mercado."
    },
    {
      title: "Aplicações Mobile",
      description: "Apps nativos e híbridos para iOS e Android com excelente experiência de usuário."
    },
    {
      title: "Sistemas Personalizados",
      description: "Soluções sob medida para atender as necessidades específicas do seu negócio."
    }
  ];

  const benefits = [
    {
      icon: Code2,
      title: "Código de Qualidade",
      description: "Desenvolvimento com as melhores práticas"
    },
    {
      icon: Rocket,
      title: "Entrega Rápida",
      description: "Metodologia ágil para resultados rápidos"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Proteção de dados e segurança robusta"
    },
    {
      icon: Layers,
      title: "Arquitetura Escalável",
      description: "Sistemas preparados para crescer"
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Aplicações rápidas e otimizadas"
    }
  ];

  const differentials = [
    "Tecnologias modernas e atualizadas",
    "Equipe técnica altamente qualificada",
    "Suporte e manutenção contínua",
    "Integração com sistemas existentes",
    "Documentação completa do projeto",
    "Testes rigorosos de qualidade"
  ];

  const testimonials = [
    {
      quote: "O sistema desenvolvido pela Stellar Syntec superou todas as expectativas. Aumentamos nossa eficiência em 200%.",
      author: "Carlos Oliveira",
      company: "TechCorp Solutions"
    },
    {
      quote: "Profissionalismo excepcional! O app mobile ficou perfeito e nossos clientes adoraram a experiência.",
      author: "Ana Costa",
      company: "Retail Digital"
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
            Desenvolvimento de Software
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Transforme suas ideias em realidade com aplicações web e mobile de alta qualidade, 
            construídas com tecnologia de ponta
          </p>
          <Link to="/contato">
            <Button size="lg" variant="gradient" className="animate-fade-in">
              <Code2 className="mr-2 h-5 w-5" />
              Inicie Seu Projeto
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Soluções completas de desenvolvimento para cada necessidade tecnológica
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
            Benefícios do Nosso Desenvolvimento
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Vantagens que fazem a diferença no seu projeto
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
            Resultados reais de empresas que desenvolveram com a Stellar Syntec
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
            Pronto Para Desenvolver?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos criar a solução perfeita
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

export default DesenvolvimentoPage;
