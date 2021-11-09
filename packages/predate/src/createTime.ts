import { predate } from "./types";

export function createTime(time: {
  hours: number;
  minutes: number;
  seconds?: number;
  milliseconds?: number;
}): predate.Time {
  return { ...time };
}
