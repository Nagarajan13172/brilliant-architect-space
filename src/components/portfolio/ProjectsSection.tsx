import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Enterprise Design System",
    description: "Built a comprehensive design system with 100+ components used across 8 product teams. Features theming, accessibility, and documentation.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind"],
    stars: "2.5k",
    featured: true,
  },
  {
    title: "Real-Time Collaboration Platform",
    description: "Architected a Google Docs-like collaboration tool supporting 10k+ concurrent users with real-time syncing.",
    tech: ["React", "WebSocket", "CRDT", "Redux"],
    stars: "1.8k",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "High-performance dashboard rendering 1M+ data points with interactive charts, filters, and export capabilities.",
    tech: ["Next.js", "D3.js", "GraphQL", "PostgreSQL"],
    stars: "950",
    featured: false,
  },
  {
    title: "E-Commerce Micro-Frontend",
    description: "Scalable e-commerce platform using micro-frontend architecture, serving 5M+ monthly active users.",
    tech: ["React", "Module Federation", "Node.js", "AWS"],
    stars: "1.2k",
    featured: false,
  },
  {
    title: "AI-Powered Code Review Tool",
    description: "VS Code extension using AI to provide intelligent code suggestions, detecting bugs and performance issues.",
    tech: ["TypeScript", "OpenAI", "VS Code API", "Node.js"],
    stars: "3.1k",
    featured: true,
  },
  {
    title: "Accessibility Testing Framework",
    description: "Open-source tool automating WCAG 2.1 compliance testing with CI/CD integration and reporting.",
    tech: ["TypeScript", "Playwright", "Node.js", "CI/CD"],
    stars: "800",
    featured: false,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-secondary/30">
    <SectionHeading title="Featured Projects" subtitle="Showcasing my best work and open-source contributions" />

    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -8 }}
          className={`glass rounded-2xl p-6 flex flex-col ${
            project.featured ? "ring-1 ring-primary/20" : ""
          }`}
        >
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full self-start mb-4">
              ⭐ Featured
            </span>
          )}
          <h3 className="font-display text-lg font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star size={14} className="text-accent" /> {project.stars}
            </span>
            <div className="flex gap-2">
              <motion.button whileHover={{ scale: 1.1 }} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Github size={16} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <ExternalLink size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
