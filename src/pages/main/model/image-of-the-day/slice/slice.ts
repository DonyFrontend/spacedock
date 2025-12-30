import { instance } from "@/shared/api/instance";
import { type IImageOfTheDaySlice } from "./../types/types";
import { type StateCreator } from "zustand";

export const ImageOfTheDaySlice: StateCreator<IImageOfTheDaySlice> = (set) => ({
  imageOfTheDay: {
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  },
  setImageOfTheDay(loading) {
    loading(true);
    instance
      .get("/planetary/apod", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => set(() => ({ imageOfTheDay: res.data })))
      .catch((err) => console.log(err))
      .finally(() => loading(false));
  },
});
