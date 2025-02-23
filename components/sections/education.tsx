"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationItems = [
  {
    title: "Bachelor's in Computer Science",
    institution: "Virtual University of Pakistan",
    period: "2024",
    icon: GraduationCap
  },
  {
    title: "Cisco Aetworking Academy Certificate in C++ Programming",
    institution: "Computer Institute of Science Organization",
    period: "2023",
    icon: Award
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">
            My academic background and certifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.institution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;