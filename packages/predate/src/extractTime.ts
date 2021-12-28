import { PreDateTime, PreTime } from "./types";

/**
 * The `extractTime` function returns just the [`Time`](https://predate.pages.dev/docs/api/types/Time) part of a given [`DateTime`](https://predate.pages.dev/docs/api/types/DateTime).
 * @param date
 * @returns
 */
export function extractTime(dateTime: PreDateTime): PreTime {
  return {
    hours: dateTime.hours,
    minutes: dateTime.minutes,
    seconds: dateTime.seconds,
    milliseconds: dateTime.milliseconds,
  };
}
