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
  
  useEffect(() => {
    const runAnimation = async () => {
      // Step 1: RESET all spans to the starting (blurry) state
      await animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(10px)" : "none",
        },
        { duration: 0 } // Do this instantly
      );

      // Step 2: ANIMATE all spans to the final (clear) state
      await animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
      
      // Step 3: Tell the component the animation is finished
      setHasAnimated(true);
    };

    // Run the animation sequence
    runAnimation();

  // 3. --- THIS IS THE FIX ---
  // Use an empty dependency array (or one with stable functions).
  // This makes the hook run ONLY ONCE on mount.
  }, [animate, duration, filter]); // 'words' has been REMOVED.

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
                ${idx === 2 ? 'text-purple-400' : 'dark:text-white text-white'}
                ${!hasAnimated ? 'opacity-0' : 'opacity-100'}
              `}
              // Only apply the blur filter if the animation has NOT run yet.
              style={{
                filter: !hasAnimated && filter ? "blur(10px)" : "none",
              }}
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

