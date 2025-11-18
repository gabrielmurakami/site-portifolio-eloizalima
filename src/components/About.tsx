import { GraduationCap, Heart, Users } from "lucide-react";
import img from "../assets/aboutme.png";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 group">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br from-secondary to-accent shadow-2xl transform group-hover:scale-[1.02] smooth-transition">
              <img
                src={img}
                alt="Ambiente acolhedor de terapia"
                className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10 animate-float"></div>
          </div>

          {/* Content */}
          <div className="space-y-10 lg:space-y-12 order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary-foreground leading-tight">
                Sobre mim
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Sou psicóloga formada pela Universidade São Francisco, com
                especialização em Terapia Cognitivo-Comportamental e mais de 2
                anos de experiência dedicados ao cuidado da saúde mental.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Minha abordagem é centrada no acolhimento e na escuta ativa,
                criando um ambiente seguro onde você pode se expressar
                livremente e encontrar caminhos para o bem-estar.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Acredito que cada pessoa possui recursos únicos para superar
                desafios e construir uma vida mais plena e significativa.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 pt-8">
              <div className="text-center space-y-4 group hover-lift bg-background/50 p-6 rounded-2xl">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 smooth-transition group-hover:scale-110">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-lg mb-1">
                    Formação
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Especialização em TCC
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 group hover-lift bg-background/50 p-6 rounded-2xl">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 smooth-transition group-hover:scale-110">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-lg mb-1">
                    Abordagem
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Humanizada
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 group hover-lift bg-background/50 p-6 rounded-2xl">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 smooth-transition group-hover:scale-110">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-lg mb-1">
                    Experiência
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    2+ anos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
