import { Date } from "./types";

export function createDate(date: {
  year: number;
  month: number;
  day: number;
}): Date {
  return { ...date };
}
