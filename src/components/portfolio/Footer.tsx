import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-display text-lg font-bold text-gradient"
      >
        {"<Dev />"}
      </motion.span>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Built with <Heart size={14} className="text-destructive" /> by Sathish Kumar
      </p>
      <p className="text-sm text-muted-foreground">© 2026 All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
