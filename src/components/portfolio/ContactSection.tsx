import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project or opportunity" />

    <div className="container mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >
        <h3 className="mb-6 font-display text-2xl font-bold text-foreground sm:text-3xl">Let's Build Something Amazing</h3>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Whether you need a technical lead, architecture consultation, or just want to chat about tech — reach out!
        </p>

        <p className="mb-8 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground sm:text-base">
          <span className="font-semibold text-foreground">Open to:</span> Technical Lead, Lead Frontend Engineer,
          Full-Stack Engineer roles — Bengaluru / Remote.
        </p>

        <div className="space-y-4 mb-8">
          {[
            { icon: Mail, label: "sathish7845kumar@gmail.com", href: "mailto:sathish7845kumar@gmail.com" },
            { icon: Phone, label: "+91 9786452324", href: "tel:+919786452324" },
            { icon: MapPin, label: "Bengaluru, India", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} className="group flex items-center justify-center gap-4 text-muted-foreground transition-colors hover:text-foreground lg:justify-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <span className="font-medium break-all sm:break-normal">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-3 lg:justify-start">
          {[
            { icon: Github, href: "https://github.com/gitOfKumarSathish" },
            { icon: Linkedin, href: "https://linkedin.com/in/sathish7845kumar" },
          ].map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass hover-card-glow space-y-6 rounded-2xl p-5 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
          <input
            type="text"
            placeholder="Project Inquiry"
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-4 rounded-xl hero-gradient text-primary-foreground font-semibold flex items-center justify-center gap-2"
        >
          <Send size={18} /> Send Message
        </motion.button>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
