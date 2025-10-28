// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import Certifications from "@/components/Certifications";
// import Education from "@/components/Education";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// const Index = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Experience />
//         <Projects />
//         <Skills />
//         <Certifications />
//         <Education />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
