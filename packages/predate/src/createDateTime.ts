import { PreDateTime } from "./types";

/**
 * Creates a new `DateTime` from the given parameters.
 * @param date
 * @returns
 */
export const createDateTime = {
  fromJsDate: (jsDate: Date): PreDateTime => {
    return {
      year: jsDate.getUTCFullYear(),
      month: jsDate.getUTCMonth(),
      day: jsDate.getUTCDay(),
      hours: jsDate.getUTCHours(),
      minutes: jsDate.getUTCMinutes(),
      seconds: jsDate.getUTCSeconds(),
      milliseconds: jsDate.getUTCMilliseconds(),
    };
  },
  fromArray: (
    dateArray: readonly [
      year: number,
      month: number,
      day: number,
      hours: number,
      minutes: number,
      seconds?: number,
      milliseconds?: number
    ]
  ): PreDateTime => {
    return {
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2],
      hours: dateArray[3],
      minutes: dateArray[4],
      seconds: dateArray[5],
      milliseconds: dateArray[6],
    };
  },
  fromObject: (dateObject: {
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hours: number;
    readonly minutes: number;
    readonly seconds?: number;
    readonly milliseconds?: number;
  }): PreDateTime => {
    return {
      ...dateObject,
    };
  },
  fromParams: (
    year: number,
    month: number,
    day: number,
    hours: number,
    minutes: number,
    seconds?: number,
    milliseconds?: number
  ): PreDateTime => {
    return { year, month, day, hours, minutes, seconds, milliseconds };
  },
};
