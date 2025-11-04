import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { fromTheme } from "tailwind-merge";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    emailjs
      .send(
        "service_c5g5rmi",
        "template_bcnrj78",
        formData, // precisa bater com os campos definidos no template
        "16D2yOXa_MNQ0p0yI" // sua chave pública
      )
      .then(() => {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigada pelo contato. Responderei em breve.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        toast({
          title: "Erro ao enviar",
          //description: "Tente novamente mais tarde.",
          description: `Erro: ${JSON.stringify(error)}`,
        });
      });

    // setFormData({ name: "", email: "", phone: "", message: "" });SSS
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Estou aqui para ajudar. Entre em contato para tirar dúvidas ou
            agendar sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-foreground placeholder-zinc-100"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-foreground"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-foreground"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32 resize-none border-foreground"
                    placeholder="Conte um pouco sobre o que gostaria de conversar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  {/*<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                   <div>
                    <h4 className="font-medium text-foreground">Localização</h4>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123 - Sala 45<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div> */}
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Telefone</h4>
                    <p className="text-foreground">
                      (19) 99434-5748
                      <br />
                      Segunda a sexta: 18h às 22h
                      <br />
                      Sábados: a combinar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">E-mail</h4>
                    <p className="text-foreground">psieloizalima@icloud.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium text-foreground mb-4">
                Siga-me nas redes sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/psieloizalima/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 smooth-transition"
                >
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/eloiza-lima-0b239423a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 smooth-transition"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="bg-muted/50 rounded-xl">
              <h4 className="font-medium text-foreground mb-2">
                Privacidade e Sigilo
              </h4>
              <p className="text-sm text-foreground">
                Todas as informações compartilhadas são tratadas com total
                sigilo e confidencialidade, conforme o Código de Ética do
                Psicólogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
