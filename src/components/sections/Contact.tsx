import { Phone, Mail, MapPin } from "lucide-react";
import whipLogo from "@/assets/whip-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Reach Out for Healing & Guidance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Phone, label: "Phone", value: "+91 98680 39147", href: "tel:+919868039147" },
            { icon: Mail, label: "Email", value: "Info@whip.co.in", href: "mailto:Info@whip.co.in" },
            { icon: MapPin, label: "Address", value: "Savitri Nagar, South Delhi", href: "#" },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="reveal group rounded-3xl bg-card p-8 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-bounce border border-border"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                <c.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {c.label}
              </p>
              <p className="font-display font-bold text-foreground">{c.value}</p>
            </a>
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-border text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={whipLogo} alt="WHIP" className="h-10 w-10 object-contain" />
            <p className="font-display font-bold text-foreground">Dr. K. K. Jha · WHIP</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} World Health Initiative for Peace. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
