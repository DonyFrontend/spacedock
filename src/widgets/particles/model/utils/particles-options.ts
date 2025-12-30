import { MoveDirection } from "@tsparticles/engine";

const particlesOptions = {
  fullScreen: { enable: true },
  particles: {
    number: { value: 140, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 0.4,
      direction: MoveDirection.none,
      random: false,
      straight: false,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
    },
  },
  background: { color: "#000000" },
};

export { particlesOptions };
