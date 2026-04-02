import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin } from "lucide-react";

type Experience = {
  period: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  summary: string;
  highlights: string[];
  focus: string[];
  workstreams: string[];
  current?: boolean;
};

const experiences: Experience[] = [
  {
    period: "2024 - Present",
    role: "Technical Lead Engineer",
    company: "Alethea",
    client: "Client: Analog Devices India",
    location: "Bengaluru",
    current: true,
    summary:
      "Leading the OtoSense SMS platform end-to-end, from discovery and workflow design to delivery of a multi-tenant Angular monorepo used across enterprise operations.",
    highlights: [
      "Architected a shared Angular mono-repo powering SMS, Partner, and Operations applications with 41+ reusable components and 20 shared services.",
      "Built real-time dashboards for motor-health monitoring using Highcharts and ag-Grid across complex deployment hierarchies.",
      "Delivered white-label branding and customization workflows that support 28+ partner experiences from a unified codebase.",
    ],
    focus: ["Angular 21", "TypeScript", "Highcharts", "ag-Grid", "NGXS", "SCSS"],
    workstreams: [
      "OtoSense SMS platform architecture",
      "Partner and operations application rollout",
      "Shared component and service library",
    ],
  },
  {
    period: "2022 - 2024",
    role: "Lead Engineer",
    company: "Alethea",
    client: "Client: Analog Devices India",
    location: "Bengaluru",
    summary:
      "Expanded into cross-product engineering leadership across desktop applications, automation systems, and reusable front-end platforms.",
    highlights: [
      "Built React and Electron interfaces for Access Point GUI and SelfCare Portal with live telemetry visualizations and operational insights.",
      "Created WDIO and Cucumber-based automation frameworks for ReachMobile portals using a stable BDD workflow.",
      "Designed reusable React platform components including data tables, DAG builders, schema-driven forms, and data visualizers.",
    ],
    focus: ["React", "Electron", "WDIO", "Cucumber", "TanStack Query", "Highcharts"],
    workstreams: [
      "Access Point GUI",
      "ReachMobile automation framework",
      "SelfCare Portal and shared React components",
    ],
  },
  {
    period: "2021 - 2022",
    role: "Senior Software Engineer",
    company: "Alethea",
    location: "Bengaluru",
    summary:
      "Built cloud device-orchestration experiences that made large-scale Wi-Fi validation workflows observable, actionable, and easier to manage.",
    highlights: [
      "Developed front-end portals for device configuration, test setup, and live connectivity monitoring.",
      "Integrated Kibana dashboards and reporting views for both real-time and historical telemetry analysis.",
      "Improved operational visibility with device status tracking and map-based location context.",
    ],
    focus: ["React", "Node.js", "Kibana", "REST APIs", "Maps"],
    workstreams: [
      "Cloud Automation Test Framework portal",
      "Execution reporting dashboards",
      "Device orchestration and live observability",
    ],
  },
  {
    period: "2018 - 2021",
    role: "Software Engineer",
    company: "Ace Turtle (August Purple)",
    location: "Bengaluru",
    summary:
      "Started the journey building omni-channel commerce systems and brand storefront experiences across high-traffic retail products.",
    highlights: [
      "Built reusable React modules across OMS, IMS, CMS, and LMS workflows inside the Rubicon fulfillment platform.",
      "Delivered responsive PLP, PDP, and checkout journeys for brands including PUMA, RayBan, Superdry, NomadX, and Aldo.",
      "Contributed to component-driven front-end systems that accelerated delivery across the broader product suite.",
    ],
    focus: ["React", "E-commerce", "CMS", "XML Layouts", "Responsive UI"],
    workstreams: [
      "Rubicon omni-channel fulfillment platform",
      "Global brand commerce portals",
      "Reusable front-end component systems",
    ],
  },
];

const ExperienceTimelineItem = ({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    className={`relative pl-8 md:pl-12 ${isLast ? "" : "pb-16 md:pb-20"}`}
  >
    <div className="absolute bottom-0 left-0 top-0 w-px bg-border/70" />

    <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      <span
        className="inline-flex w-fit -translate-x-8 items-center rounded-full border-[3px] border-primary bg-background px-5 py-2 font-display text-xl font-bold text-foreground md:-translate-x-12 md:px-6 md:text-[1.75rem]"
        style={{ boxShadow: "0 0 0 12px hsl(var(--background))" }}
      >
        {experience.period}
      </span>

      <div className="space-y-1 md:pt-1">
        <p className="text-xl font-medium text-foreground/70 md:text-[2rem]">
          {experience.company}
        </p>
        {experience.client ? (
          <p className="text-sm text-muted-foreground">{experience.client}</p>
        ) : null}
      </div>
    </div>

    <div className="mt-6 border-t border-border/60 pt-8 md:pt-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.85fr)]">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <BriefcaseBusiness size={14} />
                {experience.role}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {experience.location}
              </span>
              {experience.current ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Current Chapter
                </span>
              ) : null}
            </div>

            <h3 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {experience.role}
            </h3>

            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {experience.summary}
            </p>
          </div>

          <ul className="space-y-3">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="hover-card-glow rounded-2xl border border-border/60 bg-card/55 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Focus
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-mono text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hover-card-glow rounded-2xl border border-border/60 bg-card/55 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Key Workstreams
            </p>
            <ul className="mt-4 space-y-2.5">
              {experience.workstreams.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </motion.article>
);

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Career Journey
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          Experience
        </h2>
        <div className="mt-5 h-px w-64 bg-border/70">
          <div className="hero-gradient h-full w-16 rounded-full" />
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          A progression from product engineering into platform leadership across IoT,
          telecom, automation, and e-commerce systems.
        </p>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
