import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Briefcase, FolderOpen, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Project = {
  name: string;
  highlights: string[];
  tech: string[];
};

type Experience = {
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  roleColor: string;
  companyAccent: string;
  dotColor: string;
  projects: Project[];
};

const experiences: Experience[] = [
  {
    role: "Technical Lead Engineer",
    company: "Alethea",
    client: "Client: Analog Devices India",
    location: "Bengaluru",
    period: "April 2024 – Present",
    duration: "1+ yr",
    current: true,
    roleColor: "bg-primary/10 text-primary border-primary/20",
    companyAccent: "border-l-primary",
    dotColor: "bg-primary",
    projects: [
      {
        name: "OtoSense® SMS Platform",
        tech: ["Angular 21", "TypeScript", "Highcharts", "ag-Grid", "NGXS", "RxJS", "SCSS", "Monorepo"],
        highlights: [
          "Spearheaded end-to-end project leadership as primary technical contact — gathered requirements, defined complex business logic, and architected comprehensive edge-case scenarios.",
          "Orchestrated technical discovery by presenting detailed workflow visualizations and architectural PPTs to secure design confirmation before development.",
          "Managed cross-functional work distribution across Front-End and Back-End workstreams for timely delivery of a multi-tenant mono-repo.",
          "Architected a multi-tenant Angular mono-repo supporting 3 distinct enterprise applications (SMS, Partner, Operations) with a shared library of 41+ reusable components and 20 services.",
          "Engineered high-performance dashboards using Highcharts and ag-Grid for real-time time-series visualization, enabling motor health tracking across hierarchical structures (Deployment → City → Plant).",
          "Developed a white-label branding engine using dynamic SCSS theming, allowing 28+ global partners to customize UI styles, logos, and languages through a single unified codebase.",
          "Optimized application state with NGXS and RxJS for reactive data flows, incorporating lazy loading and continuation-token pagination for large datasets.",
          "Refined UX and security with intuitive device lifecycle workflows (commissioning/decommissioning), RBAC, and robust error-handling interceptors.",
          "Streamlined operational workflows by building automated reporting and notification systems.",
        ],
      },
    ],
  },
  {
    role: "Lead Engineer",
    company: "Alethea",
    client: "Client: Analog Devices India",
    location: "Bengaluru",
    period: "April 2022 – April 2024",
    duration: "2 yrs",
    roleColor: "bg-accent/10 text-accent border-accent/20",
    companyAccent: "border-l-accent",
    dotColor: "bg-accent",
    projects: [
      {
        name: "Access Point GUI",
        tech: ["React", "Highcharts", "Live Graphs", "Pie Charts"],
        highlights: [
          "Developed a Web GUI enabling users to configure Access Point parameters and select test categories.",
          "Implemented live line graphs and pie charts to surface real-time access point metrics during test execution.",
        ],
      },
      {
        name: "Automation Framework — ReachMobile",
        tech: ["JavaScript", "WDIO", "Cucumber", "BDD"],
        highlights: [
          "Developed the complete test automation framework using WDIO and CucumberJs stack.",
          "Identified, implemented, and stabilized test cases for both the ReachMobile agent portal and end-user portal.",
          "Applied BDD methodology with CucumberJs feature files to bridge communication between technical and non-technical stakeholders.",
        ],
      },
      {
        name: "SelfCare Portal",
        tech: ["React", "Electron", "Gauge Charts", "Live Graphs"],
        highlights: [
          "Designed and built front-end from scratch using ReactJS inside an Electron shell for cross-platform desktop deployment.",
          "Integrated real-time gauge visualizations and live line graphs to surface network health metrics instantly.",
          "Built an intelligent solution engine that surfaces remediation steps and provides an option to raise a support ticket when network health is degraded.",
        ],
      },
      {
        name: "Centralized Component Library",
        tech: ["React", "TypeScript", "Tanstack Query", "Material React Table", "Highcharts", "RJSF", "DAG"],
        highlights: [
          "Designed and developed five core components: DataTable, Data Visualizer, Tree Viewer, DAG Builder, and JSON Form (schema-to-form).",
          "Integrated Tanstack Query for server-state management and data synchronization across components.",
          "Enabled seamless embedding of components across multiple React projects, reducing duplicate development effort significantly.",
        ],
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Alethea",
    location: "Bengaluru",
    period: "Feb 2021 – April 2022",
    duration: "1.2 yrs",
    roleColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    companyAccent: "border-l-violet-500",
    dotColor: "bg-violet-500",
    projects: [
      {
        name: "Cloud Automation Test Framework (CloudATF)",
        tech: ["React", "Kibana", "Node.js", "REST APIs", "Maps"],
        highlights: [
          "Cloud-ATF is a device orchestration framework deployed in the cloud, providing a portal to run tests on hundreds of devices to cross-verify Wi-Fi stability.",
          "Built the complete front-end portal including device configuration pages, test setup forms, live connectivity status, and map-based device location tracking.",
          "Embedded Kibana dashboards inside the portal to surface live telemetry data, with execution report pages for both current and historical test runs.",
        ],
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Ace Turtle (August Purple)",
    location: "Bengaluru",
    period: "Feb 2018 – Feb 2021",
    duration: "3 yrs",
    roleColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    companyAccent: "border-l-orange-500",
    dotColor: "bg-orange-500",
    projects: [
      {
        name: "Rubicon — Omni-Channel Fulfillment Platform",
        tech: ["React", "Component Library", "OMS", "IMS", "CMS", "LMS"],
        highlights: [
          "Rubicon focuses on Omni-channel solution, Order Management (OMS), Inventory Management (IMS), Catalog Management (CMS), and Logistics Management (LMS) — bringing together online and offline channels.",
          "Built component-based React applications supporting multiple management modules and developed reusable component libraries shared across the product suite.",
        ],
      },
      {
        name: "Global Brand Portals — PUMA, RayBan, Superdry, NomadX, Aldo",
        tech: ["React", "CMS", "XML Layouts", "PLP / PDP", "Responsive Design"],
        highlights: [
          "Engineered online merchandise portals with theme customization and XML layouts for seasonal campaigns.",
          "Built and modified PLP, PDP, and Checkout pages, ensuring a highly responsive layout across all device types.",
        ],
      },
    ],
  },
];

const roleOrder: Record<string, number> = {
  "Technical Lead Engineer": 1,
  "Lead Engineer": 2,
  "Senior Software Engineer": 3,
  "Software Engineer": 4,
};

const statItems = [
  { label: "Roles", value: `${experiences.length}`, icon: "◈" },
  { label: "Companies", value: "2", icon: "◈" },
  { label: "Total Tenure", value: "8+ yrs", icon: "◈" },
  { label: "Projects", value: `${experiences.reduce((a, e) => a + e.projects.length, 0)}`, icon: "◈" },
];

const ProjectCard = ({
  project,
  idx,
  defaultOpen,
}: {
  project: Project;
  idx: number;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.07, duration: 0.4 }}
      className="rounded-xl border border-border/60 bg-background/40 backdrop-blur-sm overflow-hidden hover:border-border transition-colors"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <FolderOpen size={14} className="text-muted-foreground shrink-0" />
          <span className="font-semibold text-sm text-foreground">{project.name}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <div className="px-5 pb-3 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted/80 text-muted-foreground border border-border/50"
          >
            {t}
          </span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="px-5 pb-5 space-y-2.5 border-t border-border/50 pt-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ExperienceCard = ({
  exp,
  index,
  isLast,
}: {
  exp: Experience;
  index: number;
  isLast: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    className="relative grid grid-cols-[auto_1fr] gap-0"
  >
    {/* Timeline column */}
    <div className="flex flex-col items-center w-14 shrink-0 pt-5">
      {/* Dot */}
      <div className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-background z-10 shrink-0`} />
      {/* Line */}
      {!isLast && (
        <div className="w-px flex-1 mt-2 bg-gradient-to-b from-border/60 to-transparent min-h-[2rem]" />
      )}
    </div>

    {/* Card */}
    <div className={`mb-10 glass rounded-2xl overflow-hidden border-l-[3px] ${exp.companyAccent} shadow-sm hover:shadow-md transition-shadow`}>

      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b border-border/50">
        <div className="flex flex-wrap items-start justify-between gap-4">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.roleColor}`}>
                {exp.role}
              </span>
              {exp.current && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mt-1">
              <Briefcase size={16} className="text-muted-foreground shrink-0" />
              {exp.company}
            </h3>
            {exp.client && (
              <p className="text-xs text-muted-foreground mt-1 ml-6">{exp.client}</p>
            )}
          </div>

          {/* Right: meta */}
          <div className="flex flex-col items-end gap-1.5 text-xs text-muted-foreground shrink-0">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              {exp.location}
            </span>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-muted border border-border mt-0.5">
              {exp.duration}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <FolderOpen size={12} />
          <span>
            {exp.projects.length} {exp.projects.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>

      {/* Projects grid — single col or 2-col based on count */}
      <div className={`px-6 py-5 ${exp.projects.length >= 2 ? "grid grid-cols-1 lg:grid-cols-2 gap-3" : "space-y-3"}`}>
        {exp.projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            idx={i}
            defaultOpen={exp.projects.length === 1}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <SectionHeading
      title="Work Experience"
      subtitle="8+ years across IoT, Telecom, E-commerce, and Automation"
    />

    <div className="container mx-auto max-w-6xl px-4">

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {statItems.map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="glass rounded-xl px-5 py-4 flex flex-col items-center text-center border border-border/50 hover:border-border transition-colors"
          >
            <span className="font-display text-2xl font-extrabold text-foreground tracking-tight">{value}</span>
            <span className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Career progression label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-xs text-muted-foreground mb-8 pl-14"
      >
        <TrendingUp size={13} className="text-accent" />
        <span className="uppercase tracking-widest font-semibold">Career Progression</span>
        <div className="flex-1 h-px bg-border/50" />
      </motion.div>

      {/* Timeline */}
      <div className="pl-0">
        {experiences
          .sort((a, b) => (roleOrder[a.role] ?? 99) - (roleOrder[b.role] ?? 99))
          .map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
