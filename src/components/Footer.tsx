import { Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Ponto Certo Auto Center" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              O ponto certo para o seu carro. Confiança e precisão em cada serviço.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-bold mb-4">Links rápidos</h3>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Início
              </a>
              <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Sobre
              </a>
              <a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Serviços
              </a>
              <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-foreground font-bold mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5582996954908"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Phone size={16} />
                (82) 99695-4908
              </a>
              <a
                href="mailto:eduardobelarmino97@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                eduardobelarmino97@gmail.com
              </a>
              <a
                href="https://www.instagram.com/ponto_certo_auto_center"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Instagram size={16} />
                @ponto_certo_auto_center
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Ponto Certo Auto Center. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
