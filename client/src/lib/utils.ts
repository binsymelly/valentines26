import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a public-asset path with Vite's BASE_URL.
 *
 * This avoids 404s on GitHub Pages project sites where the app is served from
 * a sub-path (e.g. `/valentines26/`) and `/videos/...` would otherwise resolve
 * from the domain root.
 *
 * Accepts either `/videos/x.mp4` or `videos/x.mp4`.
 */
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}
