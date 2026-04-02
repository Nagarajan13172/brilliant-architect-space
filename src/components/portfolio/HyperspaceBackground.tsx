import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";
import { useTheme } from "@/context/ThemeContext";

let particlesEnginePromise: Promise<void> | undefined;

const ensureParticlesEngine = () => {
  if (!particlesEnginePromise) {
    particlesEnginePromise = initParticlesEngine(async (engine) => {
      await loadHyperspacePreset(engine, false);
    });
  }

  return particlesEnginePromise;
};

const HyperspaceBackground = () => {
  const { mode, palette } = useTheme();
  const [isReady, setIsReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [colors, setColors] = useState({
    primary: "hsl(220 90% 60%)",
    accent: "hsl(160 84% 45%)",
    foreground: "rgba(255, 255, 255, 0.95)",
    trail: "#020617",
  });

  useEffect(() => {
    let mounted = true;

    ensureParticlesEngine().then(() => {
      if (mounted) {
        setIsReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const readHslToken = (token: string, fallback: string) => {
      const value = styles.getPropertyValue(token).trim();

      return value ? `hsl(${value})` : fallback;
    };

    setColors({
      primary: readHslToken("--primary", "hsl(220 90% 60%)"),
      accent: readHslToken("--accent", "hsl(160 84% 45%)"),
      foreground: mode === "light" ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.92)",
      trail: mode === "light" ? "#020617" : "#01040d",
    });
  }, [mode, palette]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.94)_0%,_rgba(2,6,23,0.98)_55%,_rgba(0,0,0,1)_100%)]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: [
            `radial-gradient(circle at 18% 28%, ${colors.primary} 0%, transparent 32%)`,
            `radial-gradient(circle at 78% 24%, ${colors.accent} 0%, transparent 28%)`,
            "radial-gradient(circle at 50% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 30%)",
          ].join(", "),
        }}
      />

      {isReady ? (
        <Particles
          id="hero-hyperspace"
          className="absolute inset-0 h-full w-full"
          options={{
            preset: "hyperspace",
            fullScreen: {
              enable: false,
            },
            background: {
              color: "transparent",
            },
            detectRetina: true,
            fpsLimit: prefersReducedMotion ? 45 : 120,
            particles: {
              number: {
                value: prefersReducedMotion ? 70 : 100,
              },
              color: {
                value: [colors.foreground, colors.primary, colors.accent],
              },
              life: {
                count: 1,
                duration: {
                  value: prefersReducedMotion ? 7 : 5,
                },
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 1,
              },
              size: {
                value: prefersReducedMotion ? 2.4 : 3,
              },
              move: {
                enable: true,
                speed: prefersReducedMotion ? 6 : 10,
                decay: 0.005,
                direction: "outside",
                straight: true,
                outModes: {
                  default: "destroy",
                },
                trail: {
                  enable: true,
                  length: prefersReducedMotion ? 10 : 15,
                  fill: {
                    color: colors.trail,
                  },
                },
              },
            },
            emitters: {
              position: {
                x: 50,
                y: 50,
              },
              size: {
                width: 100,
                height: 100,
              },
              rate: {
                quantity: prefersReducedMotion ? 6 : 10,
                delay: prefersReducedMotion ? 0.16 : 0.1,
              },
            },
          }}
        />
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.64)_36%,rgba(2,6,23,0.18)_68%,rgba(2,6,23,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-slate-950/30 to-background" />
    </div>
  );
};

export default HyperspaceBackground;
