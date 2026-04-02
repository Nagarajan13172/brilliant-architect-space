import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-12 px-4 text-center sm:px-5 md:mb-16 md:px-6"
  >
    <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && (
      <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mx-auto mt-5 h-1 w-16 rounded-full hero-gradient sm:mt-6 sm:w-20"
    />
  </motion.div>
);

export default SectionHeading;
