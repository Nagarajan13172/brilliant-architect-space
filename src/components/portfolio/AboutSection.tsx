import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Users, Rocket, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Code2, value: "41+", label: "Reusable Components" },
  { icon: Users, value: "28+", label: "Global Partners" },
  { icon: Rocket, value: "9+", label: "Years Experience" },
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
      <SectionHeading title="About Me" subtitle="Passionate about building the future of the web" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a <span className="text-foreground font-semibold">Technical Lead and Full-Stack Engineer</span> with 9+ years of experience
            delivering scalable technology solutions across Telecom, E-commerce, and IoT domains. I specialize in architecting
            multi-tenant applications, building enterprise-grade component libraries, and leading cross-functional teams.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My expertise spans MERN/MEAN stacks, high-performance data visualization, automation testing, and hybrid development.
            I've architected 41+ reusable components for enterprise applications serving global partners like Analog Devices,
            and implemented white-label branding engines used by 28+ organizations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm passionate about building resilient architectures, mentoring engineering teams, and leveraging AI tools to accelerate development.
            My work combines technical excellence with strategic thinking to deliver transformative business solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="stat-card glass rounded-2xl p-6 text-center magnetic-hover">
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-1">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
