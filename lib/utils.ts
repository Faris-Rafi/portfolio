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

export function objectHasEmptyValue(obj: Record<string, string | undefined>): boolean {
  return Object.values(obj).some(
    (value) => !value
  );
}

export function getObjectEmptyKeys(obj: Record<string, string | undefined>): string[] {
  return Object.entries(obj)
    .filter(([_, value]) => !value)
    .map(([key]) => key);
}

export function capitalizeFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
