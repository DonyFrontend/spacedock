import { type IImageOfTheDaySlice } from "@/pages/main/model/image-of-the-day/types/types";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { ImageOfTheDaySlice } from "@/pages/main/model/image-of-the-day/slice/slice";

const useImageOfTheDayStore = create(
  devtools<IImageOfTheDaySlice>((...args) => ({
    ...ImageOfTheDaySlice(...args),
  }))
);

export { useImageOfTheDayStore };
