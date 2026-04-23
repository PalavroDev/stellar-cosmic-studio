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
  MessageSquare,
  Instagram,
  Facebook,
  Users,
  Tag,
  TrendingUp,
  Inbox,
  Bot,
  BarChart3,
  CheckCircle2,
  Target,
  Award,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/galaxia-hero.jpg";

const GalaxiaPage = () => {
  const phoneNumber = "5521991231585";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Olá! Quero saber mais sobre a plataforma GalaxIA."
  )}`;

  const channels = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description:
        "Conecte múltiplas contas de WhatsApp Business e atenda seus clientes no canal mais usado do Brasil.",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description:
        "Receba e responda direct messages do Instagram diretamente da plataforma, sem trocar de aba.",
    },
    {
      icon: Facebook,
      title: "Facebook Messenger",
      description:
        "Centralize as conversas do Messenger junto com seus outros canais para um atendimento unificado.",
    },
  ];

  const features = [
    {
      icon: Inbox,
      title: "Caixa de Entrada Unificada",
      description:
        "Todas as mensagens de WhatsApp, Instagram e Facebook em uma única tela, organizadas por prioridade.",
    },
    {
      icon: Users,
      title: "Criação de Times",
      description:
        "Monte equipes de atendimento por departamento e atribua conversas automaticamente para o time certo.",
    },
    {
      icon: Tag,
      title: "Criação de Tags",
      description:
        "Organize contatos e conversas com tags personalizadas para segmentar e encontrar tudo rapidamente.",
    },
    {
      icon: TrendingUp,
      title: "Follow-up de Leads",
      description:
        "Acompanhe cada lead pelo funil de vendas com lembretes e ações automáticas para não perder oportunidades.",
    },
    {
      icon: Bot,
      title: "Atendimento com IA",
      description:
        "Assistentes virtuais inteligentes respondem dúvidas comuns 24/7 e transferem casos complexos para humanos.",
    },
    {
      icon: BarChart3,
      title: "Relatórios em Tempo Real",
      description:
        "Painel completo com métricas de atendimento, performance da equipe e satisfação do cliente.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Resposta Mais Rápida",
      description: "Reduza o tempo de primeira resposta em até 70%",
    },
    {
      icon: Users,
      title: "Equipe Organizada",
      description: "Distribua conversas de forma justa e eficiente",
    },
    {
      icon: TrendingUp,
      title: "Mais Conversões",
      description: "Não perca leads por falta de follow-up",
    },
    {
      icon: BarChart3,
      title: "Decisões com Dados",
      description: "Métricas claras para evoluir o atendimento",
    },
  ];

  const differentials = [
    "Integração nativa com WhatsApp, Instagram e Facebook",
    "Gestão de times e atribuição automática de conversas",
    "Sistema completo de tags e segmentação",
    "Follow-up automatizado de leads",
    "Aplicativo mobile para iOS e Android",
    "Suporte especializado em onboarding e treinamento",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-stellar-dark-muted to-background" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
            GalaxIA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            A plataforma de atendimento que une WhatsApp, Instagram e Facebook
            em um só lugar — com times, tags e follow-up de leads.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="gradient" className="animate-fade-in">
              Conhecer a GalaxIA
            </Button>
          </a>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Todos os Canais em <span className="text-gradient">Um Só Lugar</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Centralize as conversas dos principais canais de atendimento e
            nunca mais perca uma mensagem.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card
                  key={index}
                  className="cosmic-card hover:scale-105 transition-smooth"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-primary">
                      {channel.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {channel.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Recursos da <span className="text-gradient">Plataforma</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ferramentas completas para organizar sua operação de atendimento e
            vendas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Benefícios para o seu Negócio
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Resultados reais que a GalaxIA entrega para a sua operação.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Differentials */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Por que escolher a{" "}
            <span className="text-gradient">GalaxIA?</span>
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

          <div className="text-center mt-12">
            <Link to="/automacoes">
              <Button variant="outline" size="lg">
                Ver Planos da GalaxIA
              </Button>
            </Link>
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
            Pronto para unificar seu atendimento?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fale com um especialista e veja a GalaxIA em ação na sua operação.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Target className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalaxiaPage;
