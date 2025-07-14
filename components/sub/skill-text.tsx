"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="welcome-box py-3 px-6 border border-[#7042f88b] opacity-90 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-full"
      >
        <SparklesIcon className="text-[#b49bff] mr-3 h-5 w-5" />
        <h1 className="welcome-text text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Technical Expertise
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-4xl md:text-5xl font-bold mt-6 text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200"
      >
        Full-Stack Developer & AI Enthusiast
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-lg md:text-xl text-gray-300 mb-8 mt-4 text-center max-w-4xl leading-relaxed"
      >
        Crafting innovative solutions across multiple domains - from web development to AI/ML, 
        DevSecOps to mobile applications. Explore my comprehensive tech stack organized by expertise.
      </motion.div>

      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4 mt-4"
      >
        {[
          "Full-Stack Development",
          "AI & Machine Learning",
          "DevSecOps",
          "Mobile Development",
          "Cyber Security",
        ].map((domain, index) => (
          <motion.span
            key={domain}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
          >
            {domain}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};