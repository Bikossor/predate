import { Date, DateTime, Time } from "./types";

export function combine(date: Date, time: Time): DateTime {
  return { ...date, ...time };
}
