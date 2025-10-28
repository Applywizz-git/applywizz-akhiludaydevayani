import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import amlMonitoring from "@/assets/aml-monitoring.jpg";
import fraudDashboard from "@/assets/fraud-dashboard.jpg";
import kaizenWorkflow from "@/assets/kaizen-workflow.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
const swiperRef = useRef<any>(null); 

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

  const projects = [
    {
      title: "AML Transaction Monitoring & Suspicious Activity Detection",
      description:
        "Built Python + SQL pipeline (ETL + Airflow) → prep time −45%. Integrated OFAC/EU/PEP API fuzzy match (+38% precision). Applied Isolation Forest & DBSCAN → true positives +42%.",
      technologies: ["Python", "SQL", "Airflow", "OFAC API", "ML Models"],
      image: amlMonitoring,
      gradient: "from-accent to-highlight",
    },
    {
      title: "Fraud Risk Analytics Dashboard",
      description:
        "Unified KYC and payments data in Redshift → latency −60%. Interactive Power BI visuals → backlog −35%. Automated KPI alerts via Python + Power Automate.",
      technologies: ["Power BI", "AWS Redshift", "Python", "Power Automate"],
      image: fraudDashboard,
      gradient: "from-highlight to-accent",
    },
    {
      title: "Kaizen Project – Workflow Optimization for Editorial Risk Control",
      description:
        "AutoHotKey assistant → manual handoffs −40%. Audit-trail export → central CSV store for verification. Power BI queue tracker → dynamic workload balancing.",
      technologies: ["AutoHotKey", "Power BI", "Process Automation", "Audit Trail"],
      image: kaizenWorkflow,
      gradient: "from-accent via-highlight to-primary",
    },
  ];

return (
  <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
    {/* Background Decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
    </div>

    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Transforming compliance challenges into automated, data-driven solutions
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="py-12"
          style={{
            "--swiper-pagination-color": "hsl(var(--accent))",
            "--swiper-pagination-bullet-inactive-color": "hsl(var(--muted))",
          } as React.CSSProperties}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // capture instance
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.title}
              className="max-w-2xl"
              style={{ width: "600px" }}
              // 👉 Pause/Resume events
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              onTouchStart={() => swiperRef.current?.autoplay?.stop()}
              onTouchEnd={() => swiperRef.current?.autoplay?.start()}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-strong rounded-3xl overflow-hidden shadow-2xl h-full cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                  />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold rounded-full glass border border-accent/30 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
);
};

export default Projects;
