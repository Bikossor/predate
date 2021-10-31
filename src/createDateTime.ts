import { DateTime } from "./types";

export function createDateTime(params: {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds?: number;
  milliseconds?: number;
}): DateTime {
  return { ...params };
}
