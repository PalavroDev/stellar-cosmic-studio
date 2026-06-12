import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5521991231585'; // Format: country code + area code + number (no spaces or special characters)
  const message = 'Olá! Gostaria de saber mais sobre as soluções da Stellar Syntec.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
