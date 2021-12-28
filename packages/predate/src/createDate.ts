import { PreDate } from "./types";

/**
 * Creates a new `Date` from the given parameters.
 * @param date
 * @returns
 */
export function createDate(date: {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}): PreDate {
  return { ...date };
}
