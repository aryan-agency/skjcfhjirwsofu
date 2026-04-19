import { Eye, Target } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Purpose
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal group rounded-3xl bg-card p-10 shadow-card hover:shadow-elegant transition-smooth border border-border">
            <div className="h-14 w-14 rounded-2xl bg-gradient-trust flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
              <Eye className="h-7 w-7 text-trust-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create a healthier society where every individual has access to natural,
              preventive and holistic healing — empowering people to live a disease-free,
              peaceful and balanced life.
            </p>
          </div>

          <div className="reveal group rounded-3xl bg-card p-10 shadow-card hover:shadow-elegant transition-smooth border border-border">
            <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Mission</h3>
            <p className="text-2xl font-display font-semibold text-primary mb-3">
              "BIMARI MUKT BHARAT"
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To eliminate disease from every Indian household through awareness, yoga,
              acupressure and natural lifestyle education — making India truly disease-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
