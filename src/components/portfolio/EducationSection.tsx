import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "B.E. Computer Science",
    institution: "University College of Engineering Villupuram",
    location: "Tamil Nadu",
    period: "2013 – 2017",
    details: "Bachelor of Engineering in Computer Science from Anna University. Strong foundation in software engineering, data structures, and web technologies.",
    badge: "Bachelor's Degree",
    badgeColor: "bg-purple-500/20 text-purple-500",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Vedhha Vikass Higher Secondary School",
    location: "Salem",
    period: "2011 – 2013",
    details: "Higher Secondary Education with focus on Mathematics and Science. Built strong analytical and problem-solving skills.",
    badge: "Higher Secondary",
    badgeColor: "bg-red-500/20 text-red-500",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Gugai Higher Secondary School",
    location: "Salem",
    period: "2010 – 2011",
    details: "Secondary School Education establishing foundational knowledge in core subjects and academic excellence.",
    badge: "Secondary",
    badgeColor: "bg-orange-500/20 text-orange-500",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <SectionHeading title="Education" subtitle="My academic journey and continuous learning path" />

    <div className="container mx-auto max-w-5xl">
      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line - centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500" />

        {/* Education items */}
        <div className="space-y-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Left/Right spacing for card */}
              <div className="w-1/2" />

              {/* Timeline dot - centered */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 flex items-center justify-center z-10 ${i === 0 ? "border-cyan-500" : i === 1 ? "border-purple-500" : "border-orange-500"}`}>
                <div className={`w-5 h-5 rounded-full ${i === 0 ? "bg-cyan-500" : i === 1 ? "bg-purple-500" : "bg-orange-500"}`} />
              </div>

              {/* Card container */}
              <div className="w-1/2">
                {/* Badge - positioned above card */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.1 }}
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${edu.badgeColor}`}
                >
                  {edu.badge}
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass rounded-xl p-8 border border-border/50"
                >
                  {/* Degree */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-primary font-semibold text-base mb-1">
                    {edu.institution}
                  </p>

                  {/* Location and Period */}
                  <p className="text-sm text-muted-foreground mb-5">
                    {edu.location} • {edu.period}
                  </p>

                  {/* Details */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
