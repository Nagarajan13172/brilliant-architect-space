import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, FileText, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const expertiseTags = [
  "Angular", "React", "TypeScript", "Node.js", "NGXS / RxJS",
  "Highcharts", "Electron", "Multi-tenant",
];

const stats = [
  { value: "9+", label: "Years Exp.", color: "from-blue-500/20 to-blue-600/10 border-blue-500/20" },
  { value: "41+", label: "Components", color: "from-violet-500/20 to-violet-600/10 border-violet-500/20" },
  { value: "28+", label: "Partners", color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20" },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current || !heroRef.current) return;
    gsap.to(bgRef.current, {
      y: 180,
      opacity: 0.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background layer ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        {/* Soft radial spotlight */}
        <div className="absolute top-0 right-0 w-[70vw] h-[70vh] rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] rounded-full bg-accent/6 blur-[100px]" />
        {/* Orbiting decoration rings */}
        <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-primary/8 animate-rotate-slow" />
        <div
          className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        />
        {/* Corner accent dots */}
        <div className="absolute top-32 left-[42%] w-2 h-2 rounded-full bg-primary/30 animate-pulse-glow" />
        <div className="absolute bottom-40 right-[48%] w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-16 items-center min-h-[85vh] py-20">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-accent text-sm font-medium mb-6"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base font-semibold text-muted-foreground tracking-widest uppercase mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* Main name — large gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-3"
            >
              <span className="text-gradient">Sathish Kumar</span>
            </motion.h1>

            {/* Role line */}
            <AnimatedText
              text="Technical Lead & Full-Stack Engineer"
              className="font-display text-2xl md:text-3xl font-semibold text-foreground/80 leading-snug mb-6"
              delay={0.5}
            />

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-base text-muted-foreground max-w-xl leading-relaxed mb-7"
            >
              9+ years architecting enterprise-grade applications across IoT, Telecom, and
              E-commerce. Specialist in multi-tenant monorepos, real-time data visualization,
              and white-label systems serving global clients.
            </motion.p>

            {/* Expertise tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl hero-gradient text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/40 hover:bg-secondary hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={16} />
                View Work
              </a>
            </motion.div>

            {/* Social + currently building */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4"
            >
              {[
                {
                  href: "https://github.com",
                  label: "GitHub",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:sathish7845kumar@gmail.com",
                  label: "Email",
                  svg: <Mail size={18} />,
                },
              ].map(({ href, label, svg }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  aria-label={label}
                >
                  {svg}
                </motion.a>
              ))}

              <span className="w-px h-5 bg-border mx-1" />

              {/* Live work indicator */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 text-accent font-medium">
                  <Zap size={12} className="fill-accent" />
                  Currently building
                </span>
                <span className="font-mono text-foreground/70">OtoSense® SMS</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo + stats ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Outer glow backdrop */}
            <div className="absolute inset-0 rounded-full hero-gradient opacity-10 blur-3xl scale-110" />

            {/* Photo frame */}
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-[2.5rem] hero-gradient opacity-60 blur-[2px] rotate-1" />
              <div className="relative w-72 h-80 md:w-80 md:h-[360px] xl:w-[340px] xl:h-[400px] rounded-[2.25rem] overflow-hidden border border-white/10">
                <img
                  src={profilePhoto}
                  alt="Sathish Kumar — Technical Lead Engineer"
                  className="w-full h-full object-cover object-top"
                  width={512}
                  height={640}
                />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              {/* ── Floating stat cards ── */}

              {/* Years exp — top right */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -right-5 top-6 glass rounded-2xl px-4 py-3 border bg-gradient-to-br ${stats[0].color} backdrop-blur-xl min-w-[90px] text-center shadow-lg`}
              >
                <div className="font-display text-xl font-bold text-foreground">{stats[0].value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stats[0].label}</div>
              </motion.div>

              {/* Components — bottom right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className={`absolute -right-6 bottom-16 glass rounded-2xl px-4 py-3 border bg-gradient-to-br ${stats[1].color} backdrop-blur-xl min-w-[100px] text-center shadow-lg`}
              >
                <div className="font-display text-xl font-bold text-foreground">{stats[1].value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stats[1].label}</div>
              </motion.div>

              {/* Partners — left side */}
              <motion.div
                animate={{ y: [-3, 5, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className={`absolute -left-6 bottom-24 glass rounded-2xl px-4 py-3 border bg-gradient-to-br ${stats[2].color} backdrop-blur-xl min-w-[95px] text-center shadow-lg`}
              >
                <div className="font-display text-xl font-bold text-foreground">{stats[2].value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stats[2].label}</div>
              </motion.div>

              {/* Client badge — top left */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-5 top-8 glass rounded-xl px-3 py-2 border border-border/60 backdrop-blur-xl shadow-md flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">Analog Devices</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-[11px] font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
