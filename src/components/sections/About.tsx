import { CheckCircle2 } from "lucide-react";

const points = [
  "Trained thousands in Yoga, Pranayama and Acupressure techniques",
  "Specialist in pain management & lifestyle disease reversal",
  "Featured speaker on national television and wellness platforms",
  "Promotes drug-free, natural and holistic healing methods",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              About Dr. K. K. Jha
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
              A Lifetime Devoted to Holistic Healing
            </h2>
          </div>

          <div className="lg:col-span-3 reveal">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. K. K. Jha is a highly experienced Yoga and Acupressure Master with over{" "}
              <strong className="text-foreground">30 years of dedicated service</strong> in
              holistic health and wellness. As the Founder of WHIP (World Health Initiative
              for Peace) and Co-Founder of BU Pain Care Clinic, he has guided countless
              individuals toward natural healing — combining ancient Indian wisdom with
              modern therapeutic insight.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
