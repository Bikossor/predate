import { Date, DateTime } from "./types";

export function getDate(dateTime: DateTime): Date {
  return {
    day: dateTime.day,
    month: dateTime.month,
    year: dateTime.year,
  };
}
