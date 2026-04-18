import { MessageCircle, Heart, Youtube, Award, Users, Sparkles } from "lucide-react";
import drImage from "@/assets/dr-kk-jha.png";

const WHATSAPP =
  "https://wa.me/919868039147?text=Hello%20Dr.%20Jha,%20I%20would%20like%20to%20consult%20with%20you.";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-soft"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-trust/10 blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              20+ Years of Natural Healing
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] text-balance">
              Transform Your Health{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Naturally
              </span>{" "}
              with Yoga & Acupressure
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              20+ Years of Healing · Founder of <strong className="text-foreground">WHIP</strong> · Co-Founder of <strong className="text-foreground">BU Pain Care Clinic</strong>
            </p>

            <a
              href="https://youtube.com/@krishnakantjha?si=0MBerWfUY0-NlYfT"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-destructive hover:underline"
            >
              <Youtube className="h-5 w-5" />
              Watch on YouTube @krishnakantjha
            </a>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-bounce"
              >
                <MessageCircle className="h-5 w-5" />
                Consult Now
              </a>
              <a
                href="#donate"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-card px-7 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Heart className="h-5 w-5" />
                Support Our Mission
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Award, n: "20+", l: "Years Exp." },
                { icon: Users, n: "10K+", l: "Lives Healed" },
                { icon: Heart, n: "100%", l: "Natural" },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card/80 backdrop-blur p-4 text-center shadow-soft">
                  <t.icon className="h-5 w-5 text-primary mx-auto mb-1.5" />
                  <p className="font-display font-bold text-xl text-foreground">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] blur-2xl opacity-30 animate-float" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border-8 border-card">
              <img
                src={drImage}
                alt="Dr. K. K. Jha — Yoga & Acupressure Expert"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elegant max-w-[220px] animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">Featured on DD International</p>
                  <p className="text-xs text-muted-foreground">Health expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
