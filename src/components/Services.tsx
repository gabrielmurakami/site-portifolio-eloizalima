import { Users, User, Video, MapPin } from "lucide-react";

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
    <section id="servicos" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Serviços
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 rounded-full mx-auto"></div>
          <p className="text-xl text-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Ofereço diferentes modalidades de atendimento para atender às suas
            necessidades de forma personalizada e acolhedora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl border border-border/50 hover:shadow-lg smooth-transition group"
            >
              <div className="space-y-8">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 smooth-transition">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-primary-foreground">
                    Duração: {service.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white p-10 rounded-3xl border border-border/50">
          <h3 className="text-2xl font-serif text-primary-foreground mb-8 text-center">
            Informações Importantes
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <strong className="text-primary-foreground block text-lg">
                Horários
              </strong>
              <p className="text-muted-foreground font-light">
                Segunda a sexta: 18h às 22h
                <br />
                Sábados: a combinar
              </p>
            </div>
            <div className="space-y-3">
              <strong className="text-primary-foreground block text-lg">
                Modalidades
              </strong>
              <p className="text-muted-foreground font-light">
                {/* Presencial */}
                Online e
                <br />
                Individual
              </p>
            </div>
            <div className="space-y-3">
              <strong className="text-primary-foreground block text-lg">
                Abordagem
              </strong>
              <p className="text-muted-foreground font-light">
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
