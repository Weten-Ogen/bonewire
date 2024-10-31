import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


interface fetchprops{
  url: string,
  data: FormData,

}
export function fetchUrl(){}