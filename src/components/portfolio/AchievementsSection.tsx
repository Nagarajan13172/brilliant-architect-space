import { motion } from "framer-motion";
import { Trophy, Mic, BookOpen, Award, Users, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  { icon: Trophy, title: "AI-Accelerated Delivery", desc: "Improved developer throughput by introducing AI-assisted coding workflows that shortened prototyping and implementation cycles.", color: "text-yellow-500" },
  { icon: Mic, title: "Discovery-to-Delivery Ownership", desc: "Led technical discovery with stakeholders and converted ambiguous requirements into delivery-ready architecture plans.", color: "text-blue-500" },
  { icon: BookOpen, title: "Angular Modernization", desc: "Executed Angular 11 → 21 migration with controlled rollout, preserving release continuity and minimizing operational risk.", color: "text-green-500" },
  { icon: Award, title: "ETL Effort Reduction", desc: "Automated ETL workflows to reduce manual processing effort by ~90%, improving turnaround for engineering teams.", color: "text-purple-500" },
  { icon: Users, title: "Cross-Functional Team Leadership", desc: "Coordinated frontend, backend, and QA execution for multi-tenant platform initiatives across enterprise programs.", color: "text-orange-500" },
  { icon: Globe, title: "White-Label Platform Scale", desc: "Built partner-ready customization architecture that enabled 28+ branded experiences from a single product platform.", color: "text-cyan-500" },
];

const certificationGroups = [
  {
    title: "Leadership",
    items: [
      "Technical Project Leadership",
      "Stakeholder & Client Management",
      "Cross-functional Team Management",
      "Architectural Discovery & Design",
      "Agile & SDLC Management",
    ],
  },
  {
    title: "Delivery & Quality",
    items: [
      "Enterprise Architecture Expertise",
      "Automation Testing (WDIO & Cucumber)",
      "DevOps & Cloud Infrastructure",
    ],
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding bg-secondary/30">
    <SectionHeading title="Achievements & Awards" subtitle="Recognition and milestones throughout my career" />

    <div className="container mx-auto">
      <div className="mb-14 grid gap-5 md:mb-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="glass hover-card-glow rounded-2xl p-5 text-center sm:p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Icon size={32} className={item.color} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass hover-card-glow rounded-2xl p-6 sm:p-8"
      >
        <h3 className="mb-6 text-center font-display text-xl font-bold text-foreground sm:mb-8 sm:text-2xl">Certifications</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {certificationGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.08 }}
              className="rounded-2xl border border-border bg-card/55 p-5"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-lg bg-muted px-3 py-2 text-xs font-medium text-foreground sm:text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
