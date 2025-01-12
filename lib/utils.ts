import { type ClassValue, clsx } from "clsx";
import { createFetch } from "ofetch";
import { twMerge } from "tailwind-merge";
import { env } from "~/env";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const apiFetch = createFetch({
  defaults: {
    baseURL: env.NEXT_PUBLIC_API_URI,
  },
});

function formatDate(inputDate: string) {
  const parts = inputDate.split(/[\/\s:]/);

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export { apiFetch, cn, formatDate };
