import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    icon: GraduationCap,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2011 – 2013",
    details: "Specialization in Human-Computer Interaction & Web Technologies. Published 3 research papers on frontend performance optimization. GPA: 3.9/4.0",
    achievements: ["Dean's List", "Research Fellowship", "Best Thesis Award"],
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Technology in Information Technology",
    institution: "Indian Institute of Technology (IIT)",
    location: "Mumbai, India",
    period: "2007 – 2011",
    details: "Major in Information Technology with minor in Design. Active member of coding club and web development society. GPA: 3.8/4.0",
    achievements: ["Gold Medal in IT", "Hackathon Winner", "Academic Excellence Award"],
  },
  {
    icon: School,
    degree: "Higher Secondary Education (XII)",
    institution: "Delhi Public School",
    location: "New Delhi, India",
    period: "2005 – 2007",
    details: "Science stream with Mathematics and Computer Science. School topper in Computer Science. Scored 95.6% overall.",
    achievements: ["School Topper", "Science Olympiad Gold", "Best Student Award"],
  },
  {
    icon: School,
    degree: "Secondary Education (X)",
    institution: "Delhi Public School",
    location: "New Delhi, India",
    period: "2005",
    details: "Completed CBSE board examinations with distinction. Active participant in science exhibitions and coding competitions. Scored 96.2% overall.",
    achievements: ["District Topper", "National Cyber Olympiad Gold"],
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <SectionHeading title="Education" subtitle="Academic background and qualifications" />

    <div className="container mx-auto max-w-4xl space-y-6">
      {education.map((edu, i) => {
        const Icon = edu.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass rounded-2xl p-6 md:p-8 magnetic-hover"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
                </div>
                <p className="text-primary font-semibold mb-3">{edu.institution} — {edu.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{edu.details}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((a) => (
                    <span key={a} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      🏆 {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default EducationSection;
