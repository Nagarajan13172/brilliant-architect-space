import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Building2, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  client: string;
  period: string;
  role: string;
  featured?: boolean;
  summary: string;
  tech: string[];
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "OtoSense® SMS Platform",
    client: "Analog Devices • Alethea",
    period: "Jan 2024 – Present",
    role: "Technical Lead Engineer",
    featured: true,
    summary:
      "Enterprise-grade multi-tenant IoT platform enabling real-time motor health monitoring across hierarchical deployment structures for global industrial partners.",
    tech: [
      "Angular 21",
      "TypeScript",
      "Highcharts",
      "ag-Grid",
      "NGXS",
      "RxJS",
      "Transloco",
      "SCSS",
      "Monorepo",
    ],
    highlights: [
      "Spearheaded end-to-end project leadership as primary technical contact — gathered requirements, defined complex business logic, and architected comprehensive edge-case scenarios.",
      "Orchestrated technical discovery by presenting detailed workflow visualizations and architectural PPTs to secure design confirmation before development.",
      "Managed cross-functional work distribution across Front-End and Back-End workstreams for timely delivery of a multi-tenant monorepo.",
      "Architected a multi-tenant Angular monorepo supporting 3 distinct enterprise applications (Customer, Partner, Operations) with a shared library of 41+ reusable components and 20 services.",
      "Engineered high-performance dashboards using Highcharts and ag-Grid for real-time time-series visualization, enabling motor health tracking across hierarchical structures (Deployment → City → Plant).",
      "Developed a white-label branding engine using Transloco and dynamic SCSS theming, allowing 28+ global partners to customize UI styles, logos, and languages through a single unified codebase.",
      "Optimized application state with NGXS and RxJS for reactive data flows, incorporating lazy loading and continuation-token pagination for large datasets.",
      "Refined UX and security with intuitive device lifecycle workflows (commissioning/decommissioning), RBAC, and robust error-handling interceptors.",
      "Streamlined operational workflows by building automated reporting and notification systems.",
      "Leveraged AI-assisted development tools (GitHub Copilot, Claude) to accelerate component prototyping and automate unit testing.",
    ],
  },
  {
    title: "Centralized Component Library",
    client: "Analog Devices • Alethea",
    period: "May 2023 – Nov 2023",
    role: "Lead Engineer",
    summary:
      "Shared React component suite serving multiple projects — DataTable, Data Visualizer, Tree Viewer, DAG Builder, and JSON Form — built for versatility and reuse.",
    tech: [
      "React",
      "TypeScript",
      "Material React Table",
      "Tanstack Query",
      "Highcharts",
      "RJSF",
      "DAG",
    ],
    highlights: [
      "Designed and developed five core components: DataTable (table view), Data Visualizer (chart view), Tree Viewer (hierarchical view), DAG Builder (directed acyclic graph), and JSON Form (schema-to-form).",
      "Built DataTable using Material React Tables with advanced filtering, sorting, and pagination.",
      "Integrated Tanstack Query for server-state management and data synchronization across components.",
      "Engineered DAG Builder to visually represent directed acyclic graph structures for complex workflow modeling.",
      "Developed JSON Form component to dynamically convert JSON Schema objects into fully functional form structures using RJSF.",
      "Enabled seamless embedding of components across multiple React projects, reducing duplicate development effort significantly.",
    ],
  },
  {
    title: "SelfCare Portal",
    client: "Internal Product",
    period: "Oct 2022 – May 2023",
    role: "Lead Engineer",
    summary:
      "A Windows desktop application for monitoring Wi-Fi network health — running diagnostics, gathering local and AP controller metrics, and providing actionable repair suggestions.",
    tech: ["React", "Electron", "Gauge Charts", "Live Graphs"],
    highlights: [
      "Designed and built front-end from scratch using ReactJS inside an Electron shell for cross-platform desktop deployment.",
      "Integrated real-time gauge visualizations and live line graphs to surface network health metrics instantly.",
      "Implemented diagnostic workflows that gather traffic metrics locally and from the access point controller.",
      "Built an intelligent solution engine that surfaces remediation steps and provides an option to raise a support ticket when network health is degraded.",
    ],
  },
  {
    title: "Automation Framework — ReachMobile",
    client: "Internal QA Initiative",
    period: "Sep 2022 – Feb 2023",
    role: "Lead Engineer",
    summary:
      "End-to-end test automation framework and scripts for the ReachMobile web application using WDIO, JavaScript, and Cucumber BDD.",
    tech: ["JavaScript", "WDIO", "Cucumber", "BDD"],
    highlights: [
      "Developed the complete test automation framework from ground up using WDIO and Cucumber stack.",
      "Identified, implemented, and stabilized test cases for both the ReachMobile agent portal and end-user portal.",
      "Applied BDD methodology with Cucumber feature files to bridge communication between technical and non-technical stakeholders.",
      "Executed full regression cycles and hardened test stability to support continuous delivery pipelines.",
    ],
  },
  {
    title: "Access Point GUI",
    client: "Internal Product",
    period: "Apr 2022 – Sep 2022",
    role: "Lead Engineer",
    summary:
      "A web-based GUI for configuring access point parameters, selecting test categories, and monitoring live AP metrics through interactive charts.",
    tech: ["React", "Highcharts", "Live Graphs", "Pie Charts"],
    highlights: [
      "Led requirements gathering and translated stakeholder needs into a detailed front-end specification.",
      "Built the React application end-to-end, including configuration forms for access point parameters.",
      "Implemented live line graphs and pie charts to surface real-time access point metrics during test execution.",
      "Wrote unit tests to validate component behaviour and ensure reliability across test category selections.",
    ],
  },
  {
    title: "CloudATF — Cloud Automation Test Framework",
    client: "Internal Platform",
    period: "Feb 2021 – Apr 2022",
    role: "Senior Software Engineer",
    summary:
      "Cloud-deployed device orchestration framework enabling test execution across hundreds of devices simultaneously, with live Kibana dashboards and historical reporting.",
    tech: ["React", "Kibana", "Node.js", "Maps", "REST APIs"],
    highlights: [
      "Developed the complete front-end portal using ReactJS covering device configuration, test setup forms, and execution reports.",
      "Built a live device connectivity status dashboard with real-time map visualization of device locations.",
      "Embedded Kibana dashboards inside the portal to surface live telemetry data captured during test runs.",
      "Designed execution report pages for both current and historical test runs, supporting audit and regression workflows.",
    ],
  },
  {
    title: "Rubicon — Omni-Channel Fulfillment Platform",
    client: "Ace Turtle (August Purple)",
    period: "Feb 2018 – Feb 2021",
    role: "Software Engineer",
    summary:
      "In-house product unifying online and offline retail channels into a single distributed OMS, IMS, CMS, and LMS platform for enterprise brands.",
    tech: ["React", "Component Library", "OMS", "IMS", "CMS", "LMS"],
    highlights: [
      "Gathered requirements and built component-based React applications supporting Order, Inventory, Catalog, and Logistics management modules.",
      "Developed and maintained a reusable component library shared across the Rubicon product suite.",
      "Contributed to unit testing, documentation, and code review processes to maintain product quality.",
    ],
  },
  {
    title: "Brand Portals — PUMA, RayBan, Superdry & More",
    client: "Ace Turtle (August Purple)",
    period: "Feb 2018 – Feb 2021",
    role: "Software Engineer",
    summary:
      "Seasonal e-commerce portals for global brands (PUMA, RayBan, Superdry SG, NomadX SG, Aldo) with customizable themes, catalog support, and responsive layout.",
    tech: ["React", "CMS", "XML Layouts", "PLP/PDP", "Responsive Design"],
    highlights: [
      "Engineered themed campaign portals supporting configurable product catalogs and seasonal promotions.",
      "Built and modified PLP (Product Listing), PDP (Product Detail), and Checkout pages to brand specifications.",
      "Implemented XML layouts for CMS static pages ensuring flexible content management.",
      "Ensured highly responsive layouts optimised for all device types across five brand deployments.",
    ],
  },
];

