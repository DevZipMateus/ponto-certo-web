import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5582996954908"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" fill="currentColor" />
    </a>
  );
}
