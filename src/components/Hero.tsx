import { Phone, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 animate-fade-in">
              Ponto Certo Auto Center
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
              O ponto certo para o seu carro. Oferecemos serviços automotivos com qualidade, confiança e rapidez para manter seu veículo sempre em perfeitas condições.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://wa.me/5582996954908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-brand-light text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-button hover:shadow-lg"
              >
                <Phone size={20} />
                Agende agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Nossos serviços
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Telefone</p>
                  <p className="font-semibold">(82) 99695-4908</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Horário</p>
                  <p className="font-semibold">Seg-Sex: 08h às 18h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Localização</p>
                  <p className="font-semibold">Rod. AL-220, Nº 65, Jardim Esperança</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo on the right */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <img 
              src={logo} 
              alt="Logo Ponto Certo Auto Center" 
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
