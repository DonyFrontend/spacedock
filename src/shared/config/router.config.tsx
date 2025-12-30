import Main from "@/pages/main";
import type React from "react";
// import { lazy } from "react";

export enum RouterEnum {
  MAIN = "/biblary",
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
};
