import { PreTime } from "./types";

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
}): PreTime {
  return { ...time };
}
