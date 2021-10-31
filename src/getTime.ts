import { DateTime, Time } from "./types";

export function getTime(dateTime: DateTime): Time {
  return {
    hours: dateTime.hours,
    minutes: dateTime.minutes,
    seconds: dateTime.seconds,
    milliseconds: dateTime.milliseconds,
  };
}
