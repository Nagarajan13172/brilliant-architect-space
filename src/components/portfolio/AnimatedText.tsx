import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <motion.div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: "easeOut" }}
          className="mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
