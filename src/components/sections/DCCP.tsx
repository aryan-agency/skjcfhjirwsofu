import { CheckCircle2 } from "lucide-react";

const points = [
"Annual Cancer Screening Support",
"Oncology Teleconsultation Access",
"Treatment Navigation Assistance",
"Hospital Admission Support",
"Physiotherapy & Rehabilitation Guidance",
"Nutrition & Lifestyle Counselling",
"Mental Wellness Support",
"Home-Care & Recovery Assistance",
"Access to Partner Healthcare Networks",
];

const DCCP = () => {
return ( <section id="dccp" className="py-24 bg-background"> <div className="container mx-auto"> <div className="grid lg:grid-cols-5 gap-12 items-center"> <div className="lg:col-span-2 reveal"> <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
DOCMED CANCER CARE PLAN </p>

```
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
          Affordable Cancer Care for Every Indian Family
        </h2>
      </div>

      <div className="lg:col-span-3 reveal">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Cancer treatment is not only a medical challenge but often a
          financial emergency for families. The Docmed Cancer Care Plan
          (DCCP) is designed to help individuals and families access
          affordable cancer screening, expert guidance, treatment
          navigation, and supportive care through a membership-based model.
        </p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          DCCP members receive access to cancer screening support, oncology
          teleconsultations, treatment navigation assistance, hospital
          admission coordination, nutrition counselling, physiotherapy
          guidance, mental wellness support, and home-care resources.
          Through strategic healthcare partnerships and patient-support
          initiatives, the program aims to reduce treatment-related stress
          and improve access to quality cancer care.
        </p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Whether seeking preventive screening, treatment guidance, or
          supportive care during recovery, DCCP provides a structured
          pathway to help patients and families navigate the cancer journey
          with greater confidence and support.
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
```

);
};

export default DCCP;
