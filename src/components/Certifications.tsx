import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Trophy } from "lucide-react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      organization: "Google",
      icon: "📊",
    },
    {
      title: "AML & Financial Crime Fundamentals",
      organization: "LinkedIn Learning",
      icon: "🛡️",
    },
    {
      title: "Risk Management Principles (ISO 31000 & COSO ERM)",
      organization: "Coursera",
      icon: "⚖️",
    },
    {
      title: "Data-Driven Decision Making for Financial Risk",
      organization: "DataCamp",
      icon: "📈",
    },
    {
      title: "SQL for Data Analysis and Reporting",
      organization: "Coursera",
      icon: "🗄️",
    },
    {
      title: "Compliance Management & Regulatory Frameworks",
      organization: "LinkedIn Learning",
      icon: "📋",
    },
  ];

  const awards = [
    "Going the Extra Mile",
    "Superstar Award (×4)",
    "Shotgun Award",
    "Regional Operations Director ",
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={isVisible ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="glass-strong rounded-2xl p-6 cursor-pointer group perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center flex-shrink-0 text-3xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{cert.organization}</span>
                  </div>
                </div>
              </div>

              {/* Flip effect hint */}
              <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-muted-foreground text-center">
                  Verified Credential
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-strong rounded-3xl p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold text-gradient">Awards & Recognition</h3>
            <Trophy className="w-8 h-8 text-highlight" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 rounded-xl glass border border-accent/30 hover:border-accent/60 transition-all"
              >
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">{award}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
