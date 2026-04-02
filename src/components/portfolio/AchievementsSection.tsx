import { motion } from "framer-motion";
import { Trophy, Mic, BookOpen, Award, Users, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  { icon: Trophy, title: "Google Developer Expert", desc: "Recognized as GDE for Web Technologies, 2022", color: "text-yellow-500" },
  { icon: Mic, title: "Conference Speaker", desc: "Spoke at React Conf, JSConf, and 20+ tech events globally", color: "text-blue-500" },
  { icon: BookOpen, title: "Published Author", desc: "Author of 'Modern Frontend Architecture' with 15k+ copies sold", color: "text-green-500" },
  { icon: Award, title: "Open Source Contributor", desc: "Top 1% contributor on GitHub with 10k+ stars across projects", color: "text-purple-500" },
  { icon: Users, title: "Community Leader", desc: "Founded local React meetup with 3,000+ active members", color: "text-orange-500" },
  { icon: Globe, title: "Patent Holder", desc: "Holds 2 patents on web performance optimization techniques", color: "text-cyan-500" },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Meta Frontend Developer Certificate",
  "Certified Scrum Master (CSM)",
  "MongoDB Certified Developer",
  "Kubernetes Application Developer",
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
