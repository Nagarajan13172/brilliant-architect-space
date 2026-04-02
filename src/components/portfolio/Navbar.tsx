import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Palette, Menu, X } from "lucide-react";
import { useTheme, type ColorPalette } from "@/context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const palettes: { id: ColorPalette; color: string; label: string }[] = [
  { id: "default", color: "bg-blue-500", label: "Default" },
  { id: "ocean", color: "bg-cyan-500", label: "Ocean" },
  { id: "sunset", color: "bg-orange-500", label: "Sunset" },
  { id: "forest", color: "bg-emerald-500", label: "Forest" },
  { id: "royal", color: "bg-purple-500", label: "Royal" },
];

const Navbar = () => {
  const { mode, toggleMode, palette, setPalette } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <motion.a
          href="#hero"
          className="font-display text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          {"<Dev />"}
        </motion.a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Palette picker */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
            >
              <Palette size={18} />
            </motion.button>
            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 top-12 glass rounded-xl p-3 flex flex-col gap-2 min-w-[140px]"
                >
                  {palettes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setPalette(p.id); setPaletteOpen(false); }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        palette === p.id ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${p.color}`} />
                      {p.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMode}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Mobile menu */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-secondary text-secondary-foreground"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
