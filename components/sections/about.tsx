"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {`
            I'm a passionate software Developer specializing in React.js and Next.js, with extensive experience in building modern web applications. My expertise includes API integration, state management, and creating responsive user interfaces using Tailwind CSS and Material UI.
            
            `}
          </p>
          <p className="text-lg text-muted-foreground">
            {`
            Currently, I'm focused on developing healthcare technology solutions, leveraging my skills to create intuitive and accessible applications that make a difference in people's lives.

`}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
