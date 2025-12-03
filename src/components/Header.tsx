import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Ponto Certo Auto Center" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-accent font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5582996954908"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-red-brand-light text-accent-foreground px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-button hover:shadow-lg"
            >
              Agendar serviço
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-accent font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5582996954908"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-red-brand-light text-accent-foreground px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200"
              >
                Agendar serviço
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
