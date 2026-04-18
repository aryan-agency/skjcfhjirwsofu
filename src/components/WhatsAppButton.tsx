import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919868039147?text=Hello%20Dr.%20Jha,%20I%20would%20like%20to%20consult%20with%20you.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-elegant transition-bounce hover:scale-105 animate-pulse-ring"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="hidden sm:inline font-semibold">Chat Now</span>
    </a>
  );
};

export default WhatsAppButton;
