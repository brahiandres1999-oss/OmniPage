import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges conditional Tailwind classes so component overrides remain predictable. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
