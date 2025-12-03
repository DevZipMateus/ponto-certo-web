import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import happyCustomer from "@/assets/happy-customer.jpg";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-accent">contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você. Entre em contato conosco e agende seu serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/5582996954908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  (82) 99695-4908
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                <a
                  href="mailto:eduardobelarmino97@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  eduardobelarmino97@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rodovia AL-220, Nº 65<br />
                  Jardim Esperança
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Horário de funcionamento</h3>
                <p className="text-muted-foreground">Segunda a Sexta: 08:00 às 18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <Instagram className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Instagram</h3>
                <a
                  href="https://www.instagram.com/ponto_certo_auto_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  @ponto_certo_auto_center
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card with Image */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={happyCustomer} 
                alt="Cliente satisfeito recebendo as chaves do carro" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-hero-gradient p-8 md:p-12 rounded-2xl flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Pronto para agendar seu serviço?
              </h3>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Entre em contato pelo WhatsApp e receba atendimento rápido e personalizado. Estamos aqui para ajudar você!
              </p>
              <a
                href="https://wa.me/5582996954908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-brand-light text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-button hover:shadow-lg w-full sm:w-auto"
              >
                <Phone size={20} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
