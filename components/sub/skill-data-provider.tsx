"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const animationDelay = 0.05;

  // Fallback component for missing images
  const FallbackIcon = () => (
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
      <span className="text-purple-300 font-bold text-lg">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={containerVariants}
      animate={inView ? "visible" : "hidden"}
      className="relative group"
    >
      <motion.div
        variants={imageVariants}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="relative"
      >
        {!imageError ? (
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={`/skills/${src}`}
              width={width}
              height={height}
              alt={name}
              className={`transition-all duration-300 group-hover:scale-110 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setImageError(true)}
              priority={index < 6} // Prioritize first 6 images
            />
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-800/50 animate-pulse rounded-lg" />
            )}
          </div>
        ) : (
          <FallbackIcon />
        )}
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-300" />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
        {name}
      </div>
    </motion.div>
  );
};