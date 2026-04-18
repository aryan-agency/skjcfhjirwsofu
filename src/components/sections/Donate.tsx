import { Heart, MessageCircle } from "lucide-react";

const DONATE_WHATSAPP =
  "https://wa.me/919868039147?text=Hello%20sir,%20I%20wanted%20to%20chat%20about%20some%20donations,%20Please%20get%20back%20to%20me-%20Thankyou!";

const Donate = () => {
  return (
    <section id="donate" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-elegant">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/15 backdrop-blur mb-6">
              <Heart className="h-8 w-8" fill="currentColor" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-balance mb-5">
              Support Our Mission to Make India Disease-Free
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Every contribution helps us reach more families with free health camps,
              workshops and natural healing programs across India.
            </p>
            <a
              href={DONATE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-card text-primary px-8 py-4 text-lg font-bold shadow-elegant hover:scale-105 transition-bounce"
            >
              <MessageCircle className="h-5 w-5" />
              Donate via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
