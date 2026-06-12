import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Workflow,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Users,
  CheckCircle2,
  Target,
  Award,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from '@/assets/automacoes-hero.jpg';

const AutomacoesPage = () => {
  const services = [
    {
      title: "Ate",
      description:
        "Criamos fluxos de trabalho sob medida para atender as necessidades específicas do seu negócio.",
    },
    {
      title: "Automação de Processos",
      description:
        "Otimize seus processos empresariais com automação inteligente que reduz custos e aumenta a eficiência operacional.",
    },
    {
      title: "Integração de Sistemas",
      description:
        "Conecte todas as suas ferramentas e sistemas em um fluxo de trabalho unificado e automatizado.",
    },
    {
      title: "Workflows Personalizados",
      description:
        "Criamos fluxos de trabalho sob medida para atender as necessidades específicas do seu negócio.",
    },
    {
      title: "Plataforma de Atendimento",
      description:
        "Atenda seus clientes com mais agilidade, nossa plataforma reune todos os canais de atendimentos em um so lugar`.",
    },
    {
      title: "Atendimento Automatico",
      description:
        "Garanta a disponibilidade total do seu negócio, oferecendo atendimento inteligente e ininterrupto 24/7.",
    },

  ];

  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza até 80% do tempo gasto em tarefas repetitivas",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Multiplique a capacidade da sua equipe",
    },
    {
      icon: Shield,
      title: "Redução de Erros",
      description: "Elimine erros humanos nos processos",
    },
    {
      icon: Users,
      title: "Foco no Estratégico",
      description: "Libere sua equipe para tarefas de maior valor",
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Processos executados em tempo real",
    },
  ];

  const differentials = [
    "Análise profunda dos seus processos atuais",
    "Implementação ágil e eficiente",
    "Suporte técnico especializado 24/7",
    "Integração com mais de 1000+ ferramentas",
    "Crescimento do ROI da sua empresa ",
    "Treinamento completo da equipe",
  ];

  const testimonials = [
    {
      quote:
        "A automação de workflows transformou completamente nossa operação. Reduzimos 70% do tempo em processos administrativos.",
      author: "João Silva",
      company: "Tech Solutions Lda",
    },
    {
      quote:
        "Excelente trabalho! A integração entre nossos sistemas foi perfeita e os resultados superaram nossas expectativas.",
      author: "Maria Santos",
      company: "Inovação Digital",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-stellar-dark-muted to-background" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
             backgroundImage: `url(${heroBackground})`
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
            Automações
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Transforme seu negócio com automação de workflows que economiza
            tempo, reduz custos e potencializa seus resultados
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
            O que podemos automatizar para sua<span className="text-gradient"> Empresa</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Soluções completas de automação para cada necessidade do seu negócio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-smooth"
              >
                <CardHeader>
                  <CardTitle className="text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
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
            Benefícios da Automação
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Vantagens competitivas que farão a diferença no seu negócio
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
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
            <span>Por Que Escolher a</span> <span className="text-gradient">Stellar Syntec?</span> 
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/20 transition-smooth"
              >
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Pronto Para Automatizar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos transformar
            seus processos
          </p>
          <Link to="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
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

export default AutomacoesPage;
