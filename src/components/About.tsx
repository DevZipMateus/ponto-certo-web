import { Target, Eye, Heart, Shield, Zap, Users, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Shield, label: "Transparência" },
  { icon: Award, label: "Qualidade" },
  { icon: Heart, label: "Confiança" },
  { icon: Zap, label: "Agilidade" },
  { icon: Users, label: "Respeito ao cliente" },
];

export function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre o <span className="text-accent">Ponto Certo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
            Fundado em dezembro de 2025, atuamos no mercado de manutenção de automóveis com excelência e dedicação.
          </p>
        </div>

        {/* Image and intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img 
              src={aboutTeam} 
              alt="Equipe Ponto Certo Auto Center" 
              className="w-full h-56 sm:h-72 md:h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa equipe está pronta para atendê-lo</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No Ponto Certo Auto Center, contamos com profissionais experientes e qualificados, prontos para oferecer o melhor serviço automotivo da região.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa oficina está equipada com ferramentas modernas e utilizamos peças de qualidade para garantir que seu veículo receba o tratamento que merece.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {/* Missão */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Missão</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Entregar serviços automotivos com qualidade, confiança e rapidez para nossos clientes.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Visão</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Ser a oficina de referência da região pela excelência no atendimento e qualidade dos serviços.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Valores</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {values.map((value) => (
                <span
                  key={value.label}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium"
                >
                  <value.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="text-center p-4 sm:p-6 bg-primary rounded-xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-1">100%</p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">Compromisso</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-primary rounded-xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-1">5+</p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">Serviços</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-primary rounded-xl">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">Seg-Sex</p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">Atendimento</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-accent rounded-xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-accent-foreground mb-1">Rod. AL-220, Nº 65</p>
            <p className="text-accent-foreground/80 text-xs sm:text-sm">Jardim Esperança</p>
          </div>
        </div>
      </div>
    </section>
  );
}
