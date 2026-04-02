import { motion } from "framer-motion";
import { Trophy, Mic, BookOpen, Award, Users, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  { icon: Trophy, title: "Optimized Development Workflows", desc: "Advanced AI-assisted coding techniques for rapid prototyping and accelerated development", color: "text-yellow-500" },
  { icon: Mic, title: "Technical Discovery & Alignment", desc: "Spearheaded technical discovery and aligned global project stakeholders with strategic vision", color: "text-blue-500" },
  { icon: BookOpen, title: "Angular Migration Success", desc: "Migrated enterprise systems from Angular 11 to Angular 21 with zero downtime", color: "text-green-500" },
  { icon: Award, title: "ETL Automation Excellence", desc: "Reduced ETL effort by 90% via automated workflows, improving developer productivity", color: "text-purple-500" },
  { icon: Users, title: "Multi-Tenant Leadership", desc: "Led cross-functional teams to deliver multi-tenant mono-repos for enterprise scale", color: "text-orange-500" },
  { icon: Globe, title: "White-Label Innovation", desc: "Engineered white-label engine for 28+ global partners with dynamic customization", color: "text-cyan-500" },
];

const certifications = [
  "Technical Project Leadership",
  "Stakeholder & Client Management",
  "Architectural Discovery & Design",
  "Cross-functional Team Management",
  "Agile & SDLC Management",
  "Enterprise Architecture Expertise",
  "Automation Testing (WDIO & Cucumber)",
  "DevOps & Cloud Infrastructure",
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
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, i) => (
            <motion.span
              key={cert}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl bg-muted px-4 py-3 text-center text-xs font-medium text-foreground magnetic-hover sm:px-5 sm:text-sm"
            >
              ✅ {cert}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
