import * as predate from "./";

export function combine(
  date: predate.Date,
  time: predate.Time
): predate.DateTime {
  return { ...date, ...time };
}
