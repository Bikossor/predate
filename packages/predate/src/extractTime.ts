import * as predate from ".";

/**
 * The `extractTime` function returns just the [`Time`](https://predate.pages.dev/docs/api/types/Time) part of a given [`DateTime`](https://predate.pages.dev/docs/api/types/DateTime).
 * @param date
 * @returns
 */
export function extractTime(dateTime: predate.DateTime): predate.Time {
  return {
    hours: dateTime.hours,
    minutes: dateTime.minutes,
    seconds: dateTime.seconds,
    milliseconds: dateTime.milliseconds,
  };
}
