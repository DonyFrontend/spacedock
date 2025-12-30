import type { Dispatch, SetStateAction } from "react";

export interface IImageOfTheDay {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface IImageOfTheDaySlice {
  imageOfTheDay: IImageOfTheDay;
  setImageOfTheDay: (loading: Dispatch<SetStateAction<boolean>>) => void;
}
