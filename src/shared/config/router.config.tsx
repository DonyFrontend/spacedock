import Main from "@/pages/main";
import PlanetaryScience from "@/pages/planetary-science";
import Lunary from "@/pages/lunary";
import Heliophysics from "@/pages/heliophysics";
import BiologicalPhysicalSciences from "@/pages/biological-physical-sciences";
import type React from "react";
// import { lazy } from "react";

export enum RouterEnum {
  MAIN = "/library",
  PLANETARY_SCIENCE = "/planetary-science",
  LUNARY = "/lunary",
  HELIOPHYSICS = "/heliophysics",
  BIOLOGICAL_PHYSICAL_SCIENCES = "/biological-physical-sciences",
}

export interface RouterType {
  path: string;
  element: React.ReactNode;
}

export const RoutesObject: Record<RouterEnum, RouterType> = {
  [RouterEnum.MAIN]: {
    element: <Main />,
    path: RouterEnum.MAIN,
  },
  [RouterEnum.PLANETARY_SCIENCE]: {
    element: <PlanetaryScience />,
    path: RouterEnum.PLANETARY_SCIENCE,
  },
  [RouterEnum.LUNARY]: {
    element: <Lunary />,
    path: RouterEnum.LUNARY,
  },
  [RouterEnum.HELIOPHYSICS]: {
    element: <Heliophysics />,
    path: RouterEnum.HELIOPHYSICS,
  },
  [RouterEnum.BIOLOGICAL_PHYSICAL_SCIENCES]: {
    element: <BiologicalPhysicalSciences />,
    path: RouterEnum.BIOLOGICAL_PHYSICAL_SCIENCES,
  },
};
