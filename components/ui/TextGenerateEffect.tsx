"use client";
import { useEffect, useState } from "react"; // 1. Import useState
import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/utils/cn"; // Removed this line, it causes an error

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  // 2. Add state to track if the initial animation is done
  const [hasAnimated, setHasAnimated] = useState(false);
  
  let wordsArray = words.split(" ");
  
  

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // 4. --- THIS IS THE OTHER FIX ---
              // Only apply 'opacity-0' if the animation has NOT run yet.
              className={`
                ${idx === 2 ? 'text-purple-400 lg:text-8xl' : 'dark:text-white lg:text-8xl text-white'}
                
              `}
              // Only apply the blur filter if the animation has NOT run yet.
             
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    // Replaced cn() with a template literal
    <div className={`font-bold ${className || ''}`}>
      <div className="my-4">
        <div className=" text-white dark:text-black sm:text-6xl 
        leading-snug tracking-wide text-5xl lg:text-6xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

