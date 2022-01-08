import { PreDate } from "./types";

/**
 * Creates a new `Date` from the given parameters.
 * @param date
 * @returns
 */
export const createDate = {
  fromJsDate: (jsDate: Date): PreDate => {
    return {
      year: jsDate.getUTCFullYear(),
      month: jsDate.getUTCMonth(),
      day: jsDate.getUTCDay(),
    };
  },
  fromArray: (
    dateArray: readonly [year: number, month: number, day: number]
  ): PreDate => {
    return {
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2],
    };
  },
  fromObject: (dateObject: {
    readonly year: number;
    readonly month: number;
    readonly day: number;
  }): PreDate => {
    return {
      ...dateObject,
    };
  },
  fromParams: (year: number, month: number, day: number): PreDate => {
    return { year, month, day };
  },
};
