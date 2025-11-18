
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border/30 py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto container-padding relative z-10">
        <div className="text-center space-y-8 lg:space-y-10">
          {/* Logo */}
          <div className="font-serif text-3xl lg:text-4xl font-semibold text-primary animate-fade-in">
            Eloiza Lima
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto font-light text-lg lg:text-xl leading-relaxed">
            Cuidando da sua saúde mental com carinho, profissionalismo e dedicação.
          </p>
          
          {/* Professional Info */}
          <div className="space-y-3 text-muted-foreground font-light text-base">
            <p className="font-medium">CRP 06/220078 - Psicóloga Clínica</p>
            <p>Especialista em Terapia Cognitivo-Comportamental</p>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>
          
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-3 text-muted-foreground font-light">
            <span>© 2025 Eloiza Lima. Todos os direitos reservados.</span>
          </div>
          
          {/* Additional Info */}
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Este site foi desenvolvido para fins informativos. O conteúdo não substitui 
            uma consulta presencial. Em caso de emergência, procure atendimento médico imediato.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
