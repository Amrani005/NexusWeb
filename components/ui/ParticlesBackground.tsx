'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
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
      fpsLimit: 60, 
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", 
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 10,
            links: {
              opacity: 0.7,
            },
          },
          push: {
            quantity: 8,
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
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none" as const, // <--- FIRST FIX
          enable: true,
          outModes: {
            default: "bounce" as const, // <--- SECOND FIX
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
          value: 750, 
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
    } as const), // This outer 'as const' is also good, we'll keep it.
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

export default ParticlesBackground;