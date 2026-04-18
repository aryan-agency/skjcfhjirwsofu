import whipLogo from "@/assets/whip-logo.png";
import { Globe, Leaf, HeartHandshake } from "lucide-react";

const NGO = () => {
  return (
    <section id="ngo" className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-25 animate-float" />
              <img
                src={whipLogo}
                alt="WHIP — World Health Initiative for Peace"
                className="relative w-72 md:w-96 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Our NGO
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              World Health Initiative for Peace (WHIP)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              WHIP is a non-profit initiative founded by Dr. K. K. Jha to spread health
              awareness, promote preventive care and make natural healing accessible to
              every Indian household — regardless of background or income.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Globe, t: "Health Awareness", d: "Camps, talks & free guidance across India" },
                { icon: Leaf, t: "Preventive Care", d: "Lifestyle education to stop disease before it starts" },
                { icon: HeartHandshake, t: "Natural Healing", d: "Yoga, acupressure & traditional wellness for all" },
              ].map((it, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl bg-card p-4 shadow-soft">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <it.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{it.t}</p>
                    <p className="text-sm text-muted-foreground">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NGO;
