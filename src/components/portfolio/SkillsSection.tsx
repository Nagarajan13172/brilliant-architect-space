import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Full-Stack Development",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Angular (11-21)",
      "ReactJS",
      "Node.js",
    ],
  },
  {
    title: "State & Data Management",
    skills: [
      "MongoDB (Indexing & Pipelines)",
      "TanStack Query",
      "NGXS & RxJS",
      "Highcharts & ag-Grid",
      "Material React Tables",
    ],
  },
  {
    title: "Hybrid & Specialized Tools",
    skills: [
      "Electron (Desktop Apps)",
      "Ionic (iOS/Android)",
      "WDIO & Cucumber Testing",
      "Docker & DevOps",
      "Multi-tenant Monorepos",
    ],
  },
  {
    title: "Enterprise & Architecture",
    skills: [
      "White-label Branding Engines",
      "RBAC & Security",
      "Component Libraries (41+)",
      "Real-time Data Visualization",
      "Micro-frontend Architecture",
    ],
  },
  {
    title: "Leadership & Process",
    skills: [
      "Technical Discovery & Solution Design",
      "Cross-functional Team Leadership",
      "Client & Stakeholder Communication",
      "Agile Delivery & Sprint Planning",
      "Quality Engineering & Test Strategy",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
    <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with daily" />

    <div className="container mx-auto grid gap-6 md:grid-cols-2 md:gap-8">
      {skillCategories.map((cat, catIdx) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIdx * 0.1, duration: 0.5 }}
          className="glass hover-card-glow rounded-2xl p-5 sm:p-6"
        >
          <h3 className="mb-6 font-display text-lg font-bold text-foreground sm:text-xl">{cat.title}</h3>
          <div className="flex flex-wrap gap-2.5">
            {cat.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.03 * i }}
                className="rounded-xl border border-border bg-muted/60 px-3 py-2 text-xs font-medium text-foreground sm:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
