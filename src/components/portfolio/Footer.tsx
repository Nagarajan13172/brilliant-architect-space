import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border px-4 py-8 sm:px-6">
    <div className="container mx-auto flex flex-col items-center justify-between gap-3 text-center md:flex-row md:gap-4 md:text-left">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-display text-lg font-bold text-gradient"
      >
        {"<Dev />"}
      </motion.span>
      <p className="flex items-center gap-1 text-sm text-muted-foreground">
        Built with <Heart size={14} className="text-destructive" /> by Sathish Kumar
      </p>
      <p className="text-sm text-muted-foreground">© 2026 All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
