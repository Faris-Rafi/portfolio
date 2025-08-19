import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLastDigitNumber(number: number) {
  if (!number) return "0";

  if (number < 999) {
    return number.toString().slice(-1);
  } else {
    number.toString().slice(-2);
  }
}
