import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Full-Stack Development",
    skills: [
      { name: "JavaScript (ES6+)", level: 98 },
      { name: "TypeScript", level: 96 },
      { name: "Angular (11-21)", level: 95 },
      { name: "ReactJS", level: 97 },
      { name: "Node.js", level: 92 },
    ],
  },
  {
    title: "State & Data Management",
    skills: [
      { name: "MongoDB (Indexing & Pipelines)", level: 94 },
      { name: "Tanstack Query", level: 95 },
      { name: "NGXS & RxJS", level: 92 },
      { name: "Highcharts & ag-Grid", level: 93 },
      { name: "Material React Tables", level: 90 },
    ],
  },
  {
    title: "Hybrid & Specialized Tools",
    skills: [
      { name: "Electron (Desktop Apps)", level: 92 },
      { name: "Ionic (iOS/Android)", level: 88 },
      { name: "WDIO & Cucumber Testing", level: 90 },
      { name: "Docker & DevOps", level: 85 },
      { name: "Multi-tenant Mono-repos", level: 93 },
    ],
  },
  {
    title: "Enterprise & Architecture",
    skills: [
      { name: "White-label Branding Engines", level: 94 },
      { name: "RBAC & Security", level: 91 },
      { name: "Component Libraries (41+)", level: 96 },
      { name: "Real-time Data Visualization", level: 94 },
      { name: "Micro-Frontend Architecture", level: 92 },
    ],
  },
];

const techLogos = [
  "Angular", "React", "TypeScript", "JavaScript", "Node.js",
  "MongoDB", "Electron", "Ionic", "Highcharts", "ag-Grid",
  "Docker", "WDIO", "Cucumber", "Tanstack Query", "SCSS",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
    <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with daily" />

    <div className="container mx-auto grid md:grid-cols-2 gap-8 mb-16">
      {skillCategories.map((cat, catIdx) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIdx * 0.1, duration: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="font-display text-xl font-bold mb-6 text-foreground">{cat.title}</h3>
          <div className="space-y-5">
            {cat.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 * i, ease: "easeOut" }}
                    className="h-full rounded-full hero-gradient"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Scrolling tech ticker */}
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...techLogos, ...techLogos].map((tech, i) => (
          <span
            key={i}
            className="text-2xl font-display font-bold text-muted-foreground/30 select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
