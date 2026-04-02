import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, FileText, Zap } from "lucide-react";
import profilePhoto from "@/assets/sathish.jpeg";
import { useTheme } from "@/context/ThemeContext";
import AnimatedText from "./AnimatedText";
import HyperspaceBackground from "./HyperspaceBackground";

gsap.registerPlugin(ScrollTrigger);

const expertiseTags = [
  "React",
  "Node",
  "TypeScript",
  "Angular",
  "MongoDB",
  "Express",
  "CucumberJs",
  "WDIO",
];

const HeroSection = () => {
  const { mode } = useTheme();
  const isDarkMode = mode === "dark";
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current || !heroRef.current) return;

    const backgroundTween = gsap.to(bgRef.current, {
      y: 180,
      opacity: 0.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      backgroundTween.scrollTrigger?.kill();
      backgroundTween.kill();
    };
  }, []);

  const introTextClass = isDarkMode ? "text-white/60" : "text-muted-foreground";
  const roleTextClass = isDarkMode ? "text-white/[0.85]" : "text-foreground/80";
  const bodyTextClass = isDarkMode ? "text-white/[0.72]" : "text-muted-foreground";
  const pillClass = isDarkMode
    ? "border border-white/10 bg-white/[0.06] text-white/[0.72] backdrop-blur-sm hover:border-primary/40 hover:text-white"
    : "border border-border bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground";
  const secondaryButtonClass = isDarkMode
    ? "border border-white/[0.15] bg-white/[0.06] text-white backdrop-blur-sm hover:border-primary/40 hover:bg-white/[0.12]"
    : "border border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary";
  const socialButtonClass = isDarkMode
    ? "border border-white/[0.12] bg-white/[0.06] text-white/[0.68] hover:border-primary/30 hover:text-white"
    : "border border-border bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground";
  const statusTextClass = isDarkMode ? "text-white/60" : "text-muted-foreground";
  const statusValueClass = isDarkMode ? "text-white/[0.78]" : "text-foreground/70";
  const imageFrameClass = isDarkMode ? "border border-white/[0.12]" : "border border-white/10";
  const imageOverlayClass = isDarkMode ? "from-slate-950/70" : "from-card/60";
  const scrollTextClass = isDarkMode ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground";
  const scrollBorderClass = isDarkMode ? "border border-white/20" : "border border-border";

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background"
    >
      <div ref={bgRef} aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {isDarkMode ? (
          <HyperspaceBackground />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-[70vh] w-[70vw] rounded-full bg-primary/6 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[50vh] w-[50vw] rounded-full bg-accent/6 blur-[100px]" />
            <div className="absolute top-1/2 right-[22%] h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-primary/8 animate-rotate-slow" />
            <div
              className="absolute top-1/2 right-[22%] h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-primary/5 animate-rotate-slow"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
            />
            <div className="absolute top-32 left-[42%] h-2 w-2 rounded-full bg-primary/30 animate-pulse-glow" />
            <div
              className="absolute bottom-40 right-[48%] h-1.5 w-1.5 rounded-full bg-accent/40 animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            />
          </div>
        )}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid min-h-[85vh] items-center gap-16 py-20 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`mb-2 text-base font-semibold uppercase tracking-widest ${introTextClass}`}
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-3 font-display text-5xl font-bold leading-[1.05] md:text-6xl xl:text-7xl"
            >
              <span className="text-gradient">Sathish Kumar</span>
            </motion.h1>

            <AnimatedText
              text="Technical Lead & Full-Stack Engineer"
              className={`mb-6 font-display text-2xl font-semibold leading-snug md:text-3xl ${roleTextClass}`}
              delay={0.5}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className={`mb-7 max-w-xl text-base leading-relaxed ${bodyTextClass}`}
            >
              8+ years architecting enterprise-grade applications across IoT, Telecom, and
              E-commerce. Specialist in multi-tenant monorepos, real-time data visualization,
              and white-label systems serving global clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mb-8 flex flex-wrap gap-2"
            >
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-colors ${pillClass}`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="mb-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="hero-gradient inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary/25"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${secondaryButtonClass}`}
              >
                <FileText size={16} />
                View Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4"
            >
              {[
                {
                  href: "https://github.com/gitOfKumarSathish",
                  label: "GitHub",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/sathish-kumar-arputharajan",
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
                  className={`rounded-xl p-2.5 transition-colors ${socialButtonClass}`}
                  aria-label={label}
                >
                  {svg}
                </motion.a>
              ))}

              <span className={`mx-1 h-5 w-px ${isDarkMode ? "bg-white/[0.14]" : "bg-border"}`} />

              <div className={`flex items-center gap-2 text-xs ${statusTextClass}`}>
                <span className="font-medium text-accent">Currently building</span>
                <span className={`font-mono ${statusValueClass}`}>OtoSense SMS</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 scale-110 rounded-full hero-gradient opacity-10 blur-3xl" />

            <div className="relative">
              <div className="absolute -inset-1 rotate-1 rounded-[2.5rem] hero-gradient opacity-60 blur-[2px]" />
              <div
                className={`relative h-80 w-72 overflow-hidden rounded-[2.25rem] md:h-[360px] md:w-80 xl:h-[400px] xl:w-[340px] ${imageFrameClass}`}
              >
                <img
                  src={profilePhoto}
                  alt="Sathish Kumar Technical Lead Engineer"
                  className="h-full w-full object-cover object-top"
                  width={512}
                  height={640}
                />
                <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${imageOverlayClass} to-transparent`} />
              </div>
            </div>
          </motion.div>
        </div>

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
            className={`flex flex-col items-center gap-1.5 transition-colors ${scrollTextClass}`}
          >
            <span className="text-[11px] font-medium uppercase tracking-wider">Scroll</span>
            <div className={`flex h-8 w-5 items-start justify-center rounded-full pt-1.5 ${scrollBorderClass}`}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-primary"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
