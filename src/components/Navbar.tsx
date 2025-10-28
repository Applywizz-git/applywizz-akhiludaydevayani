import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy - determine active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const handleLinkClick = (href: string) => {
  setIsMobileMenuOpen(false);

  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // adjust to your navbar height
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 50); // <-- slight delay ensures DOM and animations settle
};


  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLinkClick(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong shadow-lg backdrop-blur-2xl"
          : "bg-transparent backdrop-blur-sm"
      }`}
      style={{ borderBottom: "none" }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            onKeyDown={(e) => handleKeyDown(e, "#home")}
            className="text-2xl font-bold text-gradient focus:outline-none focus:ring-2 focus:ring-accent rounded-lg px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            tabIndex={0}
          >
            AUD
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group focus:outline-none focus:ring-2 focus:ring-accent rounded-lg ${
                    isActive
                      ? "text-accent"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  tabIndex={0}
                >
                  {link.name}
                  <motion.span
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  />
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong backdrop-blur-2xl"
            style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
          >
            <div className="container-custom py-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block py-3 px-4 rounded-lg transition-colors border-b border-white/5 last:border-0 focus:outline-none focus:ring-2 focus:ring-accent ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                    }`}
                    tabIndex={0}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
