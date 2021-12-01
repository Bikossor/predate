import * as predate from ".";

export function extractDate(dateTime: predate.DateTime): predate.Date {
  return {
    day: dateTime.day,
    month: dateTime.month,
    year: dateTime.year,
  };
}
