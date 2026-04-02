import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Users, Rocket, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Code2, value: "41+", label: "Reusable Components" },
  { icon: Users, value: "25+", label: "Projects Delivered" },
  { icon: Rocket, value: "8+", label: "Years Experience" },
  { icon: Award, value: "Multi-Tenant", label: "Architecture" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".stat-card");
    
    gsap.fromTo(cards, 
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <SectionHeading title="About Me" subtitle="Accomplished Technical Lead & Full-Stack Engineer" />

      <div className="container mx-auto grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Accomplished Technical Lead and Full-Stack Engineer with 8+ years of experience delivering scalable, technology-driven solutions across Telecom, E-commerce, and IoT domains. Expertise in MERN and MEAN stacks, with a proven track record of architecting multi-tenant mono-repos and reusable component libraries (41+ components) that streamline development for complex enterprise applications.
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Versatile Hybrid Developer proficient in building cross-platform desktop applications (Windows, Linux, Mac) using Electron and high-performance mobile applications (iOS, Android) via Ionic. Specialized in high-performance data visualization, utilizing Highcharts, ag-Grid, and Kibana to build real-time monitoring dashboards and time-series tracking systems.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Proven Leadership in managing cross-functional teams, serving as the primary technical point of contact for global clients such as Analog Devices, and orchestrating end-to-end technical discovery. Strong background in Automation Testing with robust frameworks using WDIO, Cucumber, and JavaScript.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="stat-card glass hover-card-glow rounded-2xl p-5 text-center magnetic-hover sm:p-6">
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <div className="mb-1 font-display text-2xl font-bold text-foreground sm:text-3xl">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
