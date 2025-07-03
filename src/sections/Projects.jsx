import React, { useState, useEffect } from "react";
import { myProjects } from "../constants";
import Project from "../assets/components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const SpringX = useSpring(x, { damping: 10, stiffness: 50 });
  const SpringY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreviewRaw] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // 👇 Detect mobile on initial render
  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
  }, []);

  const handleMouseMove = (event) => {
    if (!isMobile) {
      x.set(event.clientX + 20);
      y.set(event.clientY + 20);
    }
  };

  // 👇 Only allow setPreview if not mobile
  const setPreview = (img) => {
    if (!isMobile) {
      setPreviewRaw(img);
    }
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {!isMobile && preview && (
        <motion.img
          alt=""
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: SpringX, y: SpringY }}
        />
      )}
    </section>
  );
};

export default Projects;
