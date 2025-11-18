import { Users, User, Video, MapPin, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Terapia Individual",
      description:
        "Atendimento personalizado para questões como ansiedade, depressão, autoestima e desenvolvimento pessoal.",
      duration: "1 h",
    },
    {
      icon: Video,
      title: "Atendimento Online",
      description:
        "Sessões por videochamada com a mesma qualidade do atendimento presencial, no conforto da sua casa.",
      duration: "1 h",
    },
    // {
    //   icon: MapPin,
    //   title: "Atendimento Presencial",
    //   description:
    //     "Consultas no consultório, em ambiente acolhedor e seguro, localizado no centro da cidade.",
    //   duration: "50 min",
    // },
  ];

  return (
    <section id="servicos" className="section-padding gradient-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16 lg:mb-24 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto"></div>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-light leading-relaxed">
            Ofereço diferentes modalidades de atendimento para atender às suas
            necessidades de forma personalizada e acolhedora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-10 lg:p-12 rounded-[2rem] border-2 hover:border-primary/30 hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition group-hover:shadow-lg">
                  <service.icon className="w-12 h-12 text-primary-foreground" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-serif text-primary-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <span className="text-base font-semibold text-primary-foreground">
                    Duração: {service.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="glass-effect p-10 lg:p-12 rounded-[2rem] border-2 hover:border-primary/30 smooth-transition animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-serif text-primary-foreground mb-10 lg:mb-12 text-center">
            Informações Importantes
          </h3>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            <div className="space-y-4 text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 smooth-transition">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <strong className="text-primary-foreground block text-xl font-semibold">
                Horários
              </strong>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Segunda a sexta: 18h às 22h
                <br />
                Sábados: a combinar
              </p>
            </div>
            <div className="space-y-4 text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 smooth-transition">
                <Video className="w-8 h-8 text-primary-foreground" />
              </div>
              <strong className="text-primary-foreground block text-xl font-semibold">
                Modalidades
              </strong>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Online e
                <br />
                Individual
              </p>
            </div>
            <div className="space-y-4 text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 smooth-transition">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <strong className="text-primary-foreground block text-xl font-semibold">
                Abordagem
              </strong>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Terapia Cognitivo-Comportamental
                <br />
                Técnicas humanísticas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
