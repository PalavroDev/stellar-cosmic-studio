import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
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
  Check,
  Sparkles,
  Rocket,
  Crown,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/automacoes-hero.jpg';

const AutomacoesPage = () => {
  const services = [
    {
      title: "Automação de Processos",
      description: "Otimize seus processos empresariais com automação inteligente que reduz custos e aumenta a eficiência operacional."
    },
    {
      title: "Integração de Sistemas",
      description: "Conecte todas as suas ferramentas e sistemas em um fluxo de trabalho unificado e automatizado."
    },
    {
      title: "Workflows Personalizados",
      description: "Criamos fluxos de trabalho sob medida para atender as necessidades específicas do seu negócio."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza até 80% do tempo gasto em tarefas repetitivas"
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Multiplique a capacidade da sua equipe"
    },
    {
      icon: Shield,
      title: "Redução de Erros",
      description: "Elimine erros humanos nos processos"
    },
    {
      icon: Users,
      title: "Foco no Estratégico",
      description: "Libere sua equipe para tarefas de maior valor"
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Processos executados em tempo real"
    }
  ];

  const differentials = [
    "Análise profunda dos seus processos atuais",
    "Implementação ágil e eficiente",
    "Suporte técnico especializado 24/7",
    "Integração com mais de 1000+ ferramentas",
    "ROI médio de 300% no primeiro ano",
    "Treinamento completo da equipe"
  ];

  const testimonials = [
    {
      quote: "A automação de workflows transformou completamente nossa operação. Reduzimos 70% do tempo em processos administrativos.",
      author: "João Silva",
      company: "Tech Solutions Lda"
    },
    {
      quote: "Excelente trabalho! A integração entre nossos sistemas foi perfeita e os resultados superaram nossas expectativas.",
      author: "Maria Santos",
      company: "Inovação Digital"
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
            Automações Inteligentes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Transforme seu negócio com automação de workflows que economiza tempo, 
            reduz custos e potencializa seus resultados
          </p>
          <Link to="/contato">
            <Button size="lg" variant="gradient" className="animate-fade-in">
              <Workflow className="mr-2 h-5 w-5" />
              Automatize Seu Negócio
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
            Soluções completas de automação para cada necessidade do seu negócio
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
                  <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Nossos Planos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Escolha o plano ideal para as necessidades da sua empresa
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Plano Básico */}
            <Card className="cosmic-card relative overflow-hidden hover:scale-105 transition-smooth">
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground" />
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted-foreground/20 mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">Básico</CardTitle>
                <CardDescription className="text-muted-foreground">Para pequenas empresas</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-foreground">R$ 497</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Até 5 automações", "Suporte por email", "Integrações básicas", "Relatórios mensais"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="block">
                  <Button variant="outline" className="w-full">Começar Agora</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Intermediário */}
            <Card className="cosmic-card relative overflow-hidden hover:scale-105 transition-smooth">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Intermediário</CardTitle>
                <CardDescription className="text-muted-foreground">Para empresas em crescimento</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-foreground">R$ 997</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Até 15 automações", "Suporte prioritário", "Integrações avançadas", "Relatórios semanais", "Dashboard personalizado"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="block">
                  <Button variant="gradient" className="w-full">Escolher Plano</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Ultra */}
            <Card className="cosmic-card relative overflow-hidden hover:scale-105 transition-smooth border-primary/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mx-auto mb-4">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Ultra</CardTitle>
                <CardDescription className="text-muted-foreground">Para grandes operações</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-foreground">R$ 1.997</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Automações ilimitadas", "Suporte 24/7", "Todas integrações", "Relatórios em tempo real", "Dashboard avançado", "Gerente dedicado"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="block">
                  <Button variant="gradient" className="w-full">Escolher Plano</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Personalizável */}
            <Card className="cosmic-card relative overflow-hidden hover:scale-105 transition-smooth">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mx-auto mb-4">
                  <Settings className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Personalizável</CardTitle>
                <CardDescription className="text-muted-foreground">Sob medida para você</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-foreground">Sob Consulta</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Recursos sob demanda", "SLA personalizado", "Integrações custom", "Consultoria dedicada", "Treinamento exclusivo", "Suporte VIP"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="block">
                  <Button variant="secondary" className="w-full">Falar com Vendas</Button>
                </Link>
              </CardContent>
            </Card>
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
            Resultados reais de empresas que automatizaram com a Stellar Syntec
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
            Pronto Para Automatizar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos transformar seus processos
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

export default AutomacoesPage;