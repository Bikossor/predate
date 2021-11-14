import { predate } from "./types";

export function createDate(date: {
  year: number;
  month: number;
  day: number;
}): predate.Date {
  return { ...date };
}
