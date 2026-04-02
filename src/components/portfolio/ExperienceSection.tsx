import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Technical Lead Engineer",
    company: "Alethea (Client: Analog Devices India)",
    location: "Bengaluru",
    period: "Jan 2024 – Present",
    highlights: [
      "Spearheaded OtoSense® SMS Platform with end-to-end project leadership and primary technical point of contact",
      "Architected multi-tenant Angular monorepo (Angular 11-21) supporting 3 enterprise applications with 41+ reusable components",
      "Engineered high-performance dashboards using Highcharts and ag-Grid for real-time motor health tracking",
      "Developed white-label branding engine with dynamic SCSS enabling 28+ global partners to customize UI through single codebase",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ace Turtle (August Purple)",
    location: "Bengaluru",
    period: "Feb 2018 – Feb 2021",
    highlights: [
      "Developed component-based applications for Rubicon Omni-Channel Platform (OMS, IMS, CMS)",
      "Engineered online merchandise portals for global brands (PUMA, RayBan, Aldo) with theme customization",
      "Implemented XML layouts ensuring responsive design across all device types",
      "Built enterprise-grade component library supporting multiple product lines",
    ],
  },
  // {
  //   role: "Senior Software Engineer",
  //   company: "Tangoe",
  //   location: "Bengaluru",
  //   period: "2015 – 2018",
  //   highlights: [
  //     "Led bot development and RPA integration for FIDO project ensuring seamless functionality",
  //     "Architected RPAM project with Pentaho Data Integration (ETL) automation",
  //     "Developed automated reporting systems delivering critical data for strategic decision-making",
  //     "Resolved production issues proactively, minimizing downtime and ensuring smooth operations",
  //   ],
  // },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <SectionHeading title="Work Experience" subtitle="My professional journey and career milestones" />

    <div className="container mx-auto max-w-4xl">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative mb-12 md:pl-20"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-6 top-2 w-5 h-5 rounded-full hero-gradient items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <div className="glass rounded-2xl p-6 magnetic-hover">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                    <Briefcase size={14} /> {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
