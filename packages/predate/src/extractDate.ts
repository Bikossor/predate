import * as predate from ".";

/**
 * The `extractTime` function returns just the [`Time`](https://predate.pages.dev/docs/api/types/Time) part of a given [`DateTime`](https://predate.pages.dev/docs/api/types/DateTime).
 * @param date
 * @returns
 */
export function extractDate(dateTime: predate.DateTime): predate.Date {
  return {
    day: dateTime.day,
    month: dateTime.month,
    year: dateTime.year,
  };
}
