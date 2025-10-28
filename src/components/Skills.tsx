import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
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

  const skillCategories = [
     {
      category: "Regulatory & Risk Frameworks",
      skills: [
        { name: "BSA/AML", level: 93 },
        { name: "KYC", level: 94 },
        { name: "CDD/EDD", level: 89 },
        { name: "FinCEN", level: 91 },
        { name: "SAR Reporting", level: 88 },
        
      ],
    },
    {
      category: "Compliance & Risk",
      skills: [
        { name: "AML/KYC", level: 95 },
        { name: "SAR Filing", level: 92 },
        { name: "Sanctions Screening", level: 90 },
        { name: "Risk Assessment", level: 88 },
      ],
    },
    {
      category: "Data Analytics & Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 92 },
        { name: "VBA", level: 80 },
        { name: "R", level: 75 },
      ],
    },
    {
      category: "Visualization & Reporting",
      skills: [
        { name: "Power BI", level: 93 },
        { name: "Tableau", level: 85 },
        { name: "Excel Advanced", level: 90 },
        { name: "Data Studio", level: 80 },
      ],
    },
    {
      category: "Databases & Big Data",
      skills: [
        { name: "MS SQL Server", level: 91 },
        { name: "PostgreSQL", level: 88 },
        { name: "Oracle DB", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "Apache Spark", level: 80 },
        
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Airflow", level: 82 },
        { name: "Redshift", level: 88 },
        { name: "S3", level: 90 },
      ],
    },
      {
      category: "Risk & Audit Analytics",
      skills: [
        { name: "RCA", level: 87 },
        { name: "Risk Scoring Models", level: 85 },
        { name: "KPI/KRI Tracking ", level: 91 },
        { name: "Alert Optimization", level: 88 },
        { name: "Scenario Tuning", level: 94 },
        { name: "Fraud Pattern Analytics", level: 92 },
      ],
    },
        {
      category: "Project & Process Management",
      skills: [
        { name: "Agile Scrum", level: 89 },
        { name: "Lean Six Sigma", level: 83 },
        { name: "Kaizen ", level: 90 },
        { name: "Business Process Mapping", level: 89 },
        { name: "Compliance Testing", level: 92 },
        { name: "Regulatory Reporting ", level: 90 },
      ],
    },
  ];

  const ProgressRing = ({
    level,
    name,
    delay,
  }: {
    level: number;
    name: string;
    delay: number;
  }) => {
    const [progress, setProgress] = useState(0);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setProgress(level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, level, delay]);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center"
      >
        <div className="relative w-28 h-28">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted/30"
            />
            {/* Progress circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--highlight))" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gradient">{progress}%</span>
          </div>
        </div>
        <p className="mt-3 text-sm font-semibold text-center">{name}</p>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-highlight/5 to-transparent"
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass-strong rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressRing
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
