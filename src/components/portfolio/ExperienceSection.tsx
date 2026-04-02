import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Senior Frontend Technical Lead",
    company: "TechCorp Global",
    location: "San Francisco, CA",
    period: "2021 – Present",
    highlights: [
      "Led a team of 15+ frontend engineers building enterprise SaaS platform",
      "Architected micro-frontend strategy reducing deployment time by 60%",
      "Established design system adopted across 8 product teams",
      "Improved Core Web Vitals scores by 40% across all products",
    ],
  },
  {
    role: "Lead Frontend Engineer",
    company: "InnovateTech Inc.",
    location: "New York, NY",
    period: "2018 – 2021",
    highlights: [
      "Spearheaded migration from Angular to React serving 2M+ users",
      "Implemented real-time collaboration features using WebSockets",
      "Mentored 10+ junior and mid-level developers",
      "Reduced bundle size by 45% through code-splitting strategies",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "Austin, TX",
    period: "2015 – 2018",
    highlights: [
      "Built responsive e-commerce platform generating $50M+ annually",
      "Developed reusable component library used across 5 projects",
      "Introduced automated testing achieving 90% code coverage",
      "Led accessibility audit ensuring WCAG 2.1 AA compliance",
    ],
  },
  {
    role: "Frontend Developer",
    company: "StartupHub",
    location: "Remote",
    period: "2013 – 2015",
    highlights: [
      "Developed interactive dashboards for data analytics platform",
      "Implemented responsive designs for 15+ client websites",
      "Collaborated with UX team to improve user engagement by 35%",
    ],
  },
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
