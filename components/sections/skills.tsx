"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Webpack", "Vite", "TanStack Query"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            My technical toolkit and areas of expertise
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          loop={true} // Infinite loop
          autoplay={{
            delay: 0, // No delay, keeps running
            disableOnInteraction: false, // Keeps autoplay even when user interacts
          }}
          speed={7000} // Smooth continuous scrolling
          modules={[Autoplay]}
          className="w-full"
        >
          {skills.map((skillGroup) => (
            <SwiperSlide key={skillGroup.category} className="p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;