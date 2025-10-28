import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
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

  const education = [
    {
      degree: "Master of Computer & Information Science",
      institution: "Cleveland State University",
      location: "Cleveland, OH",
      period: "Jan 2023 – Dec 2024",
      description:
        "Specialized in Data Analytics, AML Systems, and Risk & Compliance frameworks. Developed advanced proficiency in Python, SQL, and machine learning applications for financial crime detection.",
      gradient: "from-accent to-highlight",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Institute of Aeronautical Engineering",
      location: "Hyderabad, India",
      period: "Aug 2014 – May 2018",
      description:
        "Built foundational expertise in programming, database systems, and software engineering. Completed capstone projects in data analysis and algorithm optimization.",
      gradient: "from-highlight to-accent",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-strong rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Section - Icon & Visual */}
                <div
                  className={`p-8 bg-gradient-to-br ${edu.gradient} flex flex-col items-center justify-center text-center`}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4"
                  >
                    <GraduationCap className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">
                    {edu.degree.split(" ").slice(2).join(" ")}
                  </p>
                </div>

                {/* Right Section - Details */}
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-2xl font-bold mb-3">{edu.institution}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-highlight" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-6 flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "auto" } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className={`h-1 ${
                          i === 0 ? "w-12 bg-accent" : i === 1 ? "w-8 bg-highlight" : "w-4 bg-primary"
                        } rounded-full`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
