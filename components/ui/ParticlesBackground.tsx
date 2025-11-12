'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
// No 'as const' imports are needed, they are used on the values themselves.

// I've renamed the component to make it clear this is the optimized version
const ParticlesBackgroundOptimized = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1a1a2e",
        },
      },
      fpsLimit: 60, // Capping at 60fps is still a good idea
      interactivity: {
        events: {
          onHover: {
            enable: false, // <-- FIX 1: Disabled hover interactivity
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140, // (Original was 10, which was too small to see anyway)
            links: {
              opacity: 0.7,
            },
          },
          push: {
            quantity: 4, // <-- FIX 2: Reduced from 8
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", 
        },
        links: {
          color: "#9c27b0", 
          distance: 150,
          enable: false, // <-- FIX 3: THIS IS THE BIGGEST PERFORMANCE WIN
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          }, 
          random: true,
          speed: 2, 
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80, // <-- FIX 4: Drastically reduced from 750
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, 
        },
      },
      detectRetina: true,
    } as const),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
    );
  }

  return null; 
};

export default ParticlesBackgroundOptimized;