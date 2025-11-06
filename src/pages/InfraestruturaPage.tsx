import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Server, Shield, Zap, Clock, Award, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/infraestrutura-hero.jpg";

const InfraestruturaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-cyan">
              Infraestrutura de TI Robusta
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Equipamentos e soluções de infraestrutura para manter seu negócio sempre conectado e seguro.
            </p>
            <Link to="/contato">
              <Button size="lg" variant="gradient" className="text-lg px-8">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Nossas Soluções de Infraestrutura
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fornecemos equipamentos e serviços completos para sua infraestrutura de TI
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 border-primary/20">
              <CardContent className="p-6">
                <Server className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Servidores e Storage</h3>
                <p className="text-muted-foreground">
                  Servidores de alta performance e soluções de armazenamento escaláveis para seus dados críticos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-primary/20">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Segurança de Rede</h3>
                <p className="text-muted-foreground">
                  Firewalls, sistemas de detecção de intrusão e proteção contra ameaças cibernéticas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-primary/20">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Redes e Conectividade</h3>
                <p className="text-muted-foreground">
                  Switches, roteadores e soluções wireless para conectividade rápida e confiável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Benefícios da Nossa Infraestrutura
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Alta Disponibilidade</h3>
              <p className="text-muted-foreground text-sm">99.9% de uptime garantido</p>
            </div>

            <div className="text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Segurança Máxima</h3>
              <p className="text-muted-foreground text-sm">Proteção multicamadas</p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Escalabilidade</h3>
              <p className="text-muted-foreground text-sm">Cresce com seu negócio</p>
            </div>

            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Suporte 24/7</h3>
              <p className="text-muted-foreground text-sm">Equipe sempre disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Por Que Escolher Nossa Infraestrutura?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Equipamentos de Última Geração</h3>
                <p className="text-muted-foreground">
                  Trabalhamos com as melhores marcas e tecnologias mais recentes do mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Manutenção Preventiva</h3>
                <p className="text-muted-foreground">
                  Monitoramento contínuo e manutenções programadas para evitar problemas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Consultoria Especializada</h3>
                <p className="text-muted-foreground">
                  Nossa equipe ajuda a dimensionar a infraestrutura ideal para seu negócio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Redundância e Backup</h3>
                <p className="text-muted-foreground">
                  Sistemas redundantes e backup automático para garantir a continuidade do negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "A infraestrutura fornecida pela Stellar Syntec transformou nossa operação. Zero downtime desde a implementação."
                </p>
                <p className="font-semibold text-foreground">Carlos Mendes</p>
                <p className="text-sm text-muted-foreground">CTO - Tech Solutions</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Excelente suporte técnico e equipamentos de primeira linha. Nossa rede nunca esteve tão estável."
                </p>
                <p className="font-semibold text-foreground">Mariana Costa</p>
                <p className="text-sm text-muted-foreground">Gerente de TI - Inovação Corp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Modernizar Sua Infraestrutura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos fortalecer a base tecnológica do seu negócio.
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfraestruturaPage;
