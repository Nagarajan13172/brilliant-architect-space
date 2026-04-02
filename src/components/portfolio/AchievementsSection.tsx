import { motion } from "framer-motion";
import { Trophy, Mic, BookOpen, Award, Users, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  { icon: Trophy, title: "ETL Automation Excellence", desc: "Reduced ETL development effort by ~90% (2 days → 30 minutes) through intelligent automation", color: "text-yellow-500" },
  { icon: Mic, title: "CEO/CPO/CRO Recognition", desc: "Awarded for developing ATT Disconnect utility earning executive recognition for cost savings", color: "text-blue-500" },
  { icon: BookOpen, title: "Device Automation Pioneer", desc: "Developed first Device Automation Bot to bypass hidden captchas successfully", color: "text-green-500" },
  { icon: Award, title: "41+ Component Library", desc: "Architected centralized component library (41+ reusable components) adopted across enterprise applications", color: "text-purple-500" },
  { icon: Users, title: "Multi-Tenant Architecture", desc: "Designed white-label branding engine supporting 28+ global partners with dynamic SCSS customization", color: "text-orange-500" },
  { icon: Globe, title: "Technical Innovation", desc: "Implemented server-based solution resolving Comcast bot blocking issues for seamless operation", color: "text-cyan-500" },
];

const certifications = [
  "Multi-Tenant Architecture Design",
  "Enterprise Component Library Development",
  "Advanced Data Visualization & Kibana",
  "Automation Testing (WDIO & Cucumber)",
  "Full-Stack MERN/MEAN Development",
  "Cloud Infrastructure & DevOps",
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding bg-secondary/30">
    <SectionHeading title="Achievements & Awards" subtitle="Recognition and milestones throughout my career" />

    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              className="glass rounded-2xl p-6 text-center"
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
        className="glass rounded-2xl p-8"
      >
        <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, i) => (
            <motion.span
              key={cert}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-5 py-3 rounded-xl bg-muted text-foreground text-sm font-medium magnetic-hover"
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
