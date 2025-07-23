export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://portfolio-backend-najv.onrender.com";

export const fromImageToUrl = (image: any) => {
  if (!image) {
    return "/favicon/apple-touch-icon.png"; //Or default image here
  }
  if (image.attributes) {
    //It's a relative url, add API URL
    return `${API_URL}${image.attributes.url}`;
  }

  return image.url;
};
