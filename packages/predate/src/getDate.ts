import { predate } from "./types";

export function getDate(dateTime: predate.DateTime): predate.Date {
  return {
    day: dateTime.day,
    month: dateTime.month,
    year: dateTime.year,
  };
}
