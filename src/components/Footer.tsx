import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 overflow-hidden glass-strong border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Akhil Uday Devayani</h3>
            <p className="text-muted-foreground">
              AML Analyst & Data Analytics Professional
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>© {new Date().getFullYear()} Akhil Uday Devayani.</span>
            <span>All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-highlight fill-highlight animate-pulse" />
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/50 transition-all animate-glow-pulse"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </footer>
  );
};

export default Footer;
