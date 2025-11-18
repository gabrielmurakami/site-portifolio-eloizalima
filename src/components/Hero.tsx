import { Heart, Sparkles } from "lucide-react";
import logo from "../assets/people.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="section-padding pt-32 min-h-screen flex items-center gradient-bg relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:space-y-12 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4 animate-fade-in">
                <Sparkles size={20} className="text-primary/60 animate-pulse-slow" />
                <span className="text-sm md:text-base font-medium text-primary tracking-widest uppercase">
                  Psicóloga Clínica
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.95] tracking-tight">
                Eloiza Lima
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>

              <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-relaxed font-light max-w-2xl">
                Um espaço seguro e acolhedor para cuidar da sua saúde mental com
                carinho e profissionalismo.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-primary/70 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Heart size={20} className="text-primary/50 animate-pulse-slow" />
              <span className="text-base font-medium">
                Cuidando com dedicação desde 2021
              </span>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent to-secondary shadow-2xl transform hover:scale-[1.02] smooth-transition hover:shadow-primary/20">
                <img
                  src={logo}
                  alt="Eloiza Lima - Psicóloga"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full -z-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/30 rounded-full -z-10 animate-float"></div>
              <div className="absolute top-1/2 -right-6 w-20 h-20 bg-primary/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
