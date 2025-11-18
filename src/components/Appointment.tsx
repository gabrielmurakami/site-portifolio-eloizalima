import { Calendar, MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Appointment = () => {
  return (
    <section id="agendamento" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto container-padding text-center">
        <div className="space-y-12 lg:space-y-16">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary-foreground">
              Agende sua Consulta
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Dê o primeiro passo em direção ao seu bem-estar. Escolha a forma
              mais conveniente para entrar em contato.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="glass-effect p-8 lg:p-10 rounded-[2rem] border-2 hover:border-green-500/50 hover-lift group animate-scale-in">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-green-100 group-hover:scale-110 smooth-transition">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-primary-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground font-light text-lg">
                    Resposta rápida e prática
                  </p>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 rounded-2xl h-14 text-white font-medium text-base hover:scale-105 smooth-transition shadow-lg hover:shadow-xl"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5519994345748?text=Olá! Gostaria de agendar uma consulta.",
                      "_blank"
                    )
                  }
                >
                  Conversar
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="glass-effect p-8 lg:p-10 rounded-[2rem] border-2 hover:border-blue-500/50 hover-lift group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-6">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-100 group-hover:scale-110 smooth-transition">
                  <Calendar className="w-10 h-10 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-primary-foreground">
                    Calendly
                  </h3>
                  <p className="text-muted-foreground font-light text-lg">
                    Agende diretamente na agenda
                  </p>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl h-14 text-white font-medium text-base hover:scale-105 smooth-transition shadow-lg hover:shadow-xl"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/psieloizalima/30min",
                      "_blank"
                    )
                  }
                >
                  Agendar
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="glass-effect p-8 lg:p-10 rounded-[2rem] border-2 hover:border-primary/50 hover-lift group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 smooth-transition">
                  <Mail className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-primary-foreground">
                    E-mail
                  </h3>
                  <p className="text-muted-foreground font-light text-lg">
                    Contato por e-mail
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-2xl h-12 border-border/50 hover:bg-accent text-primary"
                  onClick={() =>
                    window.open(
                      "mailto:psieloizalima@icloud.com?subject=Agendamento de Consulta",
                      "_blank"
                    )
                  }
                >
                  Enviar E-mail
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Process Info */}
          <div className="bg-white p-10 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-serif text-primary-foreground mb-10">
              Como funciona o agendamento
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">
                    1
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">
                    Contato
                  </h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Entre em contato por uma das opções
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">
                    2
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">
                    Conversa
                  </h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Conversaremos sobre suas necessidades
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">
                    3
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">
                    Agendamento
                  </h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Escolheremos data e horário
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-medium text-lg">
                    4
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-foreground">
                    Consulta
                  </h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Seu primeiro passo rumo ao bem-estar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-center space-x-3 text-muted-foreground">
            <Clock size={20} />
            <span className="font-light">
              Normalmente respondo em até 2 horas durante horário comercial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
