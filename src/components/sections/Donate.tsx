import { Heart, MessageCircle } from "lucide-react";
import donateQr from "@/assets/donate-qr.png";

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

            {/* QR Code */}
            <div className="flex flex-col items-center mb-8">
              <p className="text-base md:text-lg font-semibold mb-4 text-primary-foreground">
                Scan to Support Our Mission
              </p>
              <div className="bg-card p-3 sm:p-4 rounded-2xl shadow-elegant border-4 border-white/30 ring-2 ring-white/20">
                <img
                  src={donateQr}
                  alt="Donation QR code to support WHIP mission for a disease-free India"
                  loading="lazy"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
              <p className="text-sm md:text-base text-primary-foreground/85 mt-4 max-w-md">
                Take a screenshot or scan this QR to contribute and support our mission of a disease-free India.
              </p>
            </div>

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
