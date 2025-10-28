import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      company: "Cleveland State University",
      role: "Graduate Teaching Assistant – Risk & Compliance Analytics",
      period: "Aug 2023 – Dec 2024",
      highlights: [
        "Delivered graduate AML & fraud-analytics sessions using SQL + Python for 50+ case simulations",
        "Designed KYC and transaction-monitoring frameworks reducing false positives by 28%",
        "Automated grading via Python/VBA (cut turnaround 65%)",
        "Created Power BI dashboards for sanctions and SAR analysis",
        "Implemented ML anomaly models (+35% predictive gain)",
        "Executed sanctions screening simulations using OFAC/EU/FATF datasets",
        "Authored BSA/FinCEN-aligned AML methodologies and SAR templates",
      ],
    },
    {
      company: "Amazon – Alexa Data Services",
      role: "AML Analyst",
      period: "Oct 2018 – Dec 2022",
      highlights: [
        "Analyzed fund flows via SQL/Python → detection precision +34%",
        "Built ETL pipelines on AWS S3/Redshift → latency −40%",
        "Developed Power BI dashboards for SAR & entity linkages",
        "Re-tuned alert thresholds → false positives −27%",
        "Automated risk scoring workflows → manual review time < 5 min",
        "Integrated OFAC/FATF/Dow Jones watchlists for sanctions accuracy",
        "Mentored junior analysts in SAR narratives and audit controls",
      ],
    },
  ];

  return (
    <section
      id="experience"
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
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-highlight to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 0 ? "lg:text-right" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/50" />

                {/* Content */}
                <div className={index % 2 === 0 ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-strong rounded-3xl p-8 shadow-xl hover:shadow-accent/20 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-lg text-accent font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 text-left">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-foreground/80">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
