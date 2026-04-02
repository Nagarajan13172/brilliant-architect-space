import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project or opportunity" />

    <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-2xl font-bold text-foreground mb-6">Let's Build Something Amazing</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Whether you need a technical lead, architecture consultation, or just want to chat about tech — reach out!
        </p>

        <div className="space-y-4 mb-8">
          {[
            { icon: Mail, label: "hello@example.com", href: "mailto:hello@example.com" },
            { icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
            { icon: MapPin, label: "San Francisco, CA", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
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
        className="glass rounded-2xl p-8 space-y-6"
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
