import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Users, Rocket, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Code2, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "20+", label: "Team Members Led" },
  { icon: Rocket, value: "10+", label: "Years Experience" },
  { icon: Award, value: "15+", label: "Awards & Certs" },
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
            I'm a <span className="text-foreground font-semibold">Senior Frontend Technical Lead</span> with over a decade
            of experience architecting and building modern web applications. I specialize in React ecosystem,
            TypeScript, and leading cross-functional engineering teams.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My passion lies in creating pixel-perfect, accessible, and performant user interfaces while mentoring
            developers and establishing engineering best practices. I've successfully led teams of 20+ engineers
            and delivered enterprise-scale applications for Fortune 500 companies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond coding, I contribute to open-source projects, speak at tech conferences, and write about
            modern frontend architecture. I believe in continuous learning and pushing the boundaries of web technology.
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
