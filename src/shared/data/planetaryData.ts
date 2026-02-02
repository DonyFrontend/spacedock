export type PlanetFact = {
  name: string;
  radiusKm: string;
  mass: string;
  orbitalPeriod: string;
  meanTemp: string;
  moons: number;
};

export const planetFacts: PlanetFact[] = [
  {
    name: "Mercury",
    radiusKm: "2,439.7 km",
    mass: "3.30 × 10^23 kg",
    orbitalPeriod: "88 days",
    meanTemp: "167°C",
    moons: 0,
  },
  {
    name: "Venus",
    radiusKm: "6,051.8 km",
    mass: "4.87 × 10^24 kg",
    orbitalPeriod: "225 days",
    meanTemp: "464°C",
    moons: 0,
  },
  {
    name: "Earth",
    radiusKm: "6,371 km",
    mass: "5.97 × 10^24 kg",
    orbitalPeriod: "365.25 days",
    meanTemp: "15°C",
    moons: 1,
  },
  {
    name: "Mars",
    radiusKm: "3,389.5 km",
    mass: "6.42 × 10^23 kg",
    orbitalPeriod: "687 days",
    meanTemp: "-63°C",
    moons: 2,
  },
  {
    name: "Jupiter",
    radiusKm: "69,911 km",
    mass: "1.90 × 10^27 kg",
    orbitalPeriod: "11.86 years",
    meanTemp: "-145°C",
    moons: 95,
  },
  {
    name: "Saturn",
    radiusKm: "58,232 km",
    mass: "5.68 × 10^26 kg",
    orbitalPeriod: "29.45 years",
    meanTemp: "-178°C",
    moons: 146,
  },
  {
    name: "Uranus",
    radiusKm: "25,362 km",
    mass: "8.68 × 10^25 kg",
    orbitalPeriod: "84 years",
    meanTemp: "-224°C",
    moons: 27,
  },
  {
    name: "Neptune",
    radiusKm: "24,622 km",
    mass: "1.02 × 10^26 kg",
    orbitalPeriod: "164.8 years",
    meanTemp: "-214°C",
    moons: 14,
  },
];

export const planetaryMissions = [
  {
    name: "Voyager 1 & 2",
    timeframe: "1977–present",
    description:
      "Grand Tour of the outer planets, delivering first close-ups of Jupiter, Saturn, Uranus, and Neptune.",
    link: "https://voyager.jpl.nasa.gov/",
  },
  {
    name: "Cassini-Huygens",
    timeframe: "1997–2017",
    description:
      "Saturn system mission that revealed Titan’s lakes, Enceladus’ plumes, and ring dynamics.",
    link: "https://solarsystem.nasa.gov/missions/cassini-huygens/overview/",
  },
  {
    name: "Mars Reconnaissance Orbiter",
    timeframe: "2005–present",
    description:
      "High-resolution Mars orbiter mapping climate, geology, and potential water activity.",
    link: "https://mars.nasa.gov/mro/",
  },
  {
    name: "Juno",
    timeframe: "2011–present",
    description:
      "Polar orbiter studying Jupiter’s atmosphere, gravity field, magnetic field, and core.",
    link: "https://missionjuno.swri.edu/",
  },
  {
    name: "New Horizons",
    timeframe: "2006–present",
    description:
      "First reconnaissance of Pluto and Kuiper Belt objects, revealing complex geology.",
    link: "https://pluto.jhuapl.edu/",
  },
  {
    name: "Parker Solar Probe",
    timeframe: "2018–present",
    description:
      "Mission touching the Sun’s corona to investigate solar wind origins and dynamics.",
    link: "https://www.nasa.gov/mission/parker-solar-probe/",
  },
  {
    name: "OSIRIS-REx",
    timeframe: "2016–2023",
    description:
      "Sample return mission to asteroid Bennu, providing pristine material from the early solar system.",
    link: "https://www.nasa.gov/mission/osiris-rex/",
  },
  {
    name: "Europa Clipper",
    timeframe: "Launch 2024",
    description:
      "Upcoming mission to study Europa’s ocean world potential for habitability.",
    link: "https://www.nasa.gov/mission/europa-clipper/",
  },
];
