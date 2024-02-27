import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const moreDes = ({ showFullDescription, des, length }: any) => {
  const description = showFullDescription
    ? des
    : des?.slice(0, length);
  return description
}