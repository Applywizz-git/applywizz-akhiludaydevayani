import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-highlight/5" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-highlight/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Desktop Order 1, Mobile Order 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-accent font-semibold text-lg mb-2">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
                Akhil Uday <br />
                <span className="text-gradient">Devayani</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-32 sm:h-24"
            >
              <TypeAnimation
                sequence={[
                  "Empowering Financial Integrity Through Data and Analytics",
                  2000,
                  "AML & Compliance Analytics Specialist",
                  2000,
                  "Leveraging Python, SQL, and Power BI",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl lg:text-3xl font-bold text-foreground/80"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              AML & Compliance Analytics Specialist with 5+ years of experience leveraging Python, SQL, and Power BI to enhance risk visibility, strengthen regulatory precision, and drive data-driven compliance strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-accent/50 transition-all"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image - Desktop Order 2, Mobile Order 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-highlight rounded-full blur-3xl opacity-30 animate-glow-pulse" />
              
              {/* Profile Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl glass"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-highlight/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gradient">AUD</span>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 glass rounded-2xl p-4 shadow-lg hidden sm:flex"
              >
                <span className="text-2xl">🐍</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-8 glass rounded-2xl p-4 shadow-lg hidden sm:flex"
              >
                <span className="text-2xl">📊</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-12 glass rounded-2xl p-4 shadow-lg hidden sm:flex"
              >
                <span className="text-2xl">☁️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground cursor-pointer"
          onClick={() => handleScroll("#about")}
        >
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
