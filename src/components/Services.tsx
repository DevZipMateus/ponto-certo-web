import { Gauge, Disc3, Cpu, Settings, CircleDot, Wrench } from "lucide-react";
import servicesTools from "@/assets/services-tools.jpg";
import mechanicWork from "@/assets/mechanic-work.jpg";
import engineRepair from "@/assets/engine-repair.jpg";

const services = [
  {
    icon: Gauge,
    title: "Suspensão",
    description: "Manutenção completa do sistema de suspensão para maior conforto e segurança na direção.",
  },
  {
    icon: Disc3,
    title: "Freios em geral",
    description: "Revisão e troca de pastilhas, discos e fluido de freio para garantir sua segurança.",
  },
  {
    icon: Cpu,
    title: "Injeção eletrônica",
    description: "Diagnóstico e reparo do sistema de injeção eletrônica com equipamentos modernos.",
  },
  {
    icon: Settings,
    title: "Motor",
    description: "Serviços especializados em motor, desde revisões até reparos mais complexos.",
  },
  {
    icon: CircleDot,
    title: "Embreagem",
    description: "Troca e ajuste de embreagem com peças de qualidade e mão de obra especializada.",
  },
  {
    icon: Wrench,
    title: "Manutenção geral",
    description: "Serviços diversos de manutenção preventiva e corretiva para seu veículo.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos <span className="text-accent">serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
            Oferecemos uma ampla gama de serviços automotivos com qualidade e garantia. Confie seu veículo a quem entende.
          </p>
        </div>

        {/* Services Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-card">
          <img 
            src={servicesTools} 
            alt="Ferramentas e peças automotivas Ponto Certo Auto Center" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 sm:from-primary/80 to-transparent flex items-center">
            <div className="p-4 sm:p-8 md:p-12 max-w-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3">
                Equipamentos de qualidade
              </h3>
              <p className="text-primary-foreground/90 text-sm sm:text-base">
                Trabalhamos com as melhores ferramentas e peças do mercado para garantir um serviço de excelência.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="bg-card p-5 sm:p-6 md:p-8 rounded-2xl shadow-card border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>
            </article>
          ))}
        </div>

        {/* Additional Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={mechanicWork} 
              alt="Mecânico trabalhando em suspensão e freios" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-primary-foreground">Suspensão e freios</h4>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">Profissionais especializados</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={engineRepair} 
              alt="Reparo de motor automotivo" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-primary-foreground">Motor e injeção</h4>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">Diagnóstico preciso</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5582996954908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-red-brand-light text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 shadow-button hover:shadow-lg w-full sm:w-auto justify-center"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
