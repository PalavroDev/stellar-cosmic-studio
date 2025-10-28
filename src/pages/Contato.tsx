import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const phoneNumber = '5511999999999';
  const message = 'Olá! Gostaria de saber mais sobre as soluções da Stellar Syntec.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para ajudar a transformar seu negócio com nossas soluções tecnológicas.
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="cosmic-card p-8 sm:p-12 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                Fale Conosco Agora
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Clique no botão abaixo para iniciar uma conversa diretamente com nossa equipe via WhatsApp. 
              </p>
            

              <Button
                asChild
                variant="gradient"
                size="lg"
                className="text-white text-lg px-8 py-6 h-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Other Contact Methods */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">
              Outras Formas de Contato
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <a
                href="https://api.whatsapp.com/send/?phone=5521991231585&text&type=phone_number&app_absent=0"
                className="cosmic-card p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    Telefone
                  </h4>
                  <p className="text-muted-foreground">+55 (21) 99123-1585</p>
                </div>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="max-w-2xl mx-auto">
            <div className="cosmic-card p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                Horário de Atendimento
              </h3>
              <p className="text-muted-foreground text-lg">
                Nossa equipe está disponível para atendê-lo nos seguintes horários:
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-foreground font-medium">Segunda a Sexta: 9:00 - 18:00</p>
                <p className="text-foreground font-medium">Sábado: 9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
       </main>

      <Footer />
    </div>
  );
};

export default ContactPage;