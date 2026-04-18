import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Anjali Sharma",
    role: "Delhi",
    text: "After 8 years of chronic back pain, Dr. Jha's acupressure sessions gave me my life back. Truly a healer.",
  },
  {
    name: "Rakesh Verma",
    role: "Noida",
    text: "His yoga therapy helped me reverse my diabetes naturally. No medicines for 2 years now — only gratitude.",
  },
  {
    name: "Meena Kapoor",
    role: "Gurugram",
    text: "Calm, knowledgeable and deeply caring. Dr. Jha is not just a doctor, he's a guide for healthy living.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Stories of Healing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="reveal rounded-3xl bg-card p-8 shadow-soft hover:shadow-elegant transition-smooth border border-border"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
