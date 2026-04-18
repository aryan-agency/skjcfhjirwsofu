import { useEffect, useState } from "react";
import whipLogo from "@/assets/whip-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#services", label: "Services" },
  { href: "#ngo", label: "WHIP" },
  { href: "#clinic", label: "Clinic" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          <img src={whipLogo} alt="WHIP logo" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="font-display font-bold text-foreground">Dr. K. K. Jha</p>
            <p className="text-xs text-muted-foreground">Yoga & Acupressure Expert</p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#donate"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth"
        >
          Support Mission
        </a>

        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <ul className="container mx-auto py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Support Mission
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
