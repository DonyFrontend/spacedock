import { Welcome } from "@/pages/welcome-page";
import Main from "@/pages/main";
import PlanetaryScience from "@/pages/planetary-science";
import LunaryDiscovery from "@/pages/lunary-discovery";
import Heliophysics from "@/pages/heliophysics";
import BiologicalPhysical from "@/pages/biological-physical";
import type React from "react";
// import { lazy } from "react";

export enum RouterEnum {
  MAIN = "/biblary",
  WELCOME = "/",
  PLANETARY = "/planetary-science",
  LUNARY = "/lunary-discovery",
  HELIOPHYSICS = "/heliophysics",
  BIOLOGICAL = "/biological-physical",
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
  [RouterEnum.PLANETARY]: {
    element: <PlanetaryScience />,
    path: RouterEnum.PLANETARY,
  },
  [RouterEnum.LUNARY]: {
    element: <LunaryDiscovery />,
    path: RouterEnum.LUNARY,
  },
  [RouterEnum.HELIOPHYSICS]: {
    element: <Heliophysics />,
    path: RouterEnum.HELIOPHYSICS,
  },
  [RouterEnum.BIOLOGICAL]: {
    element: <BiologicalPhysical />,
    path: RouterEnum.BIOLOGICAL,
  },
  [RouterEnum.WELCOME]: {
    element: <Welcome />,
    path: RouterEnum.WELCOME,
  },
};
