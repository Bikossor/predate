import * as predate from "./";

/**
 * Combines a given `Date` and `Time` into a new `DateTime`.
 * @param date
 * @param time
 * @returns
 */
export function combine(
  date: predate.Date,
  time: predate.Time
): predate.DateTime {
  return { ...date, ...time };
}
