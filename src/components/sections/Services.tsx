import { Flower2, Hand, Building2, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Yoga Therapy",
    desc: "Personalized yoga sessions designed to heal chronic conditions, improve flexibility and restore inner balance.",
  },
  {
    icon: Hand,
    title: "Acupressure Treatment",
    desc: "Targeted pressure-point therapy that activates the body's natural healing response — drug-free and effective.",
  },
  {
    icon: Building2,
    title: "Corporate Wellness Programs",
    desc: "Custom workplace wellness initiatives that reduce stress, boost productivity and improve team well-being.",
  },
  {
    icon: GraduationCap,
    title: "Health Education Workshops",
    desc: "Interactive workshops on natural living, preventive care and lifestyle correction for all age groups.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Healing Services & Programs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal group relative rounded-3xl bg-card p-8 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-bounce"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-bounce">
                <s.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
