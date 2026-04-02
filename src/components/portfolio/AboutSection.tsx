import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Users, Rocket, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const capabilityFlow = [
  {
    icon: Code2,
    title: "Platform Architecture",
    detail:
      "Designs scalable multi-tenant frontend systems with shared components, shared services, and clean domain boundaries.",
    impact: "41+ reusable components across enterprise applications",
  },
  {
    icon: Users,
    title: "Delivery Leadership",
    detail:
      "Leads cross-functional engineering execution from technical discovery through sprint delivery and production rollout.",
    impact: "Trusted client-facing technical lead for global stakeholders",
  },
  {
    icon: Rocket,
    title: "Performance Engineering",
    detail:
      "Builds analytics-heavy interfaces and real-time operational dashboards optimized for high-volume enterprise data.",
    impact: "Improved release velocity and operational response outcomes",
  },
  {
    icon: Award,
    title: "Quality & Scale",
    detail:
      "Applies automation-first quality practices with WDIO and Cucumber to sustain reliable releases across products.",
    impact: "Stable delivery across IoT, telecom, and e-commerce platforms",
  },
];

const leadershipThemes = [
  "Technical Discovery",
  "Solution Architecture",
  "Team Mentoring",
  "Stakeholder Alignment",
  "Quality Governance",
  "Delivery Ownership",
];

const aboutLeftHighlights = [
  "Enterprise frontend architecture",
  "Cross-functional delivery leadership",
  "Client-facing technical communication",
  "Automation-led release quality",
];

const recentImpact = [
  "Improved feature delivery cycle time by ~30% through platform standardization.",
  "Enabled 28+ partner-ready deployments using a unified white-label architecture.",
  "Raised regression confidence with automation-first quality workflows.",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".about-animate");
    
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
      <SectionHeading title="About Me" subtitle="Technical Lead specializing in scalable frontend platforms and full-stack product delivery." />

      <div className="container mx-auto grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-animate flex h-full flex-col justify-between"
        >
          <div>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build enterprise platforms for IoT, telecom, and e-commerce products, with strong depth in modern frontend and full-stack engineering.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Over the last 8+ years, I have architected multi-tenant monorepos, reusable platform layers, and analytics-rich dashboards using Angular, React, Highcharts, and ag-Grid.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I lead cross-functional teams through discovery, architecture, execution, and release while serving as a primary client-facing technical contact for enterprise programs.
            </p>

            <div className="about-animate mt-6 rounded-2xl border border-border/60 bg-card/55 p-4 backdrop-blur-sm sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Recent Impact
              </p>
              <ul className="mt-3 space-y-2.5">
                {recentImpact.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-animate mt-6 rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm sm:p-5 lg:mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Core Strengths
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {aboutLeftHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-5 bottom-24 w-px bg-gradient-to-b from-primary/50 via-accent/45 to-primary/30" />

          <div className="space-y-4">
            {capabilityFlow.map(({ icon: Icon, title, detail, impact }) => (
              <div key={title} className="about-animate relative pl-14">
                <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-card/90 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-xl hero-gradient opacity-20" />
                  <Icon size={18} className="relative text-primary" />
                </div>

                <div className="glass hover-card-glow rounded-2xl border border-border/60 p-4 sm:p-5">
                  <h3 className="font-display text-lg font-bold leading-tight text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  <p className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary sm:text-xs">
                    {impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-animate mt-5 rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Leadership Focus
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {leadershipThemes.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-muted/60 px-2.5 py-1.5 text-[11px] font-medium text-foreground sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
