import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 group ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20 group-hover:h-24 transition-all duration-300">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Stellar Syntec Logo" className="h-16 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link whitespace-nowrap"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="nav-link whitespace-nowrap"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link whitespace-nowrap"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link whitespace-nowrap"
            >
              Sobre Nós
            </button>
            <Link to="/contato" className="nav-link whitespace-nowrap">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Sobre Nós
            </button>
            <Link
              to="/contato"
              className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
