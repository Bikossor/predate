import * as predate from "./";

/**
 * Creates a new `Time` from the given parameters.
 * @param date
 * @returns
 */
export function createTime(time: {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds?: number;
  readonly milliseconds?: number;
}): predate.Time {
  return { ...time };
}
