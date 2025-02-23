"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import faizan from "../../app/assets/faizan.png"
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 rounded-full overflow-hidden"
          >
            <Image
              src={faizan}
              alt="Muhammad Faizan"
              className="object-cover"
              width={500} 
              height={500} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Muhammad Faizan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              React & Next.js Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Hire Me <Send className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href='/Muhammad-Faizan-Fullstack.pdf' download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;