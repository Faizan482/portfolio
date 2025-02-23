"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    FrontEnd software engineer
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Saloric IT | 2024 - Present
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Leading the development of a healthcare platform similar to
                    Oladoc
                  </li>
                  <li>
                    Implementing telemedicine features and doctor appointment
                    systems
                  </li>
                  <li>
                    Managing a team of developers and ensuring code quality
                  </li>
                  <li>Integrating payment gateways and healthcare APIs</li>
                  <li>
                    Optimizing application performance and user experience
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="max-w-3xl mx-auto mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">React Js Developer</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    NextPak Agile Solution | 2023
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Leading the development of Tissume Builder, a barber shop
                    management platform
                  </li>
                  <li>
                    Implementing booking systems, customer management, and
                    payment integration
                  </li>
                  <li>
                    Building an Airbnb-style platform for property rentals and
                    reservations
                  </li>
                  <li>
                    Optimizing application performance, UI/UX, and backend
                    efficiency
                  </li>
                  <li>
                    Collaborating with teams to ensure seamless functionality
                    and scalability
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="max-w-3xl mx-auto mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">React Js Internship</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Apna Dev| 2023
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed dynamic UI components using React.js and Tailwind
                    CSS
                  </li>
                  <li>
                    Worked on state management and API integrations for seamless
                    data flow
                  </li>
                  <li>
                    Optimized application performance and improved loading times
                  </li>
                  <li>
                    Collaborated with senior developers to implement best coding
                    practices
                  </li>
                  <li>
                    Gained hands-on experience with Git, version control, and
                    Agile development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
