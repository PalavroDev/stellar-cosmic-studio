import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar seu negócio a crescer
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cosmic-card p-6 rounded-lg">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contato@stellarsyntec.com"
                  className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="text-foreground">contato@stellarsyntec.com</p>
                  </div>
                </a>

                <a
                  href="tel:+5511999999999"
                  className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="text-foreground">+55 (21) 99123-1585</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/stellarsyntec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground">linkedin.com/company/stellarsyntec</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="cosmic-card p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                Horário de Atendimento
              </h3>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9:00 - 18:00
                <br />
                Sábado: 9:00 - 13:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
