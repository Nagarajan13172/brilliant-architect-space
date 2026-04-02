import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React / Next.js", level: 98 },
      { name: "TypeScript", level: 96 },
      { name: "JavaScript (ES6+)", level: 98 },
      { name: "HTML5 / CSS3", level: 97 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "SCSS / SASS", level: 90 },
      { name: "Styled Components", level: 88 },
      { name: "Framer Motion", level: 85 },
      { name: "Material UI / Ant Design", level: 90 },
    ],
  },
  {
    title: "State & Architecture",
    skills: [
      { name: "Redux / Zustand", level: 95 },
      { name: "React Query", level: 92 },
      { name: "GraphQL / Apollo", level: 88 },
      { name: "Micro-Frontends", level: 85 },
      { name: "Design Systems", level: 93 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 96 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Docker / K8s", level: 78 },
      { name: "Webpack / Vite", level: 92 },
      { name: "Jest / Cypress / Playwright", level: 90 },
    ],
  },
];

const techLogos = [
  "React", "TypeScript", "JavaScript", "Node.js", "GraphQL",
  "Docker", "AWS", "Git", "Redux", "Next.js",
  "Tailwind", "Figma", "Storybook", "Jest", "Webpack",
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
