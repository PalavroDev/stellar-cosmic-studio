import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
            
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger 
                className="nav-link whitespace-nowrap flex items-center gap-1 outline-none"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Soluções
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-80 bg-background/95 backdrop-blur-lg border-2 border-[#00FEFF] animate-in slide-in-from-top-2 duration-200"
                align="center"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <DropdownMenuItem 
                  asChild
                  className="flex flex-col items-start p-4 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 border-b border-[#00FEFF]/30"
                >
                  <Link to="/automacoes">
                    <span className="font-semibold text-base text-foreground">AUTOMAÇÕES</span>
                    <span className="text-sm text-muted-foreground">Soluções para Automação de Workflows</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  asChild
                  className="flex flex-col items-start p-4 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 border-b border-[#00FEFF]/30"
                >
                  <Link to="/desenvolvimento">
                    <span className="font-semibold text-base text-foreground">DESENVOLVIMENTO</span>
                    <span className="text-sm text-muted-foreground">Soluções de Desenvolvimento de Aplicações e Software</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  asChild
                  className="flex flex-col items-start p-4 cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                >
                  <Link to="/infraestrutura">
                    <span className="font-semibold text-base text-foreground">INFRAESTRUTURA</span>
                    <span className="text-sm text-muted-foreground">Soluções de Equipamentos de TI</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
            <Link to="/suporte-tecnico" className="nav-link whitespace-nowrap">
              Suporte Técnico
            </Link>
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
              to="/suporte-tecnico"
              className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Suporte Técnico
            </Link>
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
