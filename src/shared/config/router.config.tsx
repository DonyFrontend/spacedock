import { Welcome } from "@/pages/welcome-page";
import Main from "@/pages/main";
import type React from "react";
// import { lazy } from "react";

export enum RouterEnum {
  MAIN = "/biblary",
  WELCOME = "/",
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
  [RouterEnum.WELCOME]: {
    element: <Welcome />,
    path: RouterEnum.WELCOME,
  },
};