const roleColors: Record<string, string> = {
  "Technical Lead Engineer": "bg-primary/10 text-primary",
  "Lead Engineer": "bg-accent/10 text-accent",
  "Senior Software Engineer": "bg-purple-500/10 text-purple-400",
  "Software Engineer": "bg-orange-500/10 text-orange-400",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass rounded-2xl overflow-hidden ${
        project.featured ? "ring-1 ring-primary/30" : ""
      }`}
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.featured && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                  Featured
                </span>
              )}
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  roleColors[project.role] ?? "bg-muted text-muted-foreground"
                }`}
              >
                {project.role}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Building2 size={11} className="text-primary/60 shrink-0" />
            {project.client}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={11} className="text-primary/60 shrink-0" />
            {project.period}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group"
        >
          <Layers size={13} />
          {expanded ? "Hide Details" : "View Key Contributions"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            <ChevronDown size={13} />
          </motion.span>
        </button>
      </div>

      {/* Expandable highlights */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="highlights"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Contributions
              </p>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <SectionHeading
        title="Projects"
        subtitle="Real-world enterprise work across IoT, e-commerce, automation, and beyond"
      />

      <div className="container mx-auto space-y-10">
        {/* Featured project — full width spotlight */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 rounded-full hero-gradient inline-block" />
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Spotlight Project
            </p>
          </div>
          <div className="grid gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* All other projects — 2-col grid */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 rounded-full bg-accent inline-block" />
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              All Projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {rest.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
        >
          {[
            { value: "8+", label: "Projects Delivered" },
            { value: "41+", label: "Reusable Components" },
            { value: "28+", label: "Global Partners" },
            { value: "9+", label: "Years of Experience" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-xl p-4 text-center border border-border"
            >
              <div className="font-display text-2xl font-bold text-gradient mb-1">
                {value}
              </div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
