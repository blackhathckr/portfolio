"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_CATEGORIES } from "@/constants";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillGridVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set([0]) // First category expanded by default
  );

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden py-20 px-4"
    >
      <SkillText />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white font-bold`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: expandedCategories.has(categoryIndex) ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </motion.div>
              </div>

              <motion.div
                variants={skillGridVariants}
                initial="hidden"
                animate={expandedCategories.has(categoryIndex) ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.skill_name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="flex flex-col items-center p-3 bg-gray-800/30 rounded-xl hover:bg-gray-700/40 transition-all duration-300 group hover:scale-105"
                    >
                      <div className="relative">
                        <SkillDataProvider
                          src={skill.image}
                          name={skill.skill_name}
                          width={skill.width}
                          height={skill.height}
                          index={skillIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      </div>
                      <span className="text-xs text-gray-300 mt-2 text-center font-medium">
                        {skill.skill_name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Background */}
      <div className="w-full h-full absolute inset-0 z-[-10]">
        <div className="w-full h-full absolute bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="w-full h-full absolute">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="w-full h-full opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};