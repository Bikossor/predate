import * as predate from "./";

export function getTime(dateTime: predate.DateTime): predate.Time {
  return {
    hours: dateTime.hours,
    minutes: dateTime.minutes,
    seconds: dateTime.seconds,
    milliseconds: dateTime.milliseconds,
  };
}
