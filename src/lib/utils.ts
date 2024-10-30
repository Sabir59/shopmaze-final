import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Styles = { [key: string]: string };

function createScn(styles: Styles) {
  return function (...classNames: (string | undefined)[]): string {
    return classNames
      .filter(Boolean)
      .flatMap((className) =>
        className!.split(/\s+/).map((name) => styles[name] || name)
      )
      .join(" ");
  };
}

export default createScn;
