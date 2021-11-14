import { predate } from "./types";

export function getTime(dateTime: predate.DateTime): predate.Time {
  return {
    hours: dateTime.hours,
    minutes: dateTime.minutes,
    seconds: dateTime.seconds,
    milliseconds: dateTime.milliseconds,
  };
}
