import * as predate from "./";

/**
 * Creates a new `DateTime` from the given parameters.
 * @param date
 * @returns
 */
export function createDateTime(params: {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds?: number;
  readonly milliseconds?: number;
}): predate.DateTime {
  return { ...params };
}
