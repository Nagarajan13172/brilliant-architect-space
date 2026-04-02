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
            I build scalable digital platforms for IoT, telecom, and e-commerce products, with strong depth in modern front-end and full-stack engineering. My work focuses on translating complex business workflows into stable, high-performance user experiences.
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Over the last 8+ years, I have designed multi-tenant monorepos, shared component libraries, and data-heavy dashboards using tools such as Angular, React, Highcharts, and ag-Grid. I also deliver hybrid desktop/mobile solutions using Electron and Ionic when product needs span multiple platforms.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I lead cross-functional teams through discovery, architecture, execution, and release, often serving as the primary technical interface for client stakeholders including Analog Devices. I align engineering, product, and QA teams on delivery goals while driving quality through automation practices using WDIO and Cucumber.
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
