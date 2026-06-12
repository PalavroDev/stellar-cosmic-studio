import { Linkedin, Mail, Phone } from 'lucide-react';
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
             <img src={logo} alt="Stellar Syntec Logo" className="h-16 w-auto" />
            <p className="text-muted-foreground mb-4">
              <br />
              Desenvolvendo soluções tecnológicas inovadoras que transformam negócios e impulsionam o futuro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/stellarsyntec"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth group"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:contato@stellarsyntec.com"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth group"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5521991231585&text&type=phone_number&app_absent=0"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth group"
              >
                <Phone className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Sobre Nós
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-2 text-muted-foreground">
               <a href="mailto:contato@stellarsyntec.com">
              <li>contato@stellarsyntec.com</li>
              </a>
              
              <a href="https://api.whatsapp.com/send/?phone=5521991231585&text&type=phone_number&app_absent=0">
              <li>+55 (21) 99123-1585</li>
              </a>
              <li className="pt-2">
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Stellar Syntec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
