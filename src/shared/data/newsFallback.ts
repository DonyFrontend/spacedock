import type { NewsItem } from "@/shared/types/nasa";

// Curated fallback lists used when RSS feeds are unavailable.

export const fallbackPlanetaryNews: NewsItem[] = [
  {
    id: "planetary-1",
    title: "NASA missions map the solar system in new detail",
    summary:
      "Curated overview of planetary missions and the latest discoveries across the solar system.",
    source: "NASA Solar System",
    url: "https://solarsystem.nasa.gov/",
    date: "2024-10-01",
  },
  {
    id: "planetary-2",
    title: "Mars exploration updates",
    summary:
      "Mission dashboards and rover updates for the Red Planet.",
    source: "NASA Mars Exploration",
    url: "https://mars.nasa.gov/",
    date: "2024-09-20",
  },
  {
    id: "planetary-3",
    title: "Jupiter system highlights",
    summary:
      "Ongoing science from Juno and upcoming Europa Clipper preparations.",
    source: "NASA Solar System",
    url: "https://solarsystem.nasa.gov/planets/jupiter/overview/",
    date: "2024-08-18",
  },
  {
    id: "planetary-4",
    title: "Saturn science and ring dynamics",
    summary:
      "Cassini findings continue to shape our understanding of Saturn and its rings.",
    source: "NASA Solar System",
    url: "https://solarsystem.nasa.gov/planets/saturn/overview/",
    date: "2024-07-22",
  },
  {
    id: "planetary-5",
    title: "Neptune and Uranus overviews",
    summary:
      "Key facts about the ice giants and future mission concepts.",
    source: "NASA Solar System",
    url: "https://solarsystem.nasa.gov/planets/uranus/overview/",
    date: "2024-06-30",
  },
];

export const fallbackMoonNews: NewsItem[] = [
  {
    id: "moon-1",
    title: "Artemis program overview",
    summary: "NASA’s roadmap to return humans to the Moon and beyond.",
    source: "NASA Artemis",
    url: "https://www.nasa.gov/specials/artemis/",
    date: "2024-10-02",
  },
  {
    id: "moon-2",
    title: "LRO mission updates",
    summary: "Latest Lunar Reconnaissance Orbiter resources and data products.",
    source: "NASA",
    url: "https://www.nasa.gov/mission/lunar-reconnaissance-orbiter/",
    date: "2024-09-12",
  },
  {
    id: "moon-3",
    title: "CLPS deliveries",
    summary: "Commercial lunar deliveries bringing science payloads to the surface.",
    source: "NASA",
    url: "https://www.nasa.gov/clps/",
    date: "2024-08-29",
  },
  {
    id: "moon-4",
    title: "VIPER rover preparations",
    summary: "Volatile investigations at the lunar south pole.",
    source: "NASA",
    url: "https://www.nasa.gov/viper/",
    date: "2024-07-10",
  },
  {
    id: "moon-5",
    title: "Gateway lunar outpost",
    summary: "Plans for the lunar Gateway space station.",
    source: "NASA",
    url: "https://www.nasa.gov/gateway/",
    date: "2024-06-15",
  },
];

export const fallbackHeliophysicsNews: NewsItem[] = [
  {
    id: "helio-1",
    title: "NASA heliophysics program",
    summary: "Sun-Earth system science and mission updates.",
    source: "NASA",
    url: "https://science.nasa.gov/heliophysics/",
    date: "2024-10-05",
  },
  {
    id: "helio-2",
    title: "Space weather updates",
    summary: "Resources and dashboards for space weather monitoring.",
    source: "NASA",
    url: "https://www.nasa.gov/mission/space-weather/",
    date: "2024-09-08",
  },
  {
    id: "helio-3",
    title: "Parker Solar Probe science",
    summary: "Latest milestones from NASA’s Sun-touching mission.",
    source: "NASA",
    url: "https://www.nasa.gov/mission/parker-solar-probe/",
    date: "2024-08-16",
  },
  {
    id: "helio-4",
    title: "SOHO legacy data",
    summary: "Solar and heliospheric observatory updates and archives.",
    source: "ESA/NASA",
    url: "https://soho.nascom.nasa.gov/",
    date: "2024-07-01",
  },
  {
    id: "helio-5",
    title: "Solar Dynamics Observatory",
    summary: "Continuous solar monitoring and imagery.",
    source: "NASA",
    url: "https://sdo.gsfc.nasa.gov/",
    date: "2024-06-12",
  },
];

export const fallbackBpsNews: NewsItem[] = [
  {
    id: "bps-1",
    title: "ISS research highlights",
    summary: "Latest International Space Station research and technology news.",
    source: "NASA",
    url: "https://www.nasa.gov/mission/iss-research/",
    date: "2024-10-03",
  },
  {
    id: "bps-2",
    title: "Biological & Physical Sciences division",
    summary: "Overview of NASA’s space biology and physical sciences programs.",
    source: "NASA",
    url: "https://science.nasa.gov/biological-physical/",
    date: "2024-09-05",
  },
  {
    id: "bps-3",
    title: "Microgravity research",
    summary: "Research stories from microgravity experiments on the ISS.",
    source: "NASA",
    url: "https://www.nasa.gov/mission/iss-research/",
    date: "2024-08-03",
  },
  {
    id: "bps-4",
    title: "Space biosciences",
    summary: "Space biology studies improving life on Earth and in orbit.",
    source: "NASA",
    url: "https://science.nasa.gov/biological-physical/",
    date: "2024-07-25",
  },
  {
    id: "bps-5",
    title: "Physical sciences in space",
    summary: "Materials, combustion, and fluid physics in microgravity.",
    source: "NASA",
    url: "https://science.nasa.gov/biological-physical/",
    date: "2024-06-18",
  },
];
