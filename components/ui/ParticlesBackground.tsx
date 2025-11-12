'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// You can use the slim engine to reduce the bundle size
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // This will initialize the tsparticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim build
      await loadSlim(engine);
    }).then(() => {
      // Once initialized, set init to true
      setInit(true);
    });
  }, []);

  // These are the options that configure the particles
  const particleOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1a1a2e", // Dark background color, similar to your image
        },
      },
      fpsLimit: 60, // Set a max FPS for performance
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // On hover, lines will "grab" the cursor
          },
          onClick: {
            enable: true,
            mode: "push", // On click, push particles away
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
          value: "#ffffff", // Particle (dot) color
        },
        links: {
          color: "#9c27b0", // Line color (a purple shade)
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Particles will bounce off the edges
          },
          random: true,
          speed: 2, // Movement speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 750, // Number of particles
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Particles will have a random size
        },
      
      },
      detectRetina: true,
    }),
    [],
  );

  // Render the particles only after the engine is initialized
  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
    );
  }

  // You can return a loading indicator or null while the engine is loading
  return null; 
};

export default ParticlesBackground;