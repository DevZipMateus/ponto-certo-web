import { Gauge, Disc3, Cpu, Settings, CircleDot, Wrench } from "lucide-react";
import servicesTools from "@/assets/services-tools.jpg";

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
    <section id="servicos" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-accent">serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla gama de serviços automotivos com qualidade e garantia. Confie seu veículo a quem entende.
          </p>
        </div>

        {/* Services Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-card">
          <img 
            src={servicesTools} 
            alt="Ferramentas e peças automotivas Ponto Certo Auto Center" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Equipamentos de qualidade
              </h3>
              <p className="text-primary-foreground/90">
                Trabalhamos com as melhores ferramentas e peças do mercado para garantir um serviço de excelência.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="bg-card p-8 rounded-2xl shadow-card border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5582996954908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-red-brand-light text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-button hover:shadow-lg"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
