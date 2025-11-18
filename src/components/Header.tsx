import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30 shadow-lg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="font-serif text-2xl lg:text-3xl font-semibold text-primary">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary hover:text-primary/80 smooth-transition hover:scale-105"
            >
              Eloiza Lima
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary-foreground hover:text-primary smooth-transition font-medium text-base lg:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-primary-foreground hover:text-primary smooth-transition font-medium text-base lg:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-primary-foreground hover:text-primary smooth-transition font-medium text-base lg:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("agendamento")}
              className="text-primary-foreground hover:text-primary smooth-transition font-medium text-base lg:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Agendamento
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary-foreground hover:text-primary smooth-transition font-medium text-base lg:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-primary-foreground hover:text-primary smooth-transition hover:scale-110 rounded-xl hover:bg-primary/5"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-border/50 animate-slide-in-left">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-medium text-lg hover:translate-x-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-medium text-lg hover:translate-x-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-medium text-lg hover:translate-x-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("agendamento")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-medium text-lg hover:translate-x-2"
              >
                Agendamento
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-primary-foreground hover:text-primary smooth-transition font-medium text-lg hover:translate-x-2"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
