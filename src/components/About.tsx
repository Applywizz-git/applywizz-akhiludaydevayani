import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Database, BarChart3, Cloud, Shield } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects", value: 15, suffix: "+" },
    { label: "Compliance Accuracy", value: 100, suffix: "%" },
  ];

  const techIcons = [
    { icon: Code2, name: "Python", color: "text-accent" },
    { icon: Database, name: "SQL", color: "text-highlight" },
    { icon: BarChart3, name: "Power BI", color: "text-accent" },
    { icon: Cloud, name: "AWS", color: "text-highlight" },
    { icon: Shield, name: "AML Tools", color: "text-accent" },
  ];

  const Counter = ({ end, duration, suffix }: { end: number; duration: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span className="text-5xl font-extrabold text-gradient">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="about"
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              As an AML & Compliance Analytics Specialist, I bridge the gap between financial 
              regulation and cutting-edge data engineering. With over 5 years of experience 
              analyzing fund flows, building transaction monitoring systems, and automating 
              risk detection, I've helped organizations maintain 100% compliance accuracy 
              while reducing false positives by up to 28%.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My expertise spans Python, SQL, Power BI, and AWS, enabling me to design 
              end-to-end ETL pipelines, implement machine learning anomaly detection models, 
              and create interactive dashboards that transform complex regulatory data into 
              actionable insights. I'm passionate about leveraging technology to strengthen 
              financial integrity and drive data-driven compliance strategies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform"
              >
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-strong rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
