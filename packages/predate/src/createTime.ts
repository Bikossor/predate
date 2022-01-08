import { PreTime } from "./types";

/**
 * Creates a new `Time` from the given parameters.
 * @param date
 * @returns
 */
export const createTime = {
  fromJsDate: (jsDate: Date): PreTime => {
    return {
      hours: jsDate.getUTCHours(),
      minutes: jsDate.getUTCMinutes(),
      seconds: jsDate.getUTCSeconds(),
      milliseconds: jsDate.getUTCMilliseconds(),
    };
  },
  fromArray: (
    dateArray: readonly [
      hours: number,
      minutes: number,
      seconds?: number,
      milliseconds?: number
    ]
  ): PreTime => {
    return {
      hours: dateArray[0],
      minutes: dateArray[1],
      seconds: dateArray[2],
      milliseconds: dateArray[3],
    };
  },
  fromObject: (dateObject: {
    readonly hours: number;
    readonly minutes: number;
    readonly seconds?: number;
    readonly milliseconds?: number;
  }): PreTime => {
    return {
      ...dateObject,
    };
  },
  fromParams: (
    hours: number,
    minutes: number,
    seconds?: number,
    milliseconds?: number
  ): PreTime => {
    return { hours, minutes, seconds, milliseconds };
  },
};
