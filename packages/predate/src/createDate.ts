import * as predate from "./";

/**
 * Creates a new `Date` from the given parameters.
 * @param date
 * @returns
 */
export function createDate(date: {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}): predate.Date {
  return { ...date };
}
