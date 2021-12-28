import { PreDate, PreDateTime, PreTime } from "./types";

/**
 * Combines a given `Date` and `Time` into a new `DateTime`.
 * @param date
 * @param time
 * @returns
 */
export function combine(date: PreDate, time: PreTime): PreDateTime {
  return { ...date, ...time };
}
