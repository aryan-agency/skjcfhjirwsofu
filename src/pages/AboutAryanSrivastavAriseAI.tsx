import { useEffect, useMemo, useState, useCallback, memo } from "react";
import {
  Github,
  Twitter,
  Send,
  Globe,
  MessageCircle,
  Code2,
  Layers,
  Cpu,
  Database,
  Bot,
  Workflow,
  Rocket,
  ArrowRight,
  Mic,
  MessageSquare,
  Building2,
  Search,
  GitBranch,
  Sparkles,
  Target,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Gauge,
  Network,
  PenSquare,
  Image as ImageIcon,
  Hash,
  Link2,
  Briefcase,
  Award,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Static data — declared outside the component so it is never re-created   */
/* -------------------------------------------------------------------------- */

const SITE_URL = "https://whip.co.in";
const PAGE_PATH = "/about-aryan-srivastav-arise-ai";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Aryan Srivastav | Founder of ARISE AI — AI Automation & Website Development";
const PAGE_DESCRIPTION =
  "Aryan Srivastav is the Founder of ARISE AI and the designer and developer of this website. He builds AI automation systems, AI voice agents, AI chatbots, modern websites and business automation infrastructure for growing companies.";
const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2025-06-01";

interface SocialProfile {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

interface TechItem {
  icon: LucideIcon;
  title: string;
  blurb: string;
}

interface SkillItem {
  icon: LucideIcon;
  title: string;
  blurb: string;
}

interface TimelineStep {
  year: string;
  title: string;
  description: string;
}

interface ProjectItem {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface IndustryItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SOCIALS: SocialProfile[] = [
  {
    name: "GitHub",
    href: "https://github.com/thearyansrivastav",
    description: "Source code, experiments and open-source contributions.",
    icon: Github,
  },
  {
    name: "Reddit",
    href: "https://reddit.com/user/thearyansrivastav",
    description: "Discussions on automation, AI tooling and dev workflows.",
    icon: MessageSquare,
  },
  {
    name: "Telegram",
    href: "https://t.me/thearyansrivastav",
    description: "Direct messaging for project enquiries and quick questions.",
    icon: Send,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/the_ariseai",
    description: "Build logs, AI automation notes and ARISE AI updates.",
    icon: Twitter,
  },
  {
    name: "Gravatar",
    href: "https://gravatar.com/thearyansrivastav",
    description: "Public profile and avatar used across the web.",
    icon: Globe,
  },
  {
    name: "Medium",
    href: "https://medium.com/@thearyansrivastav",
    description: "Long-form writing on AI systems and business automation.",
    icon: PenSquare,
  },
  {
    name: "About.me",
    href: "https://about.me/aryansrivastav",
    description: "A single-page summary of work, links and contact details.",
    icon: Globe,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/thearyansrivastav",
    description: "Visual references for design, UI and branding work.",
    icon: ImageIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918429575144?text=Hey+Aryan+%7C+Arise+AI",
    description: "The fastest way to start a conversation about a project.",
    icon: MessageCircle,
  },
  {
    name: "Carrd",
    href: "https://aryansrivastav.carrd.co",
    description: "A minimal landing page with the essentials.",
    icon: Link2,
  },
  {
    name: "Contra",
    href: "https://contra.com/thearyansrivastav",
    description: "Independent work profile and freelance project history.",
    icon: Briefcase,
  },
  {
    name: "Peerlist",
    href: "https://peerlist.io/aryansrivastav",
    description: "Professional profile, projects and verified work history.",
    icon: Award,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/thearyansrivastav",
    description: "Additional repositories and CI/CD experiments.",
    icon: GitBranch,
  },
  {
    name: "Hugging Face",
    href: "https://huggingface.co/aryansrivastav",
    description: "Models, datasets and AI experimentation space.",
    icon: Bot,
  },
  {
    name: "Dev.to",
    href: "https://dev.to/aryansrivastav",
    description: "Developer-focused articles on web and AI engineering.",
    icon: Hash,
  },
  {
    name: "Hashnode",
    href: "https://hashnode.com/@aryansrivastav",
    description: "Technical blog covering automation and web architecture.",
    icon: Hash,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/aryansrivastav",
    description: "Front-end experiments, UI snippets and interaction demos.",
    icon: Code2,
  },
  {
    name: "Product Hunt",
    href: "https://www.producthunt.com/@aryansrivastav",
    description: "Product launches and community feedback.",
    icon: Rocket,
  },
  {
    name: "Indie Hackers",
    href: "https://www.indiehackers.com/Aryansrivastav",
    description: "Notes on building ARISE AI as an independent venture.",
    icon: Compass,
  },
  {
    name: "ARISE AI on Indie Hackers",
    href: "https://www.indiehackers.com/product/arise-ai/revenue",
    description: "The ARISE AI product page and public build journey.",
    icon: Target,
  },
  {
    name: "Substack",
    href: "https://aryansrivastav.substack.com",
    description: "A newsletter on AI automation and modern web development.",
    icon: PenSquare,
  },
];

const TECH_STACK: TechItem[] = [
  { icon: Code2, title: "React", blurb: "Component-driven interfaces built for clarity and reuse." },
  { icon: Layers, title: "TypeScript", blurb: "Type-safe code that stays maintainable as it grows." },
  { icon: Sparkles, title: "TailwindCSS", blurb: "Utility-first styling for consistent, fast design systems." },
  { icon: Rocket, title: "Vite", blurb: "Instant builds and a fast development feedback loop." },
  { icon: Search, title: "SEO", blurb: "Technical and on-page SEO built into every page." },
  { icon: Bot, title: "AI", blurb: "Applied AI for voice, chat and decision automation." },
  { icon: Workflow, title: "Automation", blurb: "Workflow engines that remove manual, repetitive work." },
  { icon: Building2, title: "Business Systems", blurb: "Operational infrastructure that scales with a company." },
  { icon: Database, title: "CRM", blurb: "Connected CRM pipelines that keep data accurate and current." },
  { icon: Mic, title: "Voice AI", blurb: "Conversational voice agents for calls and support." },
];

const SKILLS: SkillItem[] = [
  { icon: Bot, title: "AI Automation", blurb: "Designing systems that handle repetitive decisions automatically." },
  { icon: Mic, title: "AI Voice Agents", blurb: "Voice systems that answer, qualify and route calls." },
  { icon: MessageSquare, title: "AI Chatbots", blurb: "Chat assistants that convert visitors into leads." },
  { icon: Code2, title: "Website Development", blurb: "Fast, accessible websites built on modern frameworks." },
  { icon: Workflow, title: "Business Automation", blurb: "Connecting tools so work moves without manual handoffs." },
  { icon: Search, title: "SEO Strategy", blurb: "Structured content and technical SEO that compounds over time." },
  { icon: Database, title: "CRM Automation", blurb: "Pipelines that keep customer data clean and actionable." },
  { icon: Network, title: "Workflow Systems", blurb: "Multi-step automations across tools and departments." },
  { icon: Target, title: "Lead Generation", blurb: "Systems that capture, qualify and follow up on leads." },
  { icon: Building2, title: "Local Business Automation", blurb: "Practical automation built for service-based businesses." },
];

const TIMELINE: TimelineStep[] = [
  {
    year: "Learning",
    title: "Learning the fundamentals",
    description:
      "Started with the fundamentals of programming and web technologies, building small projects to understand how software is structured and shipped.",
  },
  {
    year: "Website Development",
    title: "Website Development",
    description:
      "Moved into building complete websites end to end — frontend interfaces, responsive layouts and the technical groundwork that keeps a site fast and discoverable.",
  },
  {
    year: "AI Automation",
    title: "AI Automation",
    description:
      "Began applying AI to real operational problems — automating responses, qualifying leads and reducing the manual work behind everyday business tasks.",
  },
  {
    year: "Business Systems",
    title: "Business Systems",
    description:
      "Started connecting automation to CRMs, forms and internal tools, turning isolated scripts into dependable systems businesses could rely on daily.",
  },
  {
    year: "ARISE AI",
    title: "Founding ARISE AI",
    description:
      "Founded ARISE AI to bring AI automation, website development and business systems together under one practice, built around dependable execution.",
  },
  {
    year: "Future Vision",
    title: "Future Vision",
    description:
      "Continuing to refine AI systems that are easier to trust and maintain, with a focus on practical automation that businesses can measure and depend on.",
  },
];

const PROJECTS: ProjectItem[] = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Voice systems that answer calls, qualify callers and pass clean information to a team or a CRM.",
    points: ["Always-available call handling", "Structured call summaries", "Integrates with existing phone systems"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Conversational assistants built into a website to answer questions and move visitors toward a decision.",
    points: ["Trained on business-specific content", "Captures and qualifies leads", "Hands off to a human when needed"],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Connected workflows that move data between tools without anyone copying and pasting.",
    points: ["Form-to-CRM automation", "Notification and reminder systems", "Approval and follow-up sequences"],
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Modern, responsive websites built with performance, accessibility and conversion in mind.",
    points: ["React and TypeScript builds", "Mobile-first responsive layouts", "Clean, semantic markup"],
  },
  {
    icon: Search,
    title: "SEO Systems",
    description: "Technical and on-page SEO foundations that help a site get found and stay found.",
    points: ["Structured data and schema markup", "Metadata and canonical strategy", "Content structured for search intent"],
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description: "Multi-step automations that link tools together so processes run without manual triggers.",
    points: ["Multi-tool integration", "Conditional automation logic", "Ongoing monitoring and refinement"],
  },
];

const VALUES: ValueItem[] = [
  { icon: ShieldCheck, title: "Reliability over hype", description: "Systems are built to work consistently, not just to demo well once." },
  { icon: Gauge, title: "Performance by default", description: "Speed and efficiency are treated as requirements, not afterthoughts." },
  { icon: HeartHandshake, title: "Honest communication", description: "Clear expectations, realistic timelines and no overselling what AI can do." },
  { icon: Target, title: "Outcomes over output", description: "The goal is measurable improvement in operations, not just shipped features." },
];

const INDUSTRIES: IndustryItem[] = [
  { icon: Building2, title: "Local Service Businesses", description: "Automation for booking, follow-ups and customer communication." },
  { icon: Briefcase, title: "Professional Services", description: "Lead capture and CRM workflows that reduce administrative load." },
  { icon: Rocket, title: "Early-Stage Startups", description: "Lean websites and automation that scale as the business grows." },
  { icon: Network, title: "Agencies & Consultants", description: "Internal automation that frees up time for client-facing work." },
];

const FAQS: FaqItem[] = [
  {
    question: "Who is Aryan Srivastav?",
    answer:
      "Aryan Srivastav is the Founder of ARISE AI. He designs and builds AI automation systems, websites and business infrastructure for companies that want to operate more efficiently.",
  },
  {
    question: "What is ARISE AI?",
    answer:
      "ARISE AI is a practice founded by Aryan Srivastav that focuses on AI automation, website development and business systems, built around practical, measurable outcomes rather than experimental tools.",
  },
  {
    question: "Did Aryan Srivastav build this website?",
    answer:
      "Yes. This website was designed and developed by Aryan Srivastav using React, TypeScript, TailwindCSS and Vite, with SEO and performance considered from the first line of code.",
  },
  {
    question: "What services does ARISE AI offer?",
    answer:
      "ARISE AI works on AI voice agents, AI chatbots, business automation, website development, SEO systems and workflow automation, tailored to how a specific business actually operates.",
  },
  {
    question: "Does Aryan Srivastav work with local businesses?",
    answer:
      "Yes. A significant part of the work focuses on local business automation — systems that handle bookings, follow-ups and lead generation without adding administrative overhead.",
  },
  {
    question: "What makes ARISE AI different from a typical agency?",
    answer:
      "The focus stays on dependable execution: realistic claims, systems that are documented and maintainable, and automation that is judged by whether it actually reduces manual work.",
  },
  {
    question: "Can AI automation integrate with an existing CRM?",
    answer:
      "Yes. CRM automation is a core part of the work — connecting forms, chatbots and voice agents to existing CRM tools so customer data stays accurate without manual entry.",
  },
  {
    question: "How can I get in touch with Aryan Srivastav?",
    answer:
      "The quickest way is via WhatsApp or any of the social and professional profiles listed on this page. All of them lead back to a direct conversation about a project.",
  },
];

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "WHIP", href: "/" },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/*  Small presentational sub-components (memoized to avoid wasted renders)   */
/* -------------------------------------------------------------------------- */

const SectionEyebrow = memo(({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
    {children}
  </span>
));
SectionEyebrow.displayName = "SectionEyebrow";

const GlassCard = memo(
  ({
    icon: Icon,
    title,
    children,
  }: {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/10">
      <div
        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-purple-500/0 opacity-0 transition duration-300 group-hover:opacity-10"
        aria-hidden="true"
      />
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
);
GlassCard.displayName = "GlassCard";

const FaqRow = memo(({ item, isOpen, onToggle, index }: { item: FaqItem; isOpen: boolean; onToggle: (i: number) => void; index: number }) => (
  <div className="rounded-2xl border border-border bg-background/60">
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`faq-panel-${index}`}
      id={`faq-button-${index}`}
      onClick={() => onToggle(index)}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="font-medium text-foreground">{item.question}</span>
      <ChevronDown
        className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
          isOpen ? "rotate-180 text-primary" : ""
        }`}
        aria-hidden="true"
      />
    </button>
    <div
      id={`faq-panel-${index}`}
      role="region"
      aria-labelledby={`faq-button-${index}`}
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
      </div>
    </div>
  </div>
));
FaqRow.displayName = "FaqRow";

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

const AboutAryanSrivastavAriseAI = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleToggleFaq = useCallback((index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  }, []);

  /* ---------------------------- Document head ---------------------------- */
  useEffect(() => {
    document.title = PAGE_TITLE;
    document.documentElement.lang = "en";

    const setMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        if (property) element.setAttribute("property", name);
        else element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", PAGE_DESCRIPTION);
    setMeta(
      "keywords",
      "Aryan Srivastav, Founder Aryan Srivastav, ARISE AI, Founder of ARISE AI, AI Automation, Business Automation, Website Development, React Developer, SEO Expert, Workflow Automation, CRM Automation, AI Voice Agents, AI Chatbots, AI Systems, Lead Generation, Local Business Automation, Modern Websites"
    );
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("author", "Aryan Srivastav");
    setMeta("theme-color", "#0b0b12");

    setMeta("og:title", PAGE_TITLE, true);
    setMeta("og:description", PAGE_DESCRIPTION, true);
    setMeta("og:type", "profile", true);
    setMeta("og:url", PAGE_URL, true);
    setMeta("og:site_name", "ARISE AI", true);
    setMeta("og:locale", "en_US", true);
    setMeta("profile:first_name", "Aryan", true);
    setMeta("profile:last_name", "Srivastav", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@the_ariseai");
    setMeta("twitter:title", PAGE_TITLE);
    setMeta("twitter:description", PAGE_DESCRIPTION);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", PAGE_URL);

    const addJsonLd = (data: object, id: string) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(data);
    };

    const sameAs = SOCIALS.map((s) => s.href);

    addJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${PAGE_URL}#person`,
        name: "Aryan Srivastav",
        alternateName: "Founder Aryan Srivastav",
        url: PAGE_URL,
        image: `${SITE_URL}/aryan-srivastav.jpg`,
        jobTitle: "Founder",
        description: PAGE_DESCRIPTION,
        knowsAbout: [
          "AI Automation",
          "Business Automation",
          "Website Development",
          "React Development",
          "SEO",
          "Workflow Automation",
          "CRM Automation",
          "AI Voice Agents",
          "AI Chatbots",
        ],
        worksFor: { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: "ARISE AI" },
        sameAs,
      },
      "person-schema"
    );

    addJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "ARISE AI",
        url: SITE_URL,
        founder: { "@type": "Person", "@id": `${PAGE_URL}#person`, name: "Aryan Srivastav" },
        sameAs,
      },
      "org-schema"
    );

    addJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "ARISE AI",
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: "en-US",
      },
      "website-schema"
    );

    addJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        headline: "Aryan Srivastav — Founder of ARISE AI",
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${PAGE_URL}#person` },
        mainEntity: { "@id": `${PAGE_URL}#person` },
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: "en-US",
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
      },
      "webpage-schema"
    );

    addJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Aryan Srivastav", item: PAGE_URL },
        ],
      },
      "breadcrumb-schema"
    );

    addJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      "faq-schema"
    );
  }, []);

  const techStackCards = useMemo(
    () =>
      TECH_STACK.map((tech) => (
        <GlassCard key={tech.title} icon={tech.icon} title={tech.title}>
          {tech.blurb}
        </GlassCard>
      )),
    []
  );

  const skillCards = useMemo(
    () =>
      SKILLS.map((skill, i) => (
        <div
          key={skill.title}
          style={{ animationDelay: `${i * 60}ms` }}
          className="animate-in fade-in slide-in-from-bottom-2 group rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
            <skill.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-semibold text-foreground">{skill.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.blurb}</p>
        </div>
      )),
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      {/* Breadcrumb (visually subtle, semantically real) */}
      <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-muted/20">
        <ol className="container mx-auto flex items-center gap-2 px-6 py-3 text-xs text-muted-foreground">
          <li>
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground" aria-current="page">
            Aryan Srivastav
          </li>
        </ol>
      </nav>

      <main id="main-content">
        {/* ------------------------------- Hero ------------------------------- */}
        <section className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="hero-heading">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 blur-3xl animate-pulse [animation-duration:8s]"
            aria-hidden="true"
          />
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="relative container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Founder · ARISE AI</SectionEyebrow>
              <h1 id="hero-heading" className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Aryan Srivastav
                <span className="mt-2 block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                  Founder of ARISE AI
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                I design and build AI automation systems, modern websites and scalable
                business infrastructure — practical AI voice agents, AI chatbots and
                workflow automation that help businesses operate smarter and grow with
                less manual effort.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918429575144?text=Hey+Aryan+%7C+Arise+AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Work With Me <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/thearyansrivastav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 transition hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> View GitHub
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="font-semibold">AI Automation</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Also building</dt>
                  <dd className="font-semibold">Websites &amp; SEO</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Based in</dt>
                  <dd className="font-semibold">India</dd>
                </div>
              </dl>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-purple-500/30 text-6xl font-bold">
                AS
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Founder, ARISE AI — designer and developer of this website.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------- Founder Story --------------------------- */}
        <section className="py-20" aria-labelledby="story-heading">
          <div className="container mx-auto max-w-4xl px-6">
            <SectionEyebrow>Founder Story</SectionEyebrow>
            <h2 id="story-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              The story behind ARISE AI
            </h2>
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                Aryan Srivastav is the Founder of ARISE AI, and he designed and developed
                this website himself — from the page structure down to the metadata that
                helps it get found in search. That detail matters, because it reflects how
                ARISE AI operates: the same person who talks about strategy is the person
                who can also open the code and ship the fix.
              </p>
              <p>
                His path into this work started with website development. Building
                interfaces and learning how a browser actually renders a page gave him a
                practical, ground-level understanding of performance, structure and SEO —
                the kind of understanding that only comes from shipping real pages, not
                just reading about them.
              </p>
              <p>
                Over time, that interest shifted toward AI automation. Websites are useful,
                but a website that can also answer questions, qualify a lead, or trigger a
                workflow does measurably more work for a business. Aryan began applying
                AI to those exact problems — building chat assistants that could hold a
                real conversation, and later AI voice agents that could handle phone calls
                without a person on the other end having to wait.
              </p>
              <p>
                As those systems matured, the next gap became obvious: automation only
                creates value when it's connected to the rest of a business — its CRM, its
                forms, its follow-up process. That's what led to a focus on business
                automation and CRM automation, treating AI not as a standalone gadget but
                as one part of a larger operational system.
              </p>
              <p>
                ARISE AI was founded to bring all of this together — AI automation, website
                development and business systems — under a single, consistent practice.
                The name reflects the intent: helping businesses rise through better
                systems, not through hype. Aryan continues to build and refine AI
                automation, AI voice agents, AI chatbots and workflow automation projects,
                with an explicit focus on outcomes that are realistic, documented and
                maintainable.
              </p>
              <p>
                He does not claim ARISE AI is the largest or the most awarded agency in the
                space — instead, the focus stays on the work itself: dependable AI systems,
                clean website development, and business automation that businesses can
                actually rely on day to day.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------ Professional Journey ----------------------- */}
        <section className="bg-muted/40 py-20" aria-labelledby="journey-heading">
          <div className="container mx-auto max-w-5xl px-6">
            <SectionEyebrow>Professional Journey</SectionEyebrow>
            <h2 id="journey-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              From websites to AI systems
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              Each stage of this journey builds on the one before it. Website development
              gave way to AI automation, which then required real business systems to be
              useful at scale. ARISE AI is the result of connecting all three.
            </p>

            <ol className="mt-12 space-y-10 border-l border-border pl-8" role="list">
              {TIMELINE.map((step, i) => (
                <li key={step.year} className="relative">
                  <span
                    className="absolute -left-[2.55rem] flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-primary"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{step.year}</p>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  {i < TIMELINE.length - 1 && (
                    <span className="sr-only">leads to</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* --------------------------- Vision & Mission ------------------------- */}
        <section className="py-20" aria-labelledby="vision-heading">
          <div className="container mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
            <div>
              <SectionEyebrow>Vision</SectionEyebrow>
              <h2 id="vision-heading" className="mt-4 text-2xl font-bold">
                A future where AI handles the repetitive work
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The long-term vision behind ARISE AI is straightforward: businesses, especially
                smaller and local ones, should not have to choose between staying personal and
                staying efficient. Well-built AI automation should remove repetitive work so
                people can focus on the parts of the business that actually need a human.
              </p>
            </div>
            <div>
              <SectionEyebrow>Mission</SectionEyebrow>
              <h2 className="mt-4 text-2xl font-bold">Practical systems, honestly built</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The mission is to design and ship AI systems, websites and automation that do
                exactly what they claim to do — nothing oversold, nothing left half-finished.
                Every project should leave a business with something measurably better than
                what it had before.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------ Core Values --------------------------- */}
        <section className="bg-muted/40 py-20" aria-labelledby="values-heading">
          <div className="container mx-auto max-w-5xl px-6">
            <SectionEyebrow>Core Values</SectionEyebrow>
            <h2 id="values-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              What guides the work
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {VALUES.map((value) => (
                <div key={value.title} className="rounded-2xl border border-border bg-background p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ Why ARISE AI -------------------------- */}
        <section className="py-20" aria-labelledby="why-heading">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <SectionEyebrow>Why ARISE AI</SectionEyebrow>
            <h2 id="why-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              One person, one accountable practice
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              ARISE AI is built around direct accountability. There's no hand-off between a
              salesperson, a strategist and a developer — Aryan Srivastav designs the system,
              writes the code, and stays involved through launch. That keeps communication
              clear and keeps every decision tied back to the actual business problem being
              solved, whether it's an AI voice agent, a website rebuild, or a CRM automation
              workflow.
            </p>
          </div>
        </section>

        {/* ----------------------------- Technology Stack ----------------------- */}
        <section className="bg-muted/40 py-20" aria-labelledby="stack-heading">
          <div className="container mx-auto max-w-6xl px-6">
            <SectionEyebrow>Technology Stack</SectionEyebrow>
            <h2 id="stack-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              The tools behind every build
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{techStackCards}</div>
          </div>
        </section>

        {/* -------------------------------- Services ----------------------------- */}
        <section className="py-20" aria-labelledby="services-heading">
          <div className="container mx-auto max-w-6xl px-6">
            <SectionEyebrow>Services</SectionEyebrow>
            <h2 id="services-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              How ARISE AI helps businesses
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <project.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------- Skills ------------------------------ */}
        <section className="bg-muted/40 py-20" aria-labelledby="skills-heading">
          <div className="container mx-auto max-w-6xl px-6">
            <SectionEyebrow>Skills</SectionEyebrow>
            <h2 id="skills-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              Core Skills
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">{skillCards}</div>
          </div>
        </section>

        {/* ------------------------ How I Build AI Systems ------------------------ */}
        <section className="py-20" aria-labelledby="build-ai-heading">
          <div className="container mx-auto max-w-4xl px-6">
            <SectionEyebrow>How I Build AI Systems</SectionEyebrow>
            <h2 id="build-ai-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              A grounded approach to AI automation
            </h2>
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                Every AI automation project starts with the actual process a business
                follows today — how a lead currently gets handled, how a call currently
                gets answered, where information currently gets lost. AI only earns its
                place in that process if it removes a real bottleneck.
              </p>
              <p>
                From there, the system is scoped narrowly on purpose. An AI voice agent or
                AI chatbot is built to handle a clearly defined set of situations well,
                with a clean hand-off to a human for anything outside that scope. That
                makes the system predictable, which matters more than making it look
                impressive in a demo.
              </p>
              <p>
                Integration comes next — connecting the AI system to a CRM, a calendar or a
                notification channel so the output of the automation actually reaches the
                people who need it. An AI system that isn't connected to the rest of the
                business is just an isolated experiment.
              </p>
              <p>
                Finally, every system is documented and left in a state where it can be
                monitored and adjusted, not abandoned the day it goes live.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------- Website Development Philosophy --------------------- */}
        <section className="bg-muted/40 py-20" aria-labelledby="web-philosophy-heading">
          <div className="container mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
            <div>
              <SectionEyebrow>Website Development Philosophy</SectionEyebrow>
              <h2 id="web-philosophy-heading" className="mt-4 text-2xl font-bold">
                Built for people and for search
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A website should load fast, read clearly on any screen, and use semantic
                markup that search engines and assistive technology can both understand.
                This site is itself an example — built with React, TypeScript and
                TailwindCSS, with structured data, accessible navigation and clean URLs
                built in from the start.
              </p>
            </div>
            <div>
              <SectionEyebrow>Automation Philosophy</SectionEyebrow>
              <h2 className="mt-4 text-2xl font-bold">Automate the bottleneck, not the gimmick</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Automation is only worth building if it solves a specific, recurring
                bottleneck — a missed follow-up, a slow response time, a manual data entry
                step. The goal is always fewer manual steps and faster response times, not
                automation for its own sake.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------- Industries ---------------------------- */}
        <section className="py-20" aria-labelledby="industries-heading">
          <div className="container mx-auto max-w-6xl px-6">
            <SectionEyebrow>Industries Served</SectionEyebrow>
            <h2 id="industries-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              Where this work fits best
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INDUSTRIES.map((industry) => (
                <div key={industry.title} className="rounded-2xl border border-border bg-background p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <industry.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------ FAQ -------------------------------- */}
        <section className="bg-muted/40 py-20" aria-labelledby="faq-heading">
          <div className="container mx-auto max-w-3xl px-6">
            <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
            <h2 id="faq-heading" className="mt-4 text-3xl font-bold md:text-4xl">
              Questions worth answering up front
            </h2>
            <div className="mt-10 space-y-4">
              {FAQS.map((faq, i) => (
                <FaqRow key={faq.question} item={faq} index={i} isOpen={openFaq === i} onToggle={handleToggleFaq} />
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------- Connect With Aryan -------------------------- */}
        <section className="py-20" aria-labelledby="connect-heading">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center">
              <SectionEyebrow>Connect With Aryan</SectionEyebrow>
              <h2 id="connect-heading" className="mt-4 text-3xl font-bold md:text-4xl">
                Find Aryan Srivastav across the web
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Every profile below leads back to real work — code, writing or a direct way
                to start a conversation.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SOCIALS.map((social) => (
                <div
                  key={social.name}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div>
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <social.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold">{social.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{social.description}</p>
                  </div>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Aryan Srivastav on ${social.name} (opens in a new tab)`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Visit <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ Internal Links --------------------------- */}
        <nav aria-label="Site links" className="py-12">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ------------------------------------ CTA --------------------------------- */}
        <section className="container mx-auto px-6 py-24 text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-4xl font-bold md:text-5xl">
            Let's build something meaningful
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            If you're looking to implement AI automation, improve SEO, develop a
            high-performance website, or streamline operations with business automation,
            let's work together.
          </p>
          <a
            href="https://wa.me/918429575144?text=Hey+Aryan+%7C+Arise+AI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>
      </main>

      {/* ------------------------------- Footer ------------------------------- */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>
            Website designed and developed by <strong className="text-foreground">Aryan Srivastav</strong>,
            Founder of <strong className="text-foreground">ARISE AI</strong>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} ARISE AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutAryanSrivastavAriseAI;
