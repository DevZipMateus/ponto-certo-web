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
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre o <span className="text-accent">Ponto Certo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fundado em dezembro de 2025, atuamos no mercado de manutenção de automóveis com excelência e dedicação.
          </p>
        </div>

        {/* Image and intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img 
              src={aboutTeam} 
              alt="Equipe Ponto Certo Auto Center" 
              className="w-full h-80 object-cover"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Entregar serviços automotivos com qualidade, confiança e rapidez para nossos clientes.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser a oficina de referência da região pela excelência no atendimento e qualidade dos serviços.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Valores</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  <value.icon className="w-3.5 h-3.5" />
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-primary rounded-xl">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">100%</p>
            <p className="text-primary-foreground/80 text-sm">Compromisso</p>
          </div>
          <div className="text-center p-6 bg-primary rounded-xl">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">5+</p>
            <p className="text-primary-foreground/80 text-sm">Serviços</p>
          </div>
          <div className="text-center p-6 bg-primary rounded-xl">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">Seg-Sex</p>
            <p className="text-primary-foreground/80 text-sm">Atendimento</p>
          </div>
          <div className="text-center p-6 bg-accent rounded-xl">
            <p className="text-lg md:text-xl font-bold text-accent-foreground mb-1">Rod. AL-220, Nº 65</p>
            <p className="text-accent-foreground/80 text-sm">Jardim Esperança</p>
          </div>
        </div>
      </div>
    </section>
  );
}
