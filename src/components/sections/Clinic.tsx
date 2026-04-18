import { ArrowUpRight, Stethoscope } from "lucide-react";

const Clinic = () => {
  return (
    <section id="clinic" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="reveal max-w-4xl mx-auto rounded-3xl bg-gradient-trust p-10 md:p-14 text-trust-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium mb-5">
              <Stethoscope className="h-4 w-4" />
              Clinical Partnership
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
              Now Associated with{" "}
              <a
                href="https://bupaincare.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-4 hover:text-white inline-flex items-center gap-2"
              >
                BU Pain Care Clinic
                <ArrowUpRight className="h-7 w-7" />
              </a>
            </h2>
            <p className="text-lg text-trust-foreground/90 leading-relaxed max-w-2xl">
              For advanced pain management solutions combining modern clinical care with
              natural healing techniques. Together, we deliver complete, integrated
              wellness for every patient.
            </p>
            <a
              href="https://bupaincare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-card text-primary px-6 py-3 font-semibold shadow-soft hover:scale-105 transition-bounce"
            >
              Visit BU Pain Care
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
